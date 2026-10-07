'use strict';
MEDIA.hero=assetUrl(MEDIA.hero);if(MEDIA.craft)MEDIA.craft=assetUrl(MEDIA.craft);if(MEDIA.video&&MEDIA.video.startsWith('/'))MEDIA.video=assetUrl(MEDIA.video);MEDIA.gallery.forEach(photo=>{photo.src=assetUrl(photo.src);});
const PUBLIC_BASE=window.location.hostname.endsWith('github.io')?'/empire1':'';
const assetUrl=path=>PUBLIC_BASE+path;
const routeUrl=path=>PUBLIC_BASE+path;
const MEDIA = {"hero": "/assets/photos/IMG_2040.jpeg", "video": null, "craft": "/assets/photos/IMG_2045.jpeg", "gallery": [{"src": "/assets/photos/IMG_2045.jpeg", "position": "center 55%", "en": {"title": "Sharp fade & beard", "alt": "Sharp fade & beard at Empire Kings Barbershop", "tag": "Dubai"}, "fr": {"title": "Dégradé & barbe", "alt": "Dégradé & barbe chez Empire Kings Barbershop", "tag": "Dubaï"}, "ar": {"title": "تدرّج ولحية", "alt": "تدرّج ولحية في إمباير كينغز باربرشوب", "tag": "دبي"}}, {"src": "/assets/photos/IMG_2054.jpeg", "position": "center 55%", "en": {"title": "Braids & clean lines", "alt": "Braids & clean lines at Empire Kings Barbershop", "tag": "Dubai"}, "fr": {"title": "Tresses & contours", "alt": "Tresses & contours chez Empire Kings Barbershop", "tag": "Dubaï"}, "ar": {"title": "ضفائر وخطوط دقيقة", "alt": "ضفائر وخطوط دقيقة في إمباير كينغز باربرشوب", "tag": "دبي"}}, {"src": "/assets/photos/IMG_2048.jpeg", "position": "center 55%", "en": {"title": "The art of braiding", "alt": "The art of braiding at Empire Kings Barbershop", "tag": "Dubai"}, "fr": {"title": "L’art des tresses", "alt": "L’art des tresses chez Empire Kings Barbershop", "tag": "Dubaï"}, "ar": {"title": "فن الضفائر", "alt": "فن الضفائر في إمباير كينغز باربرشوب", "tag": "دبي"}}, {"src": "/assets/photos/IMG_2043.jpeg", "position": "center 55%", "en": {"title": "Classic styling", "alt": "Classic styling at Empire Kings Barbershop", "tag": "Dubai"}, "fr": {"title": "Coiffage classique", "alt": "Coiffage classique chez Empire Kings Barbershop", "tag": "Dubaï"}, "ar": {"title": "تصفيف كلاسيكي", "alt": "تصفيف كلاسيكي في إمباير كينغز باربرشوب", "tag": "دبي"}}, {"src": "/assets/photos/IMG_2042.jpeg", "position": "center 55%", "en": {"title": "Twists & precision", "alt": "Twists & precision at Empire Kings Barbershop", "tag": "Dubai"}, "fr": {"title": "Twists & précision", "alt": "Twists & précision chez Empire Kings Barbershop", "tag": "Dubaï"}, "ar": {"title": "تويست ودقة", "alt": "تويست ودقة في إمباير كينغز باربرشوب", "tag": "دبي"}}, {"src": "/assets/photos/IMG_2044.jpeg", "position": "center 55%", "en": {"title": "Cornrows & fade", "alt": "Cornrows & fade at Empire Kings Barbershop", "tag": "Dubai"}, "fr": {"title": "Nattes & dégradé", "alt": "Nattes & dégradé chez Empire Kings Barbershop", "tag": "Dubaï"}, "ar": {"title": "ضفائر وتدرّج", "alt": "ضفائر وتدرّج في إمباير كينغز باربرشوب", "tag": "دبي"}}, {"src": "/assets/photos/IMG_2041.jpeg", "position": "center 55%", "en": {"title": "Locs & styling", "alt": "Locs & styling at Empire Kings Barbershop", "tag": "Dubai"}, "fr": {"title": "Locs & coiffage", "alt": "Locs & coiffage chez Empire Kings Barbershop", "tag": "Dubaï"}, "ar": {"title": "لوكس وتصفيف", "alt": "لوكس وتصفيف في إمباير كينغز باربرشوب", "tag": "دبي"}}, {"src": "/assets/photos/IMG_2046.jpeg", "position": "center 55%", "en": {"title": "Curls & texture", "alt": "Curls & texture at Empire Kings Barbershop", "tag": "Dubai"}, "fr": {"title": "Boucles & texture", "alt": "Boucles & texture chez Empire Kings Barbershop", "tag": "Dubaï"}, "ar": {"title": "تموّجات وتفاصيل", "alt": "تموّجات وتفاصيل في إمباير كينغز باربرشوب", "tag": "دبي"}}, {"src": "/assets/photos/IMG_2040.jpeg", "position": "center 55%", "en": {"title": "Inside the salon", "alt": "Inside the salon at Empire Kings Barbershop", "tag": "Dubai"}, "fr": {"title": "À l’intérieur du salon", "alt": "À l’intérieur du salon chez Empire Kings Barbershop", "tag": "Dubaï"}, "ar": {"title": "داخل الصالون", "alt": "داخل الصالون في إمباير كينغز باربرشوب", "tag": "دبي"}}]};
const copy = {
en:{skip:'Skip to content',navLabel:'Main navigation',navStory:'Our story',navServices:'Services',navVisit:'Visit us',navGallery:'Gallery',languageLabel:'Choose language',visitUs:'Visit us',heroEyebrow:'DUBAI · THE ART OF GROOMING',heroLine1:'Not just a cut.',heroLine2:'A signature.',heroCopy:'Precision in every detail. Confidence in every reflection. Welcome to Empire Kings.',exploreServices:'Explore our services',visitDubai:'Visit us in Dubai',scroll:'Scroll to discover',heroNote:'YOUR STYLE. OUR CRAFT.',pauseMotion:'Pause motion',resumeMotion:'Resume motion',welcomeEyebrow:'WELCOME TO EMPIRE KINGS',welcomeLine1:'Style is personal.',welcomeLine2:'So is our craft.',welcomeCopy1:'A great cut begins with you. Your style, your routine, the way you want to feel. At Empire Kings Barbershop in Dubai, every detail is part of that conversation.',welcomeCopy2:'From a sharp fade to a carefully shaped beard, from a classic shave to hand and foot care — take a moment for yourself. Leave with a look that feels entirely yours.',value1:'Respect',value2:'Precision',value3:'Style',value4:'Details',servicesEyebrow:'OUR SERVICES',servicesLine1:'Your ritual.',servicesLine2:'Refined.',servicesCopy:'Clean lines. Considered care. Explore the details behind your next look.',findSalon:'Find the salon',visitEyebrow:'COME AS YOU ARE',visitLine1:'Your next look',visitLine2:'starts here.',visitCopy:'Find us in Dubai. Step into the Empire Kings experience.',ourDubaiSalon:'OUR DUBAI SALON',dubai:'Dubai',uae:'United Arab Emirates',brandName:'Empire Kings Barbershop',address:'Darwish Mall, Deira\nDubai, United Arab Emirates',visitNote:'For opening hours and directions, check the salon’s location before your visit.',directions:'Open in Google Maps',instagramContact:'Connect with us on Instagram',expansionEyebrow:'THE NEXT CHAPTER',expansionTitle:'The Empire is growing.',today:'Today',existingSalon:'The Empire Kings experience',comingSoon:'Coming soon',kinshasa:'Kinshasa',kinshasaNext:'Our next chapter in DR Congo',onHorizon:'On the horizon',dubaiNext:'A second address in the city',galleryEyebrow:'THE EMPIRE KINGS WORLD',galleryLine1:'A closer look.',galleryCopy:'The details, the atmosphere, the art of grooming.',seeInstagram:'More from Empire Kings on Instagram',socialEyebrow:'STAY IN THE PICTURE',socialTitle:'Good hair. Better days.',footerMotto:'THE DETAILS MAKE THE KING.',backTop:'Back to top',rights:'All rights reserved.',footerCities:'DUBAI · KINSHASA, COMING SOON',openMenu:'Open menu',closeMenu:'Close menu',openPhoto:'View photo',closeGallery:'Close gallery',previousPhoto:'Previous photo',nextPhoto:'Next photo',photoGallery:'Photo gallery',title:'Empire Kings Barbershop — Dubai',description:'Discover Empire Kings Barbershop in Dubai. Haircuts, beard grooming, shaving rituals, manicure and pedicure. Your style. Our craft.',services:[
['scissors','Haircut & Styling','A cut that feels like you.','Classic cuts, contemporary styles and carefully blended fades. We start with your preferences and shape a look that works with your hair and your everyday routine.'],
['razor','Classic Shave','A timeless grooming ritual.','A close, considered shave with attention to the contours of your face. Clean finishing and a polished look, with time taken over the details.'],
['beard','Beard Grooming','Clean lines. Your character.','Trimming, shaping and detailing tailored to your beard. From a subtle tidy-up to a more defined silhouette, the balance is in the finishing touches.'],
['towel','Hot Towel Ritual','Slow down. Refresh. Reset.','A warm towel ritual that gives your grooming visit a moment of calm. Comfort, care and an unhurried pause before you step back into your day.'],
['droplets','Hair Treatments','Care beyond the cut.','Hair and scalp care, with treatment and colour options to discuss at the salon. Talk to the team about your hair, your routine and the result you want.'],
['sparkles','Facial Grooming','A fresh face. A fresh start.','Facial grooming to complement your cut and beard care. A finishing ritual focused on a clean, refreshed look and the finer details of your appearance.'],
['child','Kids Haircuts','For our young kings.','A considered haircut for younger guests, with patience and attention to their comfort. Classic, neat or playful — a style to suit their personality.'],
['hand','Manicure','Well-groomed, down to your hands.','Nail shaping, cuticle attention and a neat finish for your hands. A simple, thoughtful part of a complete grooming routine.'],
['foot','Pedicure & Grooming Care','Care from head to toe.','Foot and nail grooming with attention to comfort and a clean finish. Take time for the details that are easy to overlook in a busy week.']]},
fr:{skip:'Aller au contenu',navLabel:'Navigation principale',navStory:'Notre esprit',navServices:'Services',navVisit:'Nous trouver',navGallery:'Galerie',languageLabel:'Choisir la langue',visitUs:'Nous trouver',heroEyebrow:'DUBAÏ · L’ART DU GROOMING',heroLine1:'Plus qu’une coupe.',heroLine2:'Une signature.',heroCopy:'La précision dans chaque détail. La confiance dans chaque reflet. Bienvenue chez Empire Kings.',exploreServices:'Découvrir nos services',visitDubai:'Nous retrouver à Dubaï',scroll:'Défiler pour découvrir',heroNote:'VOTRE STYLE. NOTRE SAVOIR-FAIRE.',pauseMotion:'Suspendre les animations',resumeMotion:'Activer les animations',welcomeEyebrow:'BIENVENUE CHEZ EMPIRE KINGS',welcomeLine1:'Le style est personnel.',welcomeLine2:'Notre attention aussi.',welcomeCopy1:'Une belle coupe commence par vous. Votre style, vos habitudes, l’allure que vous recherchez. Chez Empire Kings Barbershop à Dubaï, chaque détail fait partie de cet échange.',welcomeCopy2:'D’un dégradé précis à une barbe soigneusement dessinée, d’un rasage classique aux soins des mains et des pieds : prenez un moment pour vous. Repartez avec un style qui vous ressemble.',value1:'Respect',value2:'Précision',value3:'Style',value4:'Détails',servicesEyebrow:'NOS SERVICES',servicesLine1:'Votre rituel.',servicesLine2:'Tout en finesse.',servicesCopy:'Des lignes nettes. Des soins attentifs. Découvrez les détails de votre prochain style.',findSalon:'Trouver le salon',visitEyebrow:'VENEZ COMME VOUS ÊTES',visitLine1:'Votre prochain style',visitLine2:'commence ici.',visitCopy:'Retrouvez-nous à Dubaï. Entrez dans l’univers Empire Kings.',ourDubaiSalon:'NOTRE SALON À DUBAÏ',dubai:'Dubaï',uae:'Émirats arabes unis',brandName:'Empire Kings Barbershop',address:'Darwish Mall, Deira\nDubaï, Émirats arabes unis',visitNote:'Consultez la localisation du salon pour les horaires et l’itinéraire avant votre visite.',directions:'Ouvrir dans Google Maps',instagramContact:'Échangez avec nous sur Instagram',expansionEyebrow:'LE PROCHAIN CHAPITRE',expansionTitle:'L’Empire s’agrandit.',today:'Aujourd’hui',existingSalon:'L’expérience Empire Kings',comingSoon:'Prochainement',kinshasa:'Kinshasa',kinshasaNext:'Notre prochain chapitre en RDC',onHorizon:'À l’horizon',dubaiNext:'Une deuxième adresse dans la ville',galleryEyebrow:'L’UNIVERS EMPIRE KINGS',galleryLine1:'Au plus près du détail.',galleryCopy:'Les détails, l’atmosphère, l’art du grooming.',seeInstagram:'Retrouvez Empire Kings sur Instagram',socialEyebrow:'GARDEZ LE LIEN',socialTitle:'Du style. Et de beaux jours.',footerMotto:'LES DÉTAILS FONT LE KING.',backTop:'Retour en haut',rights:'Tous droits réservés.',footerCities:'DUBAÏ · BIENTÔT À KINSHASA',openMenu:'Ouvrir le menu',closeMenu:'Fermer le menu',openPhoto:'Voir la photo',closeGallery:'Fermer la galerie',previousPhoto:'Photo précédente',nextPhoto:'Photo suivante',photoGallery:'Galerie photo',title:'Empire Kings Barbershop — Dubaï',description:'Découvrez Empire Kings Barbershop à Dubaï. Coupes, entretien de barbe, rituels de rasage, manucure et pédicure. Votre style, notre savoir-faire.',services:[
['scissors','Coupe & Coiffage','Une coupe qui vous ressemble.','Coupes classiques, styles contemporains et dégradés soignés. Nous partons de vos envies pour dessiner un look adapté à vos cheveux et à votre quotidien.'],
['razor','Rasage classique','Un rituel intemporel.','Un rasage précis, attentif aux contours du visage. Des finitions nettes et une allure soignée, avec le temps nécessaire pour chaque détail.'],
['beard','Entretien de la barbe','Des lignes nettes. Du caractère.','Taille, dessin et finitions adaptés à votre barbe. D’un léger entretien à une silhouette plus affirmée, l’équilibre se joue dans les détails.'],
['towel','Rituel serviette chaude','Ralentir. Se détendre. Repartir.','Une serviette chaude pour apporter une pause à votre expérience de grooming. Du confort, de l’attention et un moment de calme avant de reprendre votre journée.'],
['droplets','Soins capillaires','Le soin au-delà de la coupe.','Soins des cheveux et du cuir chevelu, avec les possibilités de traitement et de coloration à découvrir au salon. Échangez avec l’équipe sur vos habitudes et le résultat recherché.'],
['sparkles','Soins du visage','Un visage frais. Un nouvel élan.','Des soins du visage qui complètent votre coupe et l’entretien de votre barbe. Un rituel de finition pour une apparence fraîche et soignée jusque dans les détails.'],
['child','Coupe enfant','Pour nos jeunes kings.','Une coupe pensée pour les plus jeunes, avec patience et attention à leur confort. Classique, nette ou pleine de caractère : un style adapté à leur personnalité.'],
['hand','Manucure','Soigné jusqu’au bout des mains.','Mise en forme des ongles, attention aux cuticules et finitions nettes. Un geste simple et attentif pour compléter votre routine de soin.'],
['foot','Pédicure & Soin des pieds','L’attention de la tête aux pieds.','Soin des pieds et des ongles, dans un esprit de confort et de propreté. Prenez le temps de ces détails que l’on oublie parfois dans une semaine chargée.']]},
ar:{skip:'انتقل إلى المحتوى',navLabel:'القائمة الرئيسية',navStory:'روح الصالون',navServices:'خدماتنا',navVisit:'زورونا',navGallery:'المعرض',languageLabel:'اختر اللغة',visitUs:'زورونا',heroEyebrow:'دبي · فن الحلاقة والعناية',heroLine1:'أكثر من قصة شعر.',heroLine2:'بصمتك الخاصة.',heroCopy:'دقة في كل تفصيل، وثقة في كل إطلالة. أهلاً بك في إمباير كينغز.',exploreServices:'اكتشف خدماتنا',visitDubai:'زر صالوننا في دبي',scroll:'اكتشف المزيد',heroNote:'أسلوبك. إتقاننا.',pauseMotion:'إيقاف الحركة',resumeMotion:'تشغيل الحركة',welcomeEyebrow:'أهلاً بك في إمباير كينغز',welcomeLine1:'أسلوبك يعبّر عنك.',welcomeLine2:'واهتمامنا يليق بك.',welcomeCopy1:'تبدأ القصة المثالية بك: أسلوبك، وروتينك، والإطلالة التي تبحث عنها. في إمباير كينغز باربرشوب في دبي، نهتم بكل تفصيل في هذا الحوار.',welcomeCopy2:'من التدرّج المتقن إلى اللحية المرسومة بعناية، ومن الحلاقة الكلاسيكية إلى العناية باليدين والقدمين. خذ لحظة لنفسك، وغادر بإطلالة تشبهك.',value1:'احترام',value2:'دقة',value3:'أناقة',value4:'تفاصيل',servicesEyebrow:'خدماتنا',servicesLine1:'لحظتك الخاصة.',servicesLine2:'بكل عناية.',servicesCopy:'خطوط دقيقة وعناية مدروسة. اكتشف تفاصيل إطلالتك القادمة.',findSalon:'موقع الصالون',visitEyebrow:'نرحّب بك كما أنت',visitLine1:'إطلالتك القادمة',visitLine2:'تبدأ هنا.',visitCopy:'تجدنا في دبي. ادخل إلى عالم إمباير كينغز.',ourDubaiSalon:'صالوننا في دبي',dubai:'دبي',uae:'الإمارات العربية المتحدة',brandName:'إمباير كينغز باربرشوب',address:'درويش مول، ديرة\nدبي، الإمارات العربية المتحدة',visitNote:'تحقّق من موقع الصالون لمعرفة أوقات العمل والاتجاهات قبل زيارتك.',directions:'افتح خرائط Google',instagramContact:'تواصل معنا عبر إنستغرام',expansionEyebrow:'الفصل القادم',expansionTitle:'إمباير كينغز يتوسّع.',today:'اليوم',existingSalon:'تجربة إمباير كينغز',comingSoon:'قريباً',kinshasa:'كينشاسا',kinshasaNext:'فصلنا القادم في الكونغو الديمقراطية',onHorizon:'في الأفق',dubaiNext:'عنوان ثانٍ في المدينة',galleryEyebrow:'عالم إمباير كينغز',galleryLine1:'نظرة أقرب.',galleryCopy:'التفاصيل، والأجواء، وفن العناية.',seeInstagram:'المزيد من إمباير كينغز على إنستغرام',socialEyebrow:'ابقَ على تواصل',socialTitle:'إطلالة جميلة. أيام أجمل.',footerMotto:'التفاصيل تصنع التميّز.',backTop:'العودة إلى الأعلى',rights:'جميع الحقوق محفوظة.',footerCities:'دبي · كينشاسا قريباً',openMenu:'افتح القائمة',closeMenu:'أغلق القائمة',openPhoto:'عرض الصورة',closeGallery:'إغلاق المعرض',previousPhoto:'الصورة السابقة',nextPhoto:'الصورة التالية',photoGallery:'معرض الصور',title:'إمباير كينغز باربرشوب — دبي',description:'اكتشف إمباير كينغز باربرشوب في دبي. قصات شعر متقنة، عناية باللحية، حلاقة كلاسيكية، وعناية باليدين والقدمين.',services:[
['scissors','قص وتصفيف الشعر','إطلالة تشبهك.','قصات كلاسيكية، وأساليب عصرية، وتدرّجات متقنة. ننطلق من تفضيلاتك لنصمّم إطلالة تناسب شعرك وروتينك اليومي.'],
['razor','الحلاقة الكلاسيكية','طقس عناية لا يزول.','حلاقة دقيقة تراعي ملامح وجهك. خطوط نظيفة ومظهر أنيق، مع الوقت والاهتمام اللازمين لكل تفصيل.'],
['beard','العناية باللحية','خطوط واضحة. شخصية مميّزة.','تشذيب وتحديد وتفاصيل تناسب لحيتك. من ترتيب خفيف إلى مظهر أكثر تحديداً، يكمن التوازن في اللمسات الأخيرة.'],
['towel','طقس المنشفة الساخنة','تمهّل. استرخِ. تجدّد.','منشفة دافئة تضيف لحظة هدوء إلى زيارتك. راحة وعناية واستراحة قصيرة قبل العودة إلى يومك.'],
['droplets','العناية بالشعر','عناية تتجاوز القصة.','عناية بالشعر وفروة الرأس، مع خيارات المعالجة والتلوين التي يمكنك مناقشتها في الصالون. تحدّث مع الفريق عن شعرك وروتينك والنتيجة التي تريدها.'],
['sparkles','العناية بالوجه','وجه منتعش. بداية جديدة.','عناية بالوجه تكمّل قصة شعرك وترتيب لحيتك. لمسات تركز على مظهر نظيف ومنتعش وعلى أدق تفاصيل إطلالتك.'],
['child','قصات الأطفال','لملوكنا الصغار.','قصة شعر للضيوف الصغار، بصبر واهتمام براحتهم. كلاسيكية أو مرتبة أو مرحة، وبأسلوب يناسب شخصيتهم.'],
['hand','العناية باليدين','أناقة تصل إلى أطراف أصابعك.','تهذيب الأظافر والعناية بالجلد المحيط بها للحصول على مظهر مرتب. خطوة بسيطة ومدروسة ضمن روتين عناية متكامل.'],
['foot','العناية بالقدمين','اهتمام من الرأس إلى القدمين.','عناية بالقدمين والأظافر مع الاهتمام بالراحة والمظهر النظيف. امنح وقتاً للتفاصيل التي قد تغيب عنك في أسبوع مزدحم.']]}
};
Object.assign(copy.en,{
  "bookNow": "Book a visit",
  "bookingEyebrow": "YOUR NEXT VISIT",
  "bookingLine1": "Your time.",
  "bookingLine2": "Your ritual.",
  "bookingCopy": "Tell us what you have in mind. Your request opens in WhatsApp, ready to send to the salon.",
  "bookingStep1": "Choose your service and preferred time.",
  "bookingStep2": "Send the prepared message on WhatsApp.",
  "bookingStep3": "The salon replies to confirm availability.",
  "bookingLocation": "Darwish Mall · Deira · Dubai",
  "bookingTimezone": "All requested times are in Dubai time (UTC+4).",
  "bookingName": "Your name",
  "bookingService": "Your service",
  "bookingChooseService": "Choose a service",
  "bookingDate": "Preferred date",
  "bookingTime": "Preferred time",
  "bookingNotes": "Anything else? (optional)",
  "bookingNote": "This is a request, not a confirmed appointment. Send your message in WhatsApp and wait for the salon’s reply.",
  "bookingSubmit": "Continue on WhatsApp",
  "bookingUnavailable": "WhatsApp bookings are not available yet. Contact the salon on Instagram to arrange your visit.",
  "bookingInstagram": "Contact the salon",
  "bookingNoScript": "Enable JavaScript to prepare a WhatsApp request, or contact us on Instagram.",
  "bookingNameError": "Please enter your name.",
  "bookingServiceError": "Please choose a service.",
  "bookingDateError": "Please choose a valid date and time.",
  "bookingPastError": "Please choose a future date and time in Dubai.",
  "bookingOpening": "Your request opens in WhatsApp. If nothing opens, use the link below. Send your message there; the salon will confirm availability.",
  "bookingRetry": "Open my request in WhatsApp",
  "bookingMessageTitle": "Hello Empire Kings! I’d like to request an appointment.",
  "bookingMessageName": "Name",
  "bookingMessageService": "Service",
  "bookingMessageDate": "Preferred date",
  "bookingMessageTime": "Preferred time",
  "bookingMessageNotes": "Notes",
  "bookingMessageEnd": "Could you please confirm availability? Thank you.",
  "bookService": "Choose this service",
  "heroEyebrow": "BARBERSHOP IN DEIRA, DUBAI",
  "heroLine1": "A cut.",
  "heroLine2": "A statement.",
  "heroCopy": "Precision in every detail. Confidence in every reflection.",
  "sceneKicker": "THE SIGNATURE CUT",
  "sceneDetailKicker": "MADE PERSONAL",
  "sceneDetailTitle": "Your style.\nOur craft.",
  "sceneDetailText": "A look that feels entirely yours, down to the last detail.",
  "sceneTab0": "The cut",
  "sceneSub0": "Your signature look",
  "sceneTab1": "The craft",
  "sceneSub1": "Precision in every detail",
  "sceneTab2": "The space",
  "sceneSub2": "Step inside Empire Kings",
  "title": "Empire Kings Barbershop | Deira, Dubai",
  "description": "Visit Empire Kings Barbershop at Darwish Mall, Deira, Dubai. Discover haircuts, beard grooming, classic shaves, manicure and pedicure, and plan your next visit."
});
Object.assign(copy.fr,{
  "bookNow": "Réserver",
  "bookingEyebrow": "VOTRE PROCHAINE VISITE",
  "bookingLine1": "Votre moment.",
  "bookingLine2": "Votre rituel.",
  "bookingCopy": "Dites-nous ce que vous souhaitez. Votre demande s’ouvre dans WhatsApp, prête à être envoyée au salon.",
  "bookingStep1": "Choisissez votre service et l’horaire souhaité.",
  "bookingStep2": "Envoyez le message préparé dans WhatsApp.",
  "bookingStep3": "Le salon vous répond pour confirmer sa disponibilité.",
  "bookingLocation": "Darwish Mall · Deira · Dubaï",
  "bookingTimezone": "Les horaires demandés sont ceux de Dubaï (UTC+4).",
  "bookingName": "Votre nom",
  "bookingService": "Votre service",
  "bookingChooseService": "Choisir un service",
  "bookingDate": "Date souhaitée",
  "bookingTime": "Heure souhaitée",
  "bookingNotes": "Une précision ? (facultatif)",
  "bookingNote": "Il s’agit d’une demande, pas d’un rendez-vous confirmé. Envoyez votre message dans WhatsApp et attendez la réponse du salon.",
  "bookingSubmit": "Continuer sur WhatsApp",
  "bookingUnavailable": "La réservation WhatsApp n’est pas encore disponible. Contactez le salon sur Instagram pour organiser votre visite.",
  "bookingInstagram": "Contacter le salon",
  "bookingNoScript": "Activez JavaScript pour préparer une demande WhatsApp, ou contactez-nous sur Instagram.",
  "bookingNameError": "Veuillez saisir votre nom.",
  "bookingServiceError": "Veuillez choisir un service.",
  "bookingDateError": "Veuillez choisir une date et une heure valides.",
  "bookingPastError": "Choisissez une date et une heure futures, à l’heure de Dubaï.",
  "bookingOpening": "Votre demande s’ouvre dans WhatsApp. Si rien ne s’ouvre, utilisez le lien ci-dessous. Envoyez-y votre message ; le salon confirmera sa disponibilité.",
  "bookingRetry": "Ouvrir ma demande dans WhatsApp",
  "bookingMessageTitle": "Bonjour Empire Kings ! Je souhaite demander un rendez-vous.",
  "bookingMessageName": "Nom",
  "bookingMessageService": "Service",
  "bookingMessageDate": "Date souhaitée",
  "bookingMessageTime": "Heure souhaitée",
  "bookingMessageNotes": "Précisions",
  "bookingMessageEnd": "Pouvez-vous me confirmer votre disponibilité ? Merci.",
  "bookService": "Choisir ce service",
  "heroEyebrow": "BARBERSHOP À DEIRA, DUBAÏ",
  "heroLine1": "Une coupe.",
  "heroLine2": "Du caractère.",
  "heroCopy": "La précision dans chaque détail. La confiance dans chaque reflet.",
  "sceneKicker": "LA COUPE SIGNATURE",
  "sceneDetailKicker": "À VOTRE IMAGE",
  "sceneDetailTitle": "Votre style.\nNotre savoir-faire.",
  "sceneDetailText": "Une allure qui vous ressemble, jusque dans les moindres détails.",
  "sceneTab0": "La coupe",
  "sceneSub0": "Votre style signature",
  "sceneTab1": "Le savoir-faire",
  "sceneSub1": "La précision du détail",
  "sceneTab2": "Le salon",
  "sceneSub2": "Entrez chez Empire Kings",
  "title": "Empire Kings Barbershop | Coiffeur à Deira, Dubaï",
  "description": "Découvrez Empire Kings Barbershop à Darwish Mall, Deira, Dubaï : coupes, entretien de barbe, rasage classique, manucure et pédicure. Préparez votre prochaine visite."
});
Object.assign(copy.ar,{
  "bookNow": "احجز زيارتك",
  "bookingEyebrow": "زيارتك القادمة",
  "bookingLine1": "وقتك.",
  "bookingLine2": "لحظتك الخاصة.",
  "bookingCopy": "أخبرنا بما ترغب فيه. يفتح طلبك في واتساب، جاهزاً لإرساله إلى الصالون.",
  "bookingStep1": "اختر الخدمة والموعد الذي تفضّله.",
  "bookingStep2": "أرسل الرسالة الجاهزة عبر واتساب.",
  "bookingStep3": "يردّ الصالون لتأكيد توافر الموعد.",
  "bookingLocation": "درويش مول · ديرة · دبي",
  "bookingTimezone": "جميع الأوقات المطلوبة بتوقيت دبي (UTC+4).",
  "bookingName": "اسمك",
  "bookingService": "الخدمة",
  "bookingChooseService": "اختر خدمة",
  "bookingDate": "التاريخ المفضّل",
  "bookingTime": "الوقت المفضّل",
  "bookingNotes": "ملاحظات إضافية (اختياري)",
  "bookingNote": "هذا طلب موعد وليس حجزاً مؤكداً. أرسل رسالتك في واتساب وانتظر ردّ الصالون.",
  "bookingSubmit": "المتابعة عبر واتساب",
  "bookingUnavailable": "الحجز عبر واتساب غير متاح بعد. تواصل مع الصالون عبر إنستغرام لترتيب زيارتك.",
  "bookingInstagram": "تواصل مع الصالون",
  "bookingNoScript": "فعّل JavaScript لإعداد طلب واتساب، أو تواصل معنا عبر إنستغرام.",
  "bookingNameError": "يرجى إدخال اسمك.",
  "bookingServiceError": "يرجى اختيار خدمة.",
  "bookingDateError": "يرجى اختيار تاريخ ووقت صالحين.",
  "bookingPastError": "يرجى اختيار موعد قادم بتوقيت دبي.",
  "bookingOpening": "يفتح طلبك في واتساب. إذا لم يفتح، استخدم الرابط أدناه. أرسل رسالتك هناك وسيؤكد الصالون توافر الموعد.",
  "bookingRetry": "افتح طلبي في واتساب",
  "bookingMessageTitle": "مرحباً إمباير كينغز! أرغب في طلب موعد.",
  "bookingMessageName": "الاسم",
  "bookingMessageService": "الخدمة",
  "bookingMessageDate": "التاريخ المفضّل",
  "bookingMessageTime": "الوقت المفضّل",
  "bookingMessageNotes": "ملاحظات",
  "bookingMessageEnd": "هل يمكنكم تأكيد توافر الموعد؟ شكراً لكم.",
  "bookService": "اختر هذه الخدمة",
  "heroEyebrow": "صالون حلاقة في ديرة، دبي",
  "heroLine1": "قصّة شعر.",
  "heroLine2": "شخصية مميّزة.",
  "heroCopy": "دقة في كل تفصيل، وثقة في كل إطلالة.",
  "sceneKicker": "قصّة بتوقيعك",
  "sceneDetailKicker": "بصمتك الخاصة",
  "sceneDetailTitle": "أسلوبك.\nإتقاننا.",
  "sceneDetailText": "إطلالة تشبهك تماماً، وصولاً إلى أدق التفاصيل.",
  "sceneTab0": "القصّة",
  "sceneSub0": "إطلالتك الخاصة",
  "sceneTab1": "الإتقان",
  "sceneSub1": "دقة في كل تفصيل",
  "sceneTab2": "الصالون",
  "sceneSub2": "ادخل إلى عالم إمباير",
  "title": "إمباير كينغز باربرشوب | صالون حلاقة في ديرة، دبي",
  "description": "اكتشف إمباير كينغز باربرشوب في درويش مول، ديرة، دبي. قص وتصفيف الشعر والعناية باللحية والحلاقة والعناية باليدين والقدمين. خطّط لزيارتك القادمة."
});

Object.assign(copy.en,{address:'Darwish Mall, M floor, 04\nOpposite Day to Day, near Baniyas Center Building\nDeira, Dubai, United Arab Emirates',bookingLocation:'Darwish Mall · M floor, 04 · Deira, Dubai',callSalon:'Call the salon',chatWhatsApp:'Chat on WhatsApp',shareSite:'Share this site',shareSiteCopied:'Official site link copied.'});
Object.assign(copy.fr,{address:'Darwish Mall, étage M, 04\nEn face de Day to Day, près de Baniyas Center Building\nDeira, Dubaï, Émirats arabes unis',bookingLocation:'Darwish Mall · Étage M, 04 · Deira, Dubaï',callSalon:'Appeler le salon',chatWhatsApp:'Écrire sur WhatsApp',shareSite:'Partager le site',shareSiteCopied:'Lien officiel du site copié.'});
Object.assign(copy.ar,{address:'درويش مول، الطابق M، 04\nمقابل Day to Day، بالقرب من مبنى Baniyas Center\nديرة، دبي، الإمارات العربية المتحدة',bookingLocation:'درويش مول · الطابق M · 04 · ديرة، دبي',callSalon:'اتصل بالصالون',chatWhatsApp:'تواصل عبر واتساب',shareSite:'شارك الموقع',shareSiteCopied:'تم نسخ رابط الموقع الرسمي.'});
const LANG_PATHS={en:'/',fr:'/fr/',ar:'/ar/'};
Object.assign(copy.en,{callLandline:'Salon landline',socialImageAlt:'Empire Kings Barbershop, Dubai Deira — salon and brand logo'});
Object.assign(copy.fr,{callLandline:'Téléphone fixe du salon',socialImageAlt:'Empire Kings Barbershop, Deira, Dubaï — salon et logo'});
Object.assign(copy.ar,{callLandline:'الهاتف الأرضي للصالون',socialImageAlt:'إمباير كينغز باربرشوب، ديرة دبي — الصالون والشعار'});
function buildStructuredData(lang,origin,phone='',landline=''){
 const business={
  '@type':'HairSalon','@id':origin+'/#salon',name:'Empire Kings Barbershop',
  alternateName:'Empire King Barbershop',url:origin+'/',
  logo:origin+'/assets/logo-transparent.png',image:origin+'/assets/photos/IMG_2040.jpeg',
  address:{'@type':'PostalAddress',streetAddress:'Darwish Mall, M floor, 04, opposite Day to Day, near Baniyas Center Building, Deira',addressLocality:'Dubai',addressRegion:'Dubai',addressCountry:'AE'},
  hasMap:'https://maps.app.goo.gl/AAGLSZyiCfNhQGT39',
  sameAs:['https://www.instagram.com/empire_kings_barbershop/'],
  hasOfferCatalog:{'@type':'OfferCatalog',name:copy[lang].servicesEyebrow,itemListElement:copy[lang].services.map(service=>({
   '@type':'Offer',itemOffered:{'@type':'Service',name:service[1],description:service[3],provider:{'@id':origin+'/#salon'}}
  }))}
 };
 if(/^[1-9]\d{7,14}$/.test(phone))business.telephone='+'+phone;
 if(/^[1-9]\d{7,14}$/.test(landline))business.telephone=[...new Set([business.telephone,'+'+landline].filter(Boolean))];
 return {'@context':'https://schema.org','@graph':[
  business,
  {'@type':'WebSite','@id':origin+'/#website',url:origin+'/',name:'Empire Kings Barbershop',inLanguage:['en','fr','ar']},
  {'@type':'WebPage','@id':origin+LANG_PATHS[lang]+'#page',url:origin+LANG_PATHS[lang],name:copy[lang].title,description:copy[lang].description,inLanguage:lang,isPartOf:{'@id':origin+'/#website'},about:{'@id':origin+'/#salon'}}
 ]};
}

let language=document.documentElement.lang||'en', activePhoto=0, lastPhotoTrigger=null;
const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const icon=name=>'<svg class="icon" aria-hidden="true"><use href="#i-'+name+'"/></svg>';
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused=reduceMotion.matches;
const SCENES=[
 {id:'cut',src:'/assets/photos/IMG_2045.jpeg',width:1320,height:1362},
 {id:'craft',src:'/assets/photos/IMG_2054.jpeg',width:1320,height:1362},
 {id:'salon',src:'/assets/photos/IMG_2040.jpeg',width:1320,height:948}
];
SCENES.forEach(scene=>{scene.src=assetUrl(scene.src);});
const sceneCopy={
 en:{
  previous:'Previous scene',next:'Next scene',group:'Explore Empire Kings',carousel:'carousel',reducedMotion:'Reduced motion',
  scenes:[
   {kicker:'THE SIGNATURE CUT',lines:['A cut.','A statement.'],copy:'Precision in every detail. Confidence in every reflection.',detailKicker:'MADE PERSONAL',detailTitle:'Your style.\nOur craft.',detail:'A look that feels entirely yours, down to the last detail.',tab:'The cut',sub:'Your signature look',alt:'A precision haircut and beard at Empire Kings Barbershop'},
   {kicker:'THE ART OF THE DETAIL',lines:['Clean lines.','Bold style.'],copy:'Braids, texture and precision. The finishing touches that make the difference.',detailKicker:'THE EMPIRE TOUCH',detailTitle:'Every line.\nConsidered.',detail:'Explore the cuts, textures and styles created at Empire Kings.',tab:'The craft',sub:'Precision in every detail',alt:'Braids and clean lines created at Empire Kings Barbershop'},
   {kicker:'YOUR MOMENT, IN DUBAI',lines:['Take a seat.','Be yourself.'],copy:'Step inside Empire Kings. Take a moment for yourself, and leave with a look that feels like you.',detailKicker:'STEP INSIDE',detailTitle:'Find us.\nIn Dubai.',detail:'Darwish Mall, M floor, 04. Opposite Day to Day, near Baniyas Center Building.',tab:'The space',sub:'Step inside Empire Kings',alt:'The interior of Empire Kings Barbershop in Dubai'}
  ]
 },
 fr:{
  previous:'Scène précédente',next:'Scène suivante',group:'Découvrir Empire Kings',carousel:'carrousel',reducedMotion:'Animations réduites',
  scenes:[
   {kicker:'LA COUPE SIGNATURE',lines:['Une coupe.','Du caractère.'],copy:'La précision dans chaque détail. La confiance dans chaque reflet.',detailKicker:'À VOTRE IMAGE',detailTitle:'Votre style.\nNotre savoir-faire.',detail:'Une allure qui vous ressemble, jusque dans les moindres détails.',tab:'La coupe',sub:'Votre style signature',alt:'Une coupe et une barbe soignées chez Empire Kings Barbershop'},
   {kicker:'L’ART DU DÉTAIL',lines:['Lignes nettes.','Style affirmé.'],copy:'Des tresses, de la texture et de la précision. Des finitions qui font toute la différence.',detailKicker:'LA TOUCHE EMPIRE',detailTitle:'Chaque ligne.\nAvec précision.',detail:'Découvrez les coupes, les textures et les styles réalisés chez Empire Kings.',tab:'Le savoir-faire',sub:'La précision du détail',alt:'Tresses et contours réalisés chez Empire Kings Barbershop'},
   {kicker:'VOTRE INSTANT À DUBAÏ',lines:['Prenez place.','Soyez vous.'],copy:'Entrez chez Empire Kings. Prenez un moment pour vous et repartez avec une allure qui vous ressemble.',detailKicker:'ENTREZ AU SALON',detailTitle:'Retrouvez-nous.\nÀ Dubaï.',detail:'Darwish Mall, étage M, 04. En face de Day to Day, près de Baniyas Center Building.',tab:'Le salon',sub:'Entrez chez Empire Kings',alt:'L’intérieur du salon Empire Kings Barbershop à Dubaï'}
  ]
 },
 ar:{
  previous:'المشهد السابق',next:'المشهد التالي',group:'اكتشف إمباير كينغز',carousel:'عرض شرائح',reducedMotion:'حركة مخفّضة',
  scenes:[
   {kicker:'قصّة بتوقيعك',lines:['قصّة شعر.','شخصية مميّزة.'],copy:'دقة في كل تفصيل، وثقة في كل إطلالة.',detailKicker:'بصمتك الخاصة',detailTitle:'أسلوبك.\nإتقاننا.',detail:'إطلالة تشبهك تماماً، وصولاً إلى أدق التفاصيل.',tab:'القصّة',sub:'إطلالتك الخاصة',alt:'قصة شعر ولحية متقنتان في إمباير كينغز باربرشوب'},
   {kicker:'فن التفاصيل',lines:['خطوط دقيقة.','حضور مميّز.'],copy:'ضفائر وتفاصيل متقنة. ولمسات أخيرة تصنع الفرق.',detailKicker:'لمسة إمباير',detailTitle:'كل خط.\nبكل عناية.',detail:'اكتشف القصّات والتفاصيل والأساليب التي نصنعها في إمباير كينغز.',tab:'الإتقان',sub:'دقة في كل تفصيل',alt:'ضفائر وخطوط دقيقة في إمباير كينغز باربرشوب'},
   {kicker:'لحظتك الخاصة في دبي',lines:['خذ مكانك.','اختر أسلوبك.'],copy:'ادخل إلى إمباير كينغز. خذ لحظة لنفسك، وغادر بإطلالة تعبّر عنك.',detailKicker:'أهلاً بك',detailTitle:'تجدنا.\nفي دبي.',detail:'درويش مول، الطابق M، 04. مقابل Day to Day، بالقرب من مبنى Baniyas Center.',tab:'الصالون',sub:'ادخل إلى عالم إمباير',alt:'داخل صالون إمباير كينغز باربرشوب في دبي'}
  ]
 }
};
const hero=$('.hero');
let activeScene=0,requestedScene=0,sceneTimer=null,sceneStarted=0,sceneRemaining=7000;
let swapTimer=null,endTimer=null,transitioning=false,hoverHeld=false,focusHeld=false,heroVisible=true;
let revealObserver=null;
function textNode(tag,text,className){
 const node=document.createElement(tag);node.textContent=text;
 if(className)node.className=className;
 return node;
}
function observeReveals(){
 if(!revealObserver)return;
 $$('.reveal:not(.in-view)').forEach(node=>revealObserver.observe(node));
}
function renderServices(){
 const open=[...$('#service-list').querySelectorAll('details')].map(node=>node.open);
 const fragment=document.createDocumentFragment();
 copy[language].services.forEach((service,index)=>{
  const row=document.createElement('details');
  row.className='service-item reveal';row.open=!!open[index];
  row.style.setProperty('--reveal-delay',(index%3)*60+'ms');
  const summary=document.createElement('summary');
  summary.append(textNode('span',String(index+1).padStart(2,'0'),'service-number'));
  const emblem=document.createElement('img');
  emblem.src=assetUrl('/assets/logo-transparent.png');emblem.alt='';emblem.width=67;emblem.height=70;
  emblem.className='service-emblem';
  summary.append(emblem);
  const titles=document.createElement('div');titles.className='service-titles';
  titles.append(textNode('h3',service[1],'service-summary-title'),textNode('span',service[2],'service-summary-sub'));
  summary.append(titles);
  const plus=document.createElement('span');plus.className='plus';plus.setAttribute('aria-hidden','true');
  summary.append(plus);
  row.append(summary,textNode('p',service[3],'service-description'));
  const bookLink=textNode('a',copy[language].bookService,'service-book-link');bookLink.href='#booking';bookLink.dataset.bookService=String(index);row.append(bookLink);
  fragment.append(row);
 });
 $('#service-list').replaceChildren(fragment);
}
function renderGallery(){
 const gallery=$('#gallery-grid');gallery.replaceChildren();
 MEDIA.gallery.forEach((photo,index)=>{
  const label=photo[language]||photo.en,button=document.createElement('a');
  button.href=photo.src;button.className='gallery-card reveal';
  button.style.setProperty('--reveal-delay',(index%3)*80+'ms');
  button.setAttribute('aria-label',copy[language].openPhoto+': '+label.title);
  const frame=document.createElement('span');frame.className='gallery-photo';
  const image=document.createElement('img');
  image.src=photo.src;image.alt=label.alt;image.loading='lazy';image.decoding='async';image.width=700;image.height=900;
  if(photo.position)image.style.objectPosition=photo.position;
  frame.append(image);
  const expand=document.createElement('span');expand.className='gallery-open';expand.innerHTML=icon('arrow');
  frame.append(expand);
  const caption=document.createElement('span');caption.className='gallery-caption';
  caption.append(textNode('strong',label.title),textNode('small',label.tag));
  button.append(frame,caption);
  button.addEventListener('click',event=>{event.preventDefault();openGallery(index,button);});
  gallery.append(button);
 });
}
function renderScene(){
 const translated=sceneCopy[language],scene=translated.scenes[activeScene],asset=SCENES[activeScene];
 $('.scene-kicker').textContent=scene.kicker;
 $('#hero-title>span').textContent=scene.lines[0];
 $('#hero-title>em').textContent=scene.lines[1];
 $('.hero-copy').textContent=scene.copy;
 $('.scene-detail-kicker').textContent=scene.detailKicker;
 $('.scene-detail-title').textContent=scene.detailTitle;
 $('.scene-detail-text').textContent=scene.detail;
 const image=$('.hero-image');
 if(image.getAttribute('src')!==asset.src)image.src=asset.src;
 image.alt=scene.alt;image.width=asset.width;image.height=asset.height;
 $('#hero-visual').setAttribute('aria-label',scene.alt);
 $('#hero-visual').dataset.scene=asset.id;
 $('.scene-count').textContent=String(activeScene+1).padStart(2,'0')+' / 03';
 hero.setAttribute('aria-roledescription',translated.carousel);
 $('.scene-prev').setAttribute('aria-label',translated.previous);
 $('.scene-next').setAttribute('aria-label',translated.next);
 $('.scene-tabs').setAttribute('aria-label',translated.group);
 $$('.scene-button').forEach((button,index)=>{
  const active=index===activeScene,label=translated.scenes[index];
  button.classList.toggle('is-active',active);
  button.setAttribute('aria-pressed',String(active));
  button.setAttribute('aria-label',label.tab+' — '+label.sub);
  button.querySelector('strong').textContent=label.tab;
  button.querySelector('small').textContent=label.sub;
 });
}
function pauseSceneClock(){
 if(sceneTimer!==null){
  clearTimeout(sceneTimer);sceneTimer=null;
  sceneRemaining=Math.max(0,sceneRemaining-(performance.now()-sceneStarted));
 }
}
function syncSceneClock(reset=false){
 pauseSceneClock();
 if(reset){
  sceneRemaining=7000;
  const progress=$('.scene-button.is-active .scene-tab-progress');
  progress.style.animation='none';
  void progress.offsetWidth;
  progress.style.removeProperty('animation');
 }
 const held=motionPaused||reduceMotion.matches||hoverHeld||focusHeld||document.hidden||!heroVisible||transitioning;
 hero.classList.toggle('is-holding',held);
 if(!held){
  sceneStarted=performance.now();
  sceneTimer=setTimeout(()=>{
   sceneTimer=null;sceneRemaining=0;
   changeScene(activeScene+1,false);
  },sceneRemaining);
 }
}
function cancelTransition(){
 clearTimeout(swapTimer);clearTimeout(endTimer);
 swapTimer=null;endTimer=null;transitioning=false;
 hero.classList.remove('is-shifting');
}
function changeScene(index,manual=true){
 const target=(index+SCENES.length)%SCENES.length;
 if(target===activeScene&&!transitioning){syncSceneClock(true);return;}
 pauseSceneClock();cancelTransition();
 requestedScene=target;
 const update=()=>{
  activeScene=target;renderScene();
  if(manual)$('.scene-announcement').textContent=sceneCopy[language].scenes[target].tab+' · '+(target+1)+' / 3';
 };
 if(motionPaused||reduceMotion.matches){
  update();syncSceneClock(true);return;
 }
 transitioning=true;hero.classList.add('is-holding','is-shifting');
 swapTimer=setTimeout(()=>{
  update();
  // Let the concealed image and copy update before opening the shutters.
  endTimer=setTimeout(()=>{
   hero.classList.remove('is-shifting');
   endTimer=setTimeout(()=>{transitioning=false;syncSceneClock(true);},650);
  },60);
 },380);
}
function applyLanguage(next,persist=true){
 if(!copy[next])return;
 cancelTransition();language=next;
 document.documentElement.lang=next;document.documentElement.dir=next==='ar'?'rtl':'ltr';
 $$('[data-t]').forEach(node=>{const key=node.dataset.t;if(key in copy[next])node.textContent=copy[next][key];});
 $$('[data-a-label]').forEach(node=>node.setAttribute('aria-label',copy[next][node.dataset.aLabel]));
 $('#language').value=next;$('#language').setAttribute('aria-label',copy[next].languageLabel);
 $$('.footer-languages [data-lang]').forEach(button=>{
  const active=button.dataset.lang===next;button.classList.toggle('active',active);if(active)button.setAttribute('aria-current','true');else button.removeAttribute('aria-current');
 });
 document.title=copy[next].title;
 $('meta[name="description"]').content=copy[next].description;
 $('meta[property="og:title"]').content=copy[next].title;
 $('meta[property="og:description"]').content=copy[next].description;
 $('.menu-toggle').setAttribute('aria-label',$('.menu-toggle').getAttribute('aria-expanded')==='true'?copy[next].closeMenu:copy[next].openMenu);
 $('#mobile-menu').setAttribute('aria-label',copy[next].navLabel);
 $('#lightbox').setAttribute('aria-label',copy[next].photoGallery);
 $('.lightbox-close').setAttribute('aria-label',copy[next].closeGallery);
 $('.lightbox-prev').setAttribute('aria-label',copy[next].previousPhoto);
 $('.lightbox-next').setAttribute('aria-label',copy[next].nextPhoto);
 $$('.brand').forEach(a=>a.setAttribute('aria-label',copy[next].brandName+' — '+copy[next].backTop));
 renderServices();renderGallery();renderScene();renderBooking();prepareSectionMotion();observeReveals();syncMotionButton();syncSceneClock(true);
 updateLanguageUrl(next,persist);
 if($('#lightbox').open)showPhoto(activePhoto);
 if(persist)try{localStorage.setItem('empire-language',next);}catch{}
}
function syncMotionButton(){
 const button=$('#motion-control');
 button.setAttribute('aria-pressed',String(motionPaused));
 button.disabled=reduceMotion.matches;
 button.querySelector('span').textContent=reduceMotion.matches?sceneCopy[language].reducedMotion:copy[language][motionPaused?'resumeMotion':'pauseMotion'];
 button.querySelector('use').setAttribute('href',motionPaused?'#i-play':'#i-pause');
}
function setMotion(paused,persist=false){
 motionPaused=paused;
 document.documentElement.classList.toggle('motion-paused',paused);
 if(paused&&transitioning){cancelTransition();activeScene=requestedScene;renderScene();}
 syncMotionButton();syncSceneClock();updateScroll();
 if(persist)try{sessionStorage.setItem('empire-motion',paused?'paused':'playing');}catch{}
}
$('#motion-control').addEventListener('click',()=>{
 if(motionPaused){focusHeld=false;hoverHeld=false;}
 setMotion(!motionPaused,true);
});
reduceMotion.addEventListener('change',event=>setMotion(event.matches));
$('#language').addEventListener('change',event=>applyLanguage(event.target.value));
$('#share-site').addEventListener('click',async()=>{
 const url=SITE_CONFIG.origin+LANG_PATHS[language];
 const payload={title:copy[language].title,text:copy[language].description,url};
 const status=$('#share-status');
 try{
  if(navigator.share){await navigator.share(payload);return;}
  await navigator.clipboard.writeText(url);
  status.textContent=copy[language].shareSiteCopied;
 }catch(error){
  if(error&&error.name==='AbortError')return;
  try{
   const field=document.createElement('textarea');field.value=url;field.setAttribute('readonly','');field.style.position='fixed';field.style.opacity='0';document.body.appendChild(field);field.select();
   const copied=document.execCommand('copy');field.remove();
   status.textContent=copied?copy[language].shareSiteCopied:url;
  }catch{status.textContent=url;}
 }
});
$$('[data-lang]').forEach(button=>button.addEventListener('click',event=>{event.preventDefault();applyLanguage(button.dataset.lang);}));
$$('.scene-button').forEach(button=>button.addEventListener('click',()=>changeScene(Number(button.dataset.sceneIndex))));
$('.scene-prev').addEventListener('click',()=>changeScene((transitioning?requestedScene:activeScene)-1));
$('.scene-next').addEventListener('click',()=>changeScene((transitioning?requestedScene:activeScene)+1));
$('.hero-navigation').addEventListener('keydown',event=>{
 if(!['ArrowLeft','ArrowRight'].includes(event.key))return;
 event.preventDefault();
 const delta=(event.key==='ArrowRight'?1:-1)*(language==='ar'?-1:1);
 const next=((transitioning?requestedScene:activeScene)+delta+SCENES.length)%SCENES.length;
 changeScene(next);$$('.scene-button')[next].focus();
});
hero.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'){hoverHeld=true;syncSceneClock();}});
hero.addEventListener('pointerleave',event=>{if(event.pointerType==='mouse'){hoverHeld=false;syncSceneClock();}});
hero.addEventListener('focusin',()=>{focusHeld=true;syncSceneClock();});
hero.addEventListener('focusout',()=>{setTimeout(()=>{focusHeld=hero.contains(document.activeElement);syncSceneClock();},0);});
document.addEventListener('visibilitychange',()=>syncSceneClock());
let heroTouchX=0,heroTouchY=0;
$('#hero-visual').addEventListener('touchstart',event=>{
 heroTouchX=event.changedTouches[0].screenX;heroTouchY=event.changedTouches[0].screenY;
},{passive:true});
$('#hero-visual').addEventListener('touchend',event=>{
 const dx=event.changedTouches[0].screenX-heroTouchX,dy=event.changedTouches[0].screenY-heroTouchY;
 if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)changeScene(activeScene+(dx<0?1:-1)*(language==='ar'?-1:1));
},{passive:true});

function closeMenu(restore=false){
 $('#mobile-menu').hidden=true;
 $('.menu-toggle').setAttribute('aria-expanded','false');
 $('.menu-toggle').setAttribute('aria-label',copy[language].openMenu);
 document.body.classList.remove('menu-open');
 if(restore)$('.menu-toggle').focus();
}
$('.menu-toggle').addEventListener('click',()=>{
 const menu=$('#mobile-menu');
 if(!menu.hidden){closeMenu();return;}
 menu.hidden=false;$('.menu-toggle').setAttribute('aria-expanded','true');
 $('.menu-toggle').setAttribute('aria-label',copy[language].closeMenu);
 document.body.classList.add('menu-open');menu.querySelector('a').focus();
});
$$('#mobile-menu a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
window.matchMedia('(min-width:851px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&!$('#mobile-menu').hidden)closeMenu(true);
 if(!$('#mobile-menu').hidden&&event.key==='Tab'){
  const items=[$('.menu-toggle'),...$$('#mobile-menu a')];
  if(event.shiftKey&&document.activeElement===items[0]){event.preventDefault();items.at(-1).focus();}
  else if(!event.shiftKey&&document.activeElement===items.at(-1)){event.preventDefault();items[0].focus();}
 }
});
function showPhoto(index){
 if(!MEDIA.gallery.length)return;
 activePhoto=(index+MEDIA.gallery.length)%MEDIA.gallery.length;
 const photo=MEDIA.gallery[activePhoto],label=photo[language]||photo.en;
 $('#lightbox-image').src=photo.src;$('#lightbox-image').alt=label.alt;
 $('#lightbox-caption').textContent=label.title+' · '+(activePhoto+1)+' / '+MEDIA.gallery.length;
}
function openGallery(index,trigger){
 lastPhotoTrigger=trigger;showPhoto(index);$('#lightbox').showModal();
 document.body.classList.add('lightbox-open');$('.lightbox-close').focus();
}
function closeGallery(){$('#lightbox').close();}
$('.lightbox-close').addEventListener('click',closeGallery);
$('.lightbox-prev').addEventListener('click',()=>showPhoto(activePhoto-1));
$('.lightbox-next').addEventListener('click',()=>showPhoto(activePhoto+1));
$('#lightbox').addEventListener('click',event=>{if(event.target===$('#lightbox'))closeGallery();});
$('#lightbox').addEventListener('close',()=>{
 document.body.classList.remove('lightbox-open');
 if(lastPhotoTrigger?.isConnected)lastPhotoTrigger.focus();
 else $$('.gallery-card')[activePhoto]?.focus();
});
$('#lightbox').addEventListener('keydown',event=>{
 if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(activePhoto-1);}
 if(event.key==='ArrowRight'){event.preventDefault();showPhoto(activePhoto+1);}
});
let touchX=0;
$('#lightbox').addEventListener('touchstart',event=>{touchX=event.changedTouches[0].screenX;},{passive:true});
$('#lightbox').addEventListener('touchend',event=>{
 const distance=event.changedTouches[0].screenX-touchX;
 if(Math.abs(distance)>60)showPhoto(activePhoto+(distance<0?1:-1));
},{passive:true});

function updateLanguageUrl(next,persist){
 const origin=SITE_CONFIG.origin,path=LANG_PATHS[next];
 if(persist&&window.location.pathname!==routeUrl(path))window.history.pushState({language:next},'',routeUrl(path)+window.location.hash);
 const canonical=$('link[rel="canonical"]');if(canonical)canonical.href=origin+path;
 const ogUrl=$('meta[property="og:url"]');if(ogUrl)ogUrl.content=origin+path;
 const twitterUrl=$('meta[name="twitter:url"]');if(twitterUrl)twitterUrl.content=origin+path;
 const ogLocale=$('meta[property="og:locale"]');if(ogLocale)ogLocale.content={en:'en_AE',fr:'fr_FR',ar:'ar_AE'}[next];
 const schema=$('#local-business-schema');
 if(schema)schema.textContent=JSON.stringify(buildStructuredData(next,origin,SITE_CONFIG.whatsappNumber,SITE_CONFIG.landlineNumber)).replace(/</g,'\\u003c');
 for(const key of ['title','description']){const meta=$('meta[name="twitter:'+key+'"]');if(meta)meta.content=copy[next][key];}
 for(const selector of ['meta[property="og:image:alt"]','meta[name="twitter:image:alt"]']){const meta=$(selector);if(meta)meta.content=copy[next].socialImageAlt;}
}
window.addEventListener('popstate',()=>{
 const currentPath=window.location.pathname.slice(PUBLIC_BASE.length)||'/';const next=currentPath.startsWith('/ar')?'ar':currentPath.startsWith('/fr')?'fr':'en';
 applyLanguage(next,false);
});
function dubaiToday(now=new Date()){
 const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Dubai',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);
 const part=type=>parts.find(value=>value.type===type).value;
 return part('year')+'-'+part('month')+'-'+part('day');
}
function bookingResult(data,lang=language,phone=SITE_CONFIG.whatsappNumber,now=new Date()){
 const t=copy[lang];
 if(!/^[1-9]\d{7,14}$/.test(phone))return {error:'bookingUnavailable'};
 const name=String(data.name||'').trim(),notes=String(data.notes||'').trim();
 if(!name||name.length>80)return {error:'bookingNameError',field:'booking-name'};
 if(!/^[0-8]$/.test(String(data.service)))return {error:'bookingServiceError',field:'booking-service'};
 const date=String(data.date||''),time=String(data.time||'');
 if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(time))return {error:'bookingDateError',field:'booking-date'};
 const timestamp=Date.parse(date+'T'+time+':00+04:00');
 // Reject impossible calendar dates as well as past times in the salon's timezone.
 if(!Number.isFinite(timestamp)||dubaiToday(new Date(timestamp))!==date)return {error:'bookingDateError',field:'booking-date'};
 if(timestamp<=now.getTime())return {error:'bookingPastError',field:'booking-date'};
 const service=copy[lang].services[Number(data.service)][1];
 const formattedDate=new Intl.DateTimeFormat({en:'en-GB',fr:'fr-FR',ar:'ar-AE'}[lang],{timeZone:'Asia/Dubai',weekday:'long',year:'numeric',month:'long',day:'numeric'}).format(new Date(timestamp));
 const lines=[
  t.bookingMessageTitle,'',
  t.bookingMessageName+': '+name,
  t.bookingMessageService+': '+service,
  t.bookingMessageDate+': '+formattedDate,
  t.bookingMessageTime+': '+time+' (Dubai, UTC+4)'
 ];
 if(notes)lines.push(t.bookingMessageNotes+': '+notes.slice(0,500));
 lines.push('',t.bookingMessageEnd);
 const message=lines.join('\n');
 return {message,url:'https://wa.me/'+phone+'?text='+encodeURIComponent(message)};
}
function renderBooking(){
 const select=$('#booking-service'),selected=select.value;
 select.replaceChildren();
 const first=textNode('option',copy[language].bookingChooseService);first.value='';select.append(first);
 copy[language].services.forEach((service,index)=>{
  const option=textNode('option',service[1]);option.value=String(index);select.append(option);
 });
 select.value=/^[0-8]$/.test(selected)?selected:'';
 $('#booking-date').min=dubaiToday();
 const ready=/^[1-9]\d{7,14}$/.test(SITE_CONFIG.whatsappNumber);
 $('#booking-submit').disabled=!ready;
 $('#booking-fieldset').disabled=!ready;
 $('#booking-unavailable').hidden=ready;
 $('#booking-status').hidden=true;
 $('#booking-open-whatsapp').hidden=true;
}
$('#booking-form').addEventListener('submit',event=>{
 const form=event.currentTarget;
 $('#booking-open-whatsapp').hidden=true;
 $$('input,select,textarea').forEach(field=>field.setCustomValidity(''));
 $('#booking-date').min=dubaiToday();
 if(!form.reportValidity()){event.preventDefault();return;}
 const result=bookingResult({
  name:$('#booking-name').value,service:$('#booking-service').value,
  date:$('#booking-date').value,time:$('#booking-time').value,notes:$('#booking-notes').value
 });
 const status=$('#booking-status');status.hidden=false;
 if(result.error){
  event.preventDefault();
  status.textContent=copy[language][result.error];
  if(result.field){const field=$('#'+result.field);field.setCustomValidity(status.textContent);field.reportValidity();field.focus();}
  return;
 }
 status.textContent=copy[language].bookingOpening;
 // Native, user-initiated submission opens outside an embedded preview without a popup script.
 // Only the encoded message is submitted, and WhatsApp still requires the customer to press Send.
 const destination=new URL(result.url);
 form.action=destination.origin+destination.pathname;
 $('#booking-message').value=destination.searchParams.get('text');
 const retry=$('#booking-open-whatsapp');retry.href=result.url;retry.hidden=false;
});
$('#booking-form').addEventListener('input',event=>{
 if(typeof event.target.setCustomValidity==='function')event.target.setCustomValidity('');
 $('#booking-status').hidden=true;
 $('#booking-open-whatsapp').hidden=true;
});
$('#booking-date').addEventListener('focus',()=>{$('#booking-date').min=dubaiToday();});
$('#service-list').addEventListener('click',event=>{
 const link=event.target.closest('[data-book-service]');
 if(link){$('#booking-service').value=link.dataset.bookService;}
});
let colorObserver=null;
function prepareSectionMotion(){
 $$('.timeline li,.booking-steps li,.values span').forEach((node,index)=>{
  node.style.setProperty('--item-delay',(index%4)*100+'ms');
 });
 $$('.social-link,.booking-signature').forEach(node=>node.classList.add('reveal'));
 if(colorObserver){
  colorObserver.disconnect();
  $$('.hero-visual,.gallery-card,.location-city').forEach(node=>colorObserver.observe(node));
 }
}
if('IntersectionObserver' in window){
 colorObserver=new IntersectionObserver(entries=>{
  for(const entry of entries)entry.target.classList.toggle('touch-in-view',entry.isIntersecting);
 },{threshold:.45});
}

let queued=false;
function updateScroll(){
 queued=false;
 const full=document.documentElement.scrollHeight-window.innerHeight;
 $('.reading-progress').style.transform='scaleX('+(full>0?Math.min(1,window.scrollY/full):0)+')';
 $('#header').classList.toggle('is-stuck',window.scrollY>112);
 const offset=(!motionPaused&&!reduceMotion.matches&&window.innerWidth>600&&heroVisible)?Math.min(window.scrollY*.07,40):0;
 $('#hero-visual').style.setProperty('--parallax',offset+'px');
}
window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(updateScroll);}},{passive:true});
window.addEventListener('resize',updateScroll);
if('IntersectionObserver' in window){
 document.documentElement.classList.add('is-animated');
 revealObserver=new IntersectionObserver(entries=>{
  for(const entry of entries)if(entry.isIntersecting){
   entry.target.classList.add('in-view');revealObserver.unobserve(entry.target);
  }
 },{threshold:.06});
 const heroObserver=new IntersectionObserver(entries=>{
  heroVisible=entries[0].isIntersecting;syncSceneClock();
 },{threshold:0});
 heroObserver.observe(hero);
}
try{

 if(sessionStorage.getItem('empire-motion')==='paused')motionPaused=true;
}catch{}
$('#year').textContent=String(new Date().getFullYear());
applyLanguage(language,false);setMotion(motionPaused);updateScroll();
// Prepare only the two next scenes; no third-party assets or scripts are used.
window.addEventListener('load',()=>{
 SCENES.slice(1).forEach(scene=>{const image=new Image();image.src=scene.src;});
},{once:true});
