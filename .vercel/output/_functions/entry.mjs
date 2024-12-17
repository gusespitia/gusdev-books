import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Cc2zGmyH.mjs';
import { manifest } from './manifest_Ck3K2jgf.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_D1zTwLCY.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_BZ6cm7wW.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/book/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/book/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1393ebb8-40d2-4b87-8a3a-7fac3e66e53c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
