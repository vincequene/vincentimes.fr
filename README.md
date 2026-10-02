# vincentimes.fr

Site personnel de Vincent Quêne — alias **VincenTimes** / **toonesque.**
Une carte de visite en ligne qui centralise mes projets, mon activité pro, mon CV et mes réseaux.

🔗 [vincentimes.fr](https://vincentimes.fr) · 🇬🇧 [vincentimes.fr/en](https://vincentimes.fr/en/)

---

## C'est quoi ?

Un site statique en HTML/CSS, avec un tout petit peu de JavaScript.
Pas de framework, pas de dépendances, aucune ressource tierce : juste du web de base qui charge vite.

---

## Pages

| Page | Français | English |
|---|---|---|
| Accueil | `/` | `/en/` |
| CV | `/cv/` (+ `Vincent-Quene-CV.pdf`) | `/en/cv/` (+ `Vincent-Quene-Resume.pdf`) |
| Mentions légales | `/mentions-legales.html` | — |
| Page introuvable | `/404.html` | — |

Sur l'accueil :

- **toonesque.** mis en avant (« À l'antenne ») : chaîne YouTube, réseaux, soutien Ko-fi / Patreon
- **Côté musique** : carte discrète vers mes morceaux (Spotify, Apple Music, Deezer, Bandcamp, SoundCloud)
- **Bosser ensemble** : cabinet26 (mon activité d'auto-entrepreneur), boutons mail et CV
- Réseaux, et ce que je regarde, joue & écoute (Letterboxd, Backloggd, AniList, Apple Music, Last.fm)
- Avatar dessiné par [Popuru](https://popuru.carrd.co/)

---

## Direction artistique

- Fond jaune tramé qui défile, nuages qui traversent l'écran
- Cartes en autocollants crème, contours crayonnés (filtres SVG), couleurs franches au survol
- Faux fixe (*line boil*) sur le logo et le badge de l'avatar
- Carte toonesque. en violet électrique, trame en aberration chromatique
- Toutes les animations sont coupées si « réduire les animations » est activé sur l'appareil

---

## Stack

- HTML / CSS vanilla
- `assets/style.css` : styles du site · `assets/cv.css` : page CV et version imprimable A4
- `assets/site.js` : seul script du site (âge et année calculés, copie de l'adresse mail au clic). Sans JavaScript, tout reste lisible et utilisable
- Polices auto-hébergées dans `assets/fonts/` : Quicksand et Patrick Hand (OFL), Alte Haas Grotesk pour toonesque.
- Images dans `assets/img/` (avatar, logo cabinet26) ; icônes SVG inline ([Simple Icons](https://simpleicons.org), CC0)
- Aucune ressource tierce, aucun cookie, aucun traceur
- `sitemap.xml`, `robots.txt`, balises Open Graph / X et `hreflang` FR ↔ EN
- Hébergé sur GitHub Pages (domaine via `CNAME`)

```
.
├── index.html            accueil FR
├── en/                   version anglaise (accueil + cv/)
├── cv/                   CV FR (page + PDF + image de partage)
├── mentions-legales.html
├── 404.html
├── assets/               style.css, cv.css, site.js, fonts/, img/
├── favicon.png, apple-touch-icon.png, og-image.jpg
├── sitemap.xml, robots.txt, CNAME
└── CLAUDE.md             conventions de travail sur le dépôt
```

---

## Lancer en local

Les chemins sont absolus (`/assets/…`) : il faut un petit serveur, ouvrir `index.html` en double-cliquant ne suffit pas.

```bash
git clone https://github.com/vincequene/vincentimes.fr.git
cd vincentimes.fr
python3 -m http.server 8000   # ou : npx serve .
```

Puis ouvrir [http://localhost:8000](http://localhost:8000).

---

## Mettre à jour

- **Contenu** : modifier la page française **et** la page anglaise (`en/`).
- **CV** : après toute modification, régénérer le PDF de la langue concernée. Ouvrir `/cv/` (ou `/en/cv/`) dans Chrome → Imprimer → Enregistrer au format PDF, format A4, marges par défaut. La feuille d'impression met le CV en page sur une seule page, sans fond ni effets.
- **Âge et année** : calculés automatiquement, rien à faire.
- Jamais de numéro de téléphone ni de mention RQTH sur la version web du CV.

---

## Crédits

- Avatar : [Popuru](https://popuru.carrd.co/)
- Polices : Quicksand, Patrick Hand (SIL Open Font License 1.1) ; Alte Haas Grotesk © Yann Le Coroller
- Icônes de marques : [Simple Icons](https://simpleicons.org) (CC0) — les marques citées appartiennent à leurs propriétaires respectifs

---

## Contribuer

C'est mon site perso, donc les PR externes ont peu de chances de passer — mais si tu vois un truc cassé, une issue fait l'affaire.

---

## Licence

Code source disponible publiquement. Contenu, avatar et identité visuelle © Vincent Quêne (avatar dessiné par Popuru).
