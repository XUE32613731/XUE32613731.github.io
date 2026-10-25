# XUE's Space

Personal website v0.0.2, built with HTML, CSS and JavaScript. No dependencies or build step are required; compatible with GitHub Pages.

## Files

- `index.html`: home, shared navigation and page shells.
- `styles.css`: themes and responsive layout.
- `content.js`: grouped multilingual copy, names, icons and descriptions.
- `app.js`: routing and local preferences.
- `cv.js`: CV download interface and a simple arithmetic prompt.
- `assets/cv/`: original Chinese, English and French CV PDFs.
- `globe.js`: globe rendering, 24 skill nodes and alternating feature descriptions.
- `assets/icons/`: product marks, source notices and licenses.
- `assets/avatar.png`: site icon and home page cat avatar.

- `assets/fonts/`: local Space Grotesk font, Sora and Noto Serif SC heading subsets, and OFL licenses.

## Local preview

With Python installed, run from the project root:

```sh
python -m http.server 4174 --bind 127.0.0.1
```

Open http://127.0.0.1:4174 . Any static HTTP server can also serve these files.

## Features

The central welcome heading uses local fonts: Space Grotesk for English, Sora for French, and Noto Serif SC for Chinese. Fonts and licenses are in `assets/fonts/`.

Edit all multilingual copy in `content.js`: `pageCopy` contains page text; `skillCatalog` contains tool names, icon paths, categories and descriptions; `experienceContent` contains experience sections and entries. Each field keeps `zh`, `en` and `fr` together. Typography and layout are in `styles.css`. New French or Chinese heading characters may require expanding the font subsets.

English by default, with Chinese and French translations. Dark and light themes persist locally. The Canvas skill globe rotates automatically and supports dragging; the mouse wheel scrolls the page normally. Experience provides education, academic and other experience sections in Chinese, English and French. Knowledge introduces the planned collection of study resources in all three languages. The CV page supports Chinese, English and French interfaces and places the matching CV first. All three PDFs are available after a simple addition prompt. This client-side prompt is not access control: static PDFs remain publicly accessible through direct URLs. Contact provides email and WeChat details. Hash routing supports direct links without server rewrite rules.

The globe shows 21 tools, learning areas and university entries across 24 nodes. Python, GitHub and GPT / Codex each have two antipodal nodes, with rear duplicates fading out. Product marks are genuine; learning areas use concept icons. Two nodes travel to the sides for translated descriptions, then return before the next pair. Reduced-motion preferences disable automatic rotation and cycling. Tool descriptions explain their purpose, without claiming proficiency. The introduction presents education, working approach and research interests in three languages.

Icon sources: Devicon, the official GNU Octave source tree and Lobe Icons. See `assets/icons/NOTICE.txt` and the accompanying license files. The footer shows the version and its fixed update date.

## Deployment

Site URL: https://xue32613731.github.io/ (available after the owner configures and completes deployment).

Upload the website code, assets directory and both READMEs to the repository root, with index.html directly at the root. This is a static site; no dependencies or Python server are required on GitHub Pages.

Under Settings → Pages, select Deploy from a branch, choose main and /(root), then save. Open the site URL after the Pages deployment succeeds.

See [README.md](README.md) for the primary Chinese documentation.
