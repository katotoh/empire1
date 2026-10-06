# Empire Kings Barbershop — prêt pour GitHub Pages

Site vitrine statique trilingue (anglais, français, arabe), avec réservation WhatsApp, galerie, liens Instagram, métadonnées SEO et partage social. Le domaine officiel configuré est `https://empirekingsbabershopdubai.com`.

## Publication

1. Décompressez cette archive.
2. Créez un dépôt GitHub et téléversez **tout le contenu de l’archive à la racine du dépôt**, y compris le dossier caché `.github`. Choisissez `main` comme branche principale.
3. Dans le dépôt, ouvrez **Settings → Pages** et choisissez **GitHub Actions** comme source de publication.
4. Après l’envoi des fichiers, l’action `Build and publish Empire Kings website` génère les pages et publie le dossier `dist`. Suivez son résultat dans l’onglet **Actions**.

Le workflow utilise le flux GitHub Pages documenté et publie le contenu statique de `dist`.

## Domaine Namecheap

Le domaine est déjà rattaché à l’hébergement actuel. Ne changez pas ses enregistrements DNS avant que la première publication GitHub Pages ait réussi et que vous soyez prêt à basculer l’hébergement. La configuration DNS de la bascule est distincte de cette archive.

## Modifier le contenu

`src/page.html` contient le modèle HTML commun. Les traductions, interactions, images et contenus sont dans `dist/app.js`; le style est dans `dist/styles.css`. Après une modification, lancez `node scripts/build-pages.cjs`. Le workflow GitHub le fait automatiquement à chaque mise à jour de `main`.

Aucun identifiant de dépôt, secret ou dossier `.git` n’est inclus.
