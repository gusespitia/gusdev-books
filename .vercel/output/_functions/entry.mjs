import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CtqcZKM-.mjs';
import { manifest } from './manifest_BfMjv0hx.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_CKxnzh-k.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_rUR60o68.mjs')],
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
    "middlewareSecret": "01f8c52c-4726-48c7-a389-94932d1e334b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
