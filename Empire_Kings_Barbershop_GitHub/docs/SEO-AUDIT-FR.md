# Empire Kings Barbershop — audit SEO et partage social

Date : 30 septembre 2026 (UTC).

## Verdict

Le code possède une bonne base SEO multilingue. Il n'est pas possible de certifier que le site est « très optimisé », ni de lui attribuer un score Google : l'indexation, les performances mobiles et l'accès effectif des robots restent à valider. Aucun classement ni délai d'indexation n'est garanti.

## Vérifié dans les trois pages générées

- Pages HTML complètes en anglais, français et arabe, avec contenu disponible sans exécution de JavaScript.
- Un titre et une description propres à chaque langue, ciblant le salon à Deira, Dubaï.
- Un seul H1 par page ; sections et services structurés.
- Une URL canonique par langue et quatre liens hreflang (en, fr, ar, x-default).
- Sitemap XML valide avec les trois pages ; robots.txt autorisant l'exploration ; balise index,follow.
- Données structurées HairSalon, WebSite et WebPage ; adresse détaillée, services, Instagram et carte.
- Téléphone mobile +971558744657 conservé et téléphone fixe +97148244880 ajouté, y compris dans les données structurées.
- Images avec attributs alt et dimensions (hors image de la visionneuse remplie à l'ouverture) ; chargement différé de la galerie.

## Aperçu de partage ajouté

Carte paysagère de marque : og.png, 1731 × 909 pixels, environ 1,92 Mo. Visuel composé à partir du logo et de la photo du salon fournis.

Balises Open Graph : titre, description, URL, type, site, langues, image HTTPS, dimensions, type MIME et texte alternatif. Balises X : summary_large_image, titre, description, image et texte alternatif. Les textes sont traduits sur les trois pages. Le visuel est commun aux langues.

Ces métadonnées préparent les aperçus des services qui les lisent. Leur affichage final, le recadrage et le cache dépendent de chaque plateforme. Ce travail ne crée ni publication, ni couverture de compte, ni story sur les réseaux sociaux. Aucun envoi de message ni publication sociale n'a été effectué.

## Limites constatées et éléments à vérifier

1. **Exploration publique non confirmée.** Le service Sites annonce un accès public. Cependant, des requêtes HTTP anonymes depuis l'environnement d'audit vers /, /fr/, /ar/, /robots.txt et /sitemap.xml ont renvoyé HTTP 403. Une réponse détaillée indique Cloudflare, code 1010. Ce refus concerne le client de cet audit ; il ne démontre pas que Googlebot ou les robots sociaux sont eux aussi refusés. Aucune protection n'a été contournée. À vérifier dans Google Search Console et les inspecteurs de partage.
2. **Domaine personnalisé non raccordé dans ce travail.** Les canoniques, le sitemap et les images de partage utilisent encore l'adresse Sites actuellement publiée. Lors du passage à empirekingsbabershopdubai.com, mettre à jour l'origine configurée, régénérer les pages et vérifier HTTPS, URL préférée et redirections. Ne pas pointer prématurément les canoniques vers un domaine non opérationnel.
3. **Indexation et positions non mesurées.** Pas d'accès à Google Search Console, pas de confirmation d'indexation ou de soumission du sitemap. L'inspection d'URL et le suivi des requêtes restent nécessaires.
4. **Performances non mesurées.** Pas de mesure Lighthouse, PageSpeed ou Core Web Vitals. Les photos JPEG pèsent environ 240–440 Ko chacune ; cela mérite une mesure réelle sur mobile avant toute décision de conversion ou compression. Aucune photo du site n'a été modifiée pendant cet audit.
5. **Référencement local non vérifié.** La fiche Google Business Profile, ses horaires et ses avis réels n'ont pas été audités. Aucun horaire, avis, prix ou note n'a été inventé.
6. **Rendu réseau par réseau non certifié.** La structure des balises et le fichier image ont été contrôlés ; aucun test de partage réel sur WhatsApp, Facebook, LinkedIn ou X n'a été effectué. Les anciens aperçus peuvent rester en cache.

## Périmètre des modifications

Uniquement : carte et métadonnées sociales, ajout du téléphone fixe cliquable, données structurées correspondantes, présent audit. Design, photos des sections, services, réservation et domaine de publication conservés.

## Références

- Google Search Central, guide SEO : https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Spécification Open Graph : https://ogp.me/

Les sources décrivent les bonnes pratiques générales ; les constats sur ce site proviennent de l'inspection du code, des pages générées et des réponses HTTP indiquées ci-dessus.
