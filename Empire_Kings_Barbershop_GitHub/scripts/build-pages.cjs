const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {createHash}=require('node:crypto');
const root=path.resolve(__dirname,'..');
const source=fs.readFileSync(path.join(root,'dist/app.js'),'utf8');
const prefix=source.slice(0,source.indexOf('let language='));
if(!prefix)throw new Error('Content boundary missing');
const {copy,MEDIA,LANG_PATHS,buildStructuredData}=vm.runInNewContext(prefix+';({copy,MEDIA,LANG_PATHS,buildStructuredData})');
const sceneCopy=vm.runInNewContext(source.slice(source.indexOf('const sceneCopy='),source.indexOf('const hero='))+';sceneCopy');
const config=vm.runInNewContext(fs.readFileSync(path.join(root,'dist/site-config.js'),'utf8')+';SITE_CONFIG');
const template=fs.readFileSync(path.join(root,'src/page.html'),'utf8');
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const origin=new URL(config.origin).origin;
const socialImage=fs.readFileSync(path.join(root,'dist/og.png'));
if(socialImage.subarray(0,8).toString('hex')!=='89504e470d0a1a0a')throw new Error('Social preview must be a valid PNG');
const socialWidth=socialImage.readUInt32BE(16),socialHeight=socialImage.readUInt32BE(20);
const socialUrl=origin+'/og.png?v='+createHash('sha256').update(socialImage).digest('hex').slice(0,12);
if(!origin.startsWith('https://'))throw new Error('A secure canonical origin is required');
for(const lang of ['en','fr','ar']){
 const t=copy[lang],url=origin+LANG_PATHS[lang];
 let html=template.replace('<html lang="en" dir="ltr">','<html lang="'+lang+'" dir="'+(lang==='ar'?'rtl':'ltr')+'">');
 html=html.replace(/(<([a-z][\w:-]*)\b[^>]*\bdata-t="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g,(all,start,tag,key,old,end)=>{
  if(!(key in t))throw new Error('Missing translation: '+lang+'.'+key);
  return start+escape(t[key])+end;
 });
 html=html.replace(/<title>[\s\S]*?<\/title>/,'<title>'+escape(t.title)+'</title>');
 html=html.replace(/(<meta name="description" content=")[^"]*(">)/,'$1'+escape(t.description)+'$2');
 html=html.replace(/(<meta property="og:title" content=")[^"]*(">)/,'$1'+escape(t.title)+'$2');
 html=html.replace(/(<meta property="og:description" content=")[^"]*(">)/,'$1'+escape(t.description)+'$2');
 html=html.replace(/<option value="(en|fr|ar)"/g,(all,value)=>all+(lang===value?' selected':''));
 html=html.replace(/(<a href="[^"]*" data-lang="([^"]+)"[^>]*)(>)/g,(all,start,value,end)=>start+(value===lang?' class="active" aria-current="true"':'')+end);
 html=html.replace('aria-label="Main navigation"','aria-label="'+escape(t.navLabel)+'"').replace('aria-label="Mobile navigation"','aria-label="'+escape(t.navLabel)+'"');
 html=html.replace('aria-roledescription="carousel"','aria-roledescription="'+escape(sceneCopy[lang].carousel)+'"');
 for(const [en,key]of [['Previous scene','previous'],['Next scene','next'],['Explore Empire Kings','group']])html=html.replace('aria-label="'+en+'"','aria-label="'+escape(sceneCopy[lang][key])+'"');
 html=html.replace('id="hero-visual"','id="hero-visual" aria-label="'+escape(sceneCopy[lang].scenes[0].alt)+'"');
 html=html.replace(/(class="hero-image"[^>]*alt=")[^"]*"/,'$1'+escape(sceneCopy[lang].scenes[0].alt)+'"');
 for(const [en,key]of [['Choose language','languageLabel'],['Open menu','openMenu'],['Photo gallery','photoGallery'],['Close gallery','closeGallery'],['Previous photo','previousPhoto'],['Next photo','nextPhoto']])html=html.replace('aria-label="'+en+'"','aria-label="'+escape(t[key])+'"');
 const services=t.services.map((service,index)=>'<details class="service-item reveal"><summary><span class="service-number">'+String(index+1).padStart(2,'0')+'</span><img class="service-emblem" src="/assets/logo-transparent.png" width="67" height="70" alt=""><div class="service-titles"><h3 class="service-summary-title">'+escape(service[1])+'</h3><span class="service-summary-sub">'+escape(service[2])+'</span></div><span class="plus" aria-hidden="true"></span></summary><p class="service-description">'+escape(service[3])+'</p><a class="service-book-link" href="#booking" data-book-service="'+index+'">'+escape(t.bookService)+'</a></details>').join('\n');
 html=html.replace('<!-- SERVICES -->',services);
 const gallery=MEDIA.gallery.map(photo=>{
  const label=photo[lang];
  return '<a class="gallery-card reveal" href="'+escape(photo.src)+'" aria-label="'+escape(t.openPhoto+': '+label.title)+'"><span class="gallery-photo"><img src="'+escape(photo.src)+'" alt="'+escape(label.alt)+'" width="700" height="900" loading="lazy" decoding="async"><span class="gallery-open"><svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></span></span><span class="gallery-caption"><strong>'+escape(label.title)+'</strong><small>'+escape(label.tag)+'</small></span></a>';
 }).join('\n');
 html=html.replace('<!-- GALLERY -->',gallery);
 html=html.replace('<!-- BOOKING_OPTIONS -->','<option value="">'+escape(t.bookingChooseService)+'</option>'+t.services.map((s,i)=>'<option value="'+i+'">'+escape(s[1])+'</option>').join(''));
 if(/^[1-9]\d{7,14}$/.test(config.whatsappNumber))html=html.replace('id="booking-unavailable"','id="booking-unavailable" hidden');
 const alternates=Object.entries(LANG_PATHS).map(([language,pathname])=>'<link rel="alternate" hreflang="'+language+'" href="'+origin+pathname+'">').join('\n');
 const metadata=[
  '<link rel="canonical" href="'+url+'">',alternates,
  '<link rel="alternate" hreflang="x-default" href="'+origin+'/">',
  '<meta name="robots" content="index,follow,max-image-preview:large">',
  '<meta property="og:url" content="'+url+'">',
  '<meta property="og:site_name" content="Empire Kings Barbershop">',
  '<meta property="og:locale" content="'+{en:'en_AE',fr:'fr_FR',ar:'ar_AE'}[lang]+'">',
  ...['en','fr','ar'].filter(other=>other!==lang).map(other=>'<meta property="og:locale:alternate" content="'+{en:'en_AE',fr:'fr_FR',ar:'ar_AE'}[other]+'">'),
  '<meta property="og:image" content="'+socialUrl+'">',
  '<meta property="og:image:secure_url" content="'+socialUrl+'">',
  '<meta property="og:image:type" content="image/png">',
  '<meta property="og:image:width" content="'+socialWidth+'">',
  '<meta property="og:image:height" content="'+socialHeight+'">',
  '<meta property="og:image:alt" content="'+escape(t.socialImageAlt)+'">',
  '<meta name="twitter:card" content="summary_large_image">',
  '<meta name="twitter:url" content="'+url+'">',
  '<meta name="twitter:title" content="'+escape(t.title)+'">',
  '<meta name="twitter:description" content="'+escape(t.description)+'">',
  '<meta name="twitter:image" content="'+socialUrl+'">',
  '<meta name="twitter:image:alt" content="'+escape(t.socialImageAlt)+'">',
  '<link rel="preload" href="/assets/fonts/sans.woff" as="font" type="font/woff" crossorigin>',
  '<script type="application/ld+json" id="local-business-schema">'+JSON.stringify(buildStructuredData(lang,origin,config.whatsappNumber,config.landlineNumber)).replace(/</g,'\\u003c')+'</script>'
 ].join('\n');
 html=html.replace('<!-- SEO_META -->',metadata);
 // New versions of scripts and styles must not reuse a stale browser cache.
 for(const asset of ['app.js','site-config.js','styles.css']){
  const hash=createHash('sha256').update(fs.readFileSync(path.join(root,'dist',asset))).digest('hex').slice(0,12);
  html=html.replaceAll('"/'+asset+'"','"/'+asset+'?v='+hash+'"');
 }
 if(/<!-- (SERVICES|GALLERY|BOOKING_OPTIONS|SEO_META) -->/.test(html))throw new Error('Unresolved page marker');
 const destination=path.join(root,'dist',lang==='en'?'':lang,'index.html');
 fs.mkdirSync(path.dirname(destination),{recursive:true});fs.writeFileSync(destination,html);
}
const locations=Object.values(LANG_PATHS).map(p=>origin+p);
const sitemap='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+locations.map(url=>'  <url><loc>'+url+'</loc></url>').join('\n')+'\n</urlset>\n';
fs.writeFileSync(path.join(root,'dist/sitemap.xml'),sitemap);
// Private Sites access is enforced by hosting; these directives prepare a future public launch.
fs.writeFileSync(path.join(root,'dist/robots.txt'),'User-agent: *\nAllow: /\n\nSitemap: '+origin+'/sitemap.xml\n');
console.log('Built English, French and Arabic HTML, structured data, sitemap and robots.txt.');
