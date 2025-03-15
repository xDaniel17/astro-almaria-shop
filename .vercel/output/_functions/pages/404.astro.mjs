/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CmFOdoMe.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$AlmariaHeader, b as $$AlmariaFooter } from '../chunks/almaria-footer_Bb62UMmg.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Almaria Shop", "description": "Almaria Shop - ropa y accesorios" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col min-h-screen"> ${renderComponent($$result2, "AlmariaHeader", $$AlmariaHeader, {})} <section class="bg-white dark:bg-[rgb(35,37,40)] flex flex-grow flex-col justify-center items-center"> <div> <h1 class="text-3xl font-bold text-center dark:text-white">
404 - Página no encontrada
</h1> <p class="text-center my-4 dark:text-white">
La página que buscas no existe.
</p> </div> <div class="py-8"> <a href="/" class="px-4 py-2 bg-[rgb(112,142,174)] text-white font-semibold rounded hover:bg-gray-600 dark:hover:bg-[rgb(148,106,105)] dark:bg-[rgb(188,142,150)]">← Volver al inicio</a> </div> </section> ${renderComponent($$result2, "AlmariaFooter", $$AlmariaFooter, {})} </div> ` })}`;
}, "/Users/daniel/Development/Astro/astro-almaria-shop/src/pages/404.astro", void 0);

const $$file = "/Users/daniel/Development/Astro/astro-almaria-shop/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
