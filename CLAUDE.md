# vincentimes.fr

Site perso statique (HTML/CSS vanilla, hébergé sur Cloudflare Workers avec assets, sans build). Styles dans `assets/style.css`, polices auto-hébergées dans `assets/fonts/`, aucune ressource tierce hormis le script de mesure d'audience Cloudflare (voir « Mesure d'audience »).

## Hébergement

- Cloudflare Workers (assets statiques) : config dans `wrangler.jsonc`, fichiers exclus du déploiement dans `.assetsignore` (y ajouter tout nouveau fichier non public).
- Déploiement de `main` par `npx wrangler deploy` ; aperçus par branche via `npx wrangler preview` (d'où le bloc `previews`). Ne jamais commiter `.wrangler/`.
- Domaine chez OVHcloud, DNS sur Cloudflare.

## Mesure d'audience

- Cloudflare Web Analytics : sans cookie, sans stockage dans le navigateur, sans suivi entre sites, statistiques agrégées seulement. Texte correspondant dans `mentions-legales.html` (section « Données personnelles »).
- Script : `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "…"}'></script>` juste avant `</body>` de `index.html`, `en/index.html`, `cv/index.html`, `en/cv/index.html` et `mentions-legales.html` (`404.html` n'a aucun script). Cloudflare ne l'injecte pas tout seul sur des fichiers statiques sur Workers : le site est réglé sur « Enable with JS Snippet installation » (pas « excluding visitor data in the EU », qui exclurait les visiteurs européens). Token visible dans le code source, ce n'est pas un secret.
- Pas de CSP aujourd'hui (aucun `_headers`), donc rien à autoriser. Si une CSP est un jour ajoutée, y ajouter exactement `script-src https://static.cloudflareinsights.com` et `connect-src https://cloudflareinsights.com`, rien d'autre.
- Si l'outil change ou disparaît, mettre à jour ensemble la CSP (si elle existe), les mentions légales et le README.

## Pull requests

- Pas de captures d'écran dans les PR : l'aperçu Cloudflare de la branche suffit pour voir le rendu.

## CV

- Page `cv/index.html` (styles `assets/cv.css`, avec une feuille d'impression A4).
- `cv/Vincent-Quene-CV.pdf` est généré depuis cette page (impression Chromium, A4, une page) : le régénérer à chaque modification du CV.
- Jamais de numéro de téléphone ni d'information médicale ou administrative personnelle sur la version web.

## Langues

- Version anglaise dans `en/` (`en/index.html`, `en/cv/index.html`), liée par `hreflang` et un interrupteur FR / EN en haut à droite de chaque page (`.lang`).
- Toute modification de contenu se fait dans les deux langues ; régénérer aussi `en/cv/Vincent-Quene-Resume.pdf`.
