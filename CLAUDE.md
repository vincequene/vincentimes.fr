# vincentimes.fr

Site perso statique (HTML/CSS vanilla, GitHub Pages). Styles dans `assets/style.css`, polices auto-hébergées dans `assets/fonts/`, aucune ressource tierce.

## Pull requests

- Toujours mettre les captures des rendus dans la description de la PR : accueil ordi et mobile au minimum, plus les zones modifiées (états de survol compris si ça bouge).
- Les captures vont dans `.github/pr-screens/` (dossier non publié par GitHub Pages), en JPEG pour garder le dépôt léger.
- Les lier en `https://github.com/vincequene/vincentimes.fr/blob/<sha>/.github/pr-screens/<fichier>?raw=true` avec le SHA du commit : le lien survit aux pushs suivants et s'affiche même si le dépôt est privé.

## CV

- Page `cv/index.html` (styles `assets/cv.css`, avec une feuille d'impression A4).
- `cv/Vincent-Quene-CV.pdf` est généré depuis cette page (impression Chromium, A4, une page) : le régénérer à chaque modification du CV.
- Jamais de numéro de téléphone ni de mention RQTH sur la version web.
