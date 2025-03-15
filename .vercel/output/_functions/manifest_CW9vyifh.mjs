import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_CmFOdoMe.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_uSornAQc.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/daniel/Development/Astro/astro-almaria-shop/","cacheDir":"file:///Users/daniel/Development/Astro/astro-almaria-shop/node_modules/.astro/","outDir":"file:///Users/daniel/Development/Astro/astro-almaria-shop/dist/","srcDir":"file:///Users/daniel/Development/Astro/astro-almaria-shop/src/","publicDir":"file:///Users/daniel/Development/Astro/astro-almaria-shop/public/","buildClientDir":"file:///Users/daniel/Development/Astro/astro-almaria-shop/dist/client/","buildServerDir":"file:///Users/daniel/Development/Astro/astro-almaria-shop/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Dj9Q-1RC.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Dj9Q-1RC.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/daniel/Development/Astro/astro-almaria-shop/src/pages/items/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/items/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/daniel/Development/Astro/astro-almaria-shop/src/components/almaria-products.astro",{"propagation":"in-tree","containsHead":false}],["/Users/daniel/Development/Astro/astro-almaria-shop/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/daniel/Development/Astro/astro-almaria-shop/src/components/almaria- banner.astro",{"propagation":"in-tree","containsHead":false}],["/Users/daniel/Development/Astro/astro-almaria-shop/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/items/[id]@_@astro":"pages/items/_id_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/daniel/Development/Astro/astro-almaria-shop/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BuOax8j9.mjs","/Users/daniel/Development/Astro/astro-almaria-shop/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/daniel/Development/Astro/astro-almaria-shop/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CXLcwHdU.mjs","\u0000@astrojs-manifest":"manifest_CW9vyifh.mjs","/Users/daniel/Development/Astro/astro-almaria-shop/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/poppins-latin-ext-400-normal.by3JarPu.woff2","/_astro/poppins-latin-ext-400-normal.DaBSavcJ.woff","/_astro/poppins-latin-400-normal.BOb3E3N0.woff","/_astro/index.Dj9Q-1RC.css","/almaria.ico","/favicon.svg","/logo-almaria-blanco.png","/logo-almaria-celeste.png","/vestido-amaia-1.webp","/vestido-amaia-2.webp","/vestido-blanco-maxi-1.webp","/vestido-blanco-maxi-2.webp","/vestido-blanco-plus-flores-1.webp","/vestido-blanco-plus-flores-2.webp","/vestido-cielo-corto-1.webp","/vestido-cielo-corto-2.webp","/vestido-corto-azul-1.webp","/vestido-corto-azul-2.webp","/vestido-corto-purple-1.webp","/vestido-corto-purple-2.webp","/vestido-corto-redblack-1.webp","/vestido-corto-redblack-2.webp","/vestido-cotton-pink-1.webp","/vestido-cotton-pink-2.webp","/vestido-maxi-celeste-1.webp","/vestido-maxi-celeste-2.webp","/vestido-maxi-cobalt-blue-plus-1.webp","/vestido-maxi-cobalt-blue-plus-2.webp","/vestido-morado-azul-sl-1.webp","/vestido-morado-azul-sl-2.webp","/vestido-naranja-largo-1.webp","/vestido-naranja-largo-2.webp","/vestido-navy-1.webp","/vestido-navy-2.webp","/vestido-nieve-1.webp","/vestido-nieve-2.webp","/vestido-olive-dress-1.webp","/vestido-olive-dress-2.webp","/vestido-plus-corto-dutsy-rose-1.webp","/vestido-plus-corto-dutsy-rose-2.webp","/vestido-red-pink-1.webp","/vestido-red-pink-2.webp","/vestido-sol-1.webp","/vestido-sol-2.webp","/vestido-sweet-pink-1.webp","/vestido-sweet-pink-2.webp","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Oi6zH+Q4KaSqNal6es0REBaxkvWN4O9rtg5tUVAg1O8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
