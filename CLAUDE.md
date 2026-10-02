# vincentimes.fr

Site perso statique (HTML/CSS vanilla, hébergé sur Cloudflare Workers avec assets, sans build). Styles dans `assets/style.css`, polices auto-hébergées dans `assets/fonts/`, aucune ressource tierce.

## Hébergement

- Cloudflare Workers (assets statiques) : config dans `wrangler.jsonc`, fichiers exclus du déploiement dans `.assetsignore` (y ajouter tout nouveau fichier non public).
- Déploiement de `main` par `npx wrangler deploy` ; aperçus par branche via `npx wrangler preview` (d'où le bloc `previews`). Ne jamais commiter `.wrangler/`.
- Domaine chez OVHcloud, DNS sur Cloudflare.

## Pull requests

- Toujours mettre les captures des rendus dans la description de la PR : accueil ordi et mobile au minimum, plus les zones modifiées (états de survol compris si ça bouge).
- Les captures vont dans `.github/pr-screens/` sur la branche de la PR, en JPEG (GIF court si c'est animé) pour rester léger.
- Les lier en `https://github.com/vincequene/vincentimes.fr/blob/<sha>/.github/pr-screens/<fichier>?raw=true` avec le SHA du commit qui les contient.
- **Avant de fusionner**, retirer `.github/pr-screens/` par un dernier commit : `main` n'accumule pas les captures, et les liens restent valides car ils pointent vers un commit précis.

## CV

- Page `cv/index.html` (styles `assets/cv.css`, avec une feuille d'impression A4).
- `cv/Vincent-Quene-CV.pdf` est généré depuis cette page (impression Chromium, A4, une page) : le régénérer à chaque modification du CV.
- Jamais de numéro de téléphone ni d'information médicale ou administrative personnelle sur la version web.

## Langues

- Version anglaise dans `en/` (`en/index.html`, `en/cv/index.html`), liée par `hreflang` et un interrupteur FR / EN en haut à droite de chaque page (`.lang`).
- Toute modification de contenu se fait dans les deux langues ; régénérer aussi `en/cv/Vincent-Quene-Resume.pdf`.
