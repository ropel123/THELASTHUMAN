# $HUMAN — Stay Human

Landing page for **$HUMAN**, "the last human meme coin in a market run by bots."

The site itself is a single static page (`public/site.html` + `public/style.css` + `public/site.js`), wrapped in a minimal [vinext](https://www.npmjs.com/package/vinext) (Next.js-on-Vite) shell so it can be deployed to Cloudflare Workers. `pages/index.jsx` renders the static page in a full-viewport iframe, and `next.config.mjs` rewrites `/` to `/site.html`.

## Structure

```
public/site.html    the actual landing page
public/style.css    all styling
public/site.js      boot screen, scroll/reveal, cursor, tilt/magnetic effects, contract-copy UX
public/assets/      hero artwork + fonts (see FONT-LICENSE.txt)
pages/index.jsx     vinext page that iframes /site.html
index.html          copy of public/site.html from the app-builder export
src/                copies of site.js / style.css from the export
wrangler.jsonc      Cloudflare Workers config
```

## Develop

```sh
npm install
npm run dev
```

The page is fully static — you can also just serve `public/` with any static file server and open `site.html`.

## Deploy

**Vercel**: `vercel.json` serves the site as pure static files (no build step): it publishes the `public/` directory and rewrites `/` to `/site.html`. Just import the repo in Vercel and deploy.

**Cloudflare Workers**: `npm run build` produces `dist/` (see `wrangler.jsonc`). The `.openai/hosting.json` file is the hosting reference from the app-builder export this project originated from.

## Before launch

Placeholders to replace when going live:

- Contract address: `data-contract="COMING SOON"` on the `#copyContract` button in `public/site.html`
- Dexscreener link: still `href="#"` in the `#community` section (X and Telegram are set)
