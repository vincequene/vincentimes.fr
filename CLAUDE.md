# vincentimes.fr

Site statique (deux pages HTML écrites à la main, en français), hébergé sur Cloudflare. Plus de GitHub Pages (`CNAME` et `.gitignore` Jekyll sont des restes).

## Mesure d'audience

- Outil : Cloudflare Web Analytics. Pas de cookie, pas de stockage navigateur, pas de suivi entre sites, statistiques agrégées seulement.
- Script : **pas encore, en attente du token** du site (Cloudflare > Analytics & Logs > Web Analytics > installation manuelle). Une fois reçu, à ajouter juste avant `</body>` sur toutes les pages (`index.html`, `mentions-legales.html`), sans script inline :
  `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "TOKEN"}'></script>`
- CSP : aucune n'est définie dans ce dépôt (pas de `_headers`). Si une CSP est (ou est un jour) en place, elle doit autoriser exactement `script-src https://static.cloudflareinsights.com` et `connect-src https://cloudflareinsights.com`, rien d'autre.
- Mentions légales (`mentions-legales.html`, section « Données personnelles ») : décrivent cet outil.
- Règle : si l'outil change ou disparaît, mettre à jour la CSP et les mentions légales ensemble.
