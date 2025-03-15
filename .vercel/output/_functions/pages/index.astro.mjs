/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition, a as renderComponent } from '../chunks/astro/server_CmFOdoMe.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$AlmariaHeader, b as $$AlmariaFooter } from '../chunks/almaria-footer_Bb62UMmg.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_DmNw6AFM.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$AlmariaProducts = createComponent(async ($$result, $$props, $$slots) => {
  const items = await getCollection("items");
  const sortedItems = items.filter((item) => item.data.isStock).sort((a, b) => {
    const { data: dataA } = a;
    const { data: dataB } = b;
    const dateA = new Date(dataA.creationDate).getTime();
    const dateB = new Date(dataB.creationDate).getTime();
    if (dateA !== dateB) {
      return dateB - dateA;
    }
    if (dataA.isSale && !dataB.isSale) return -1;
    if (!dataA.isSale && dataB.isSale) return 1;
    return 0;
  });
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<main class="bg-white dark:bg-[rgb(35,37,40)] flex-grow"> <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8"> <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
Nuestros productos
</h2> ${sortedItems.length === 0 ? renderTemplate`<h1 class="text-center text-gray-500 dark:text-gray-400 mt-6">
No hay productos disponibles en este momento.
</h1>` : renderTemplate`<div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"> ${sortedItems.map((item) => {
    const { data, slug } = item;
    const {
      title,
      description,
      isSale,
      creationDate,
      price,
      regularPrice,
      image,
      startDate,
      endDate
    } = data;
    return renderTemplate`<article class="group relative hover:scale-105"${addAttribute(item.id, "data-key")} style="content-visibility: auto;"> <img${addAttribute(`/${image[0]}`, "src")}${addAttribute(description, "alt")} class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 main-image"${addAttribute(renderTransition($$result, "qdm6sc7j", "", `img-${slug}`), "data-astro-transition-scope")}> ${isSale && today >= startDate && today < endDate && renderTemplate`<span class="absolute top-2 left-2 bg-red-500 text-white font-semibold px-2 py-1 rounded">
Oferta
</span>`} ${(/* @__PURE__ */ new Date()).getTime() - new Date(creationDate).getTime() < 15 * 24 * 60 * 60 * 1e3 && renderTemplate`<span class="absolute top-2 right-2 bg-green-500 text-white font-semibold px-2 py-1 rounded">
Nuevo
</span>`} <div class="mt-4 flex justify-between"> <div> <h3 class="text-gray-700 dark:text-gray-300"> <a${addAttribute(`/items/${slug}`, "href")}> <span aria-hidden="true" class="absolute inset-0 font-[Poppins]"></span> ${title} </a> </h3> </div> ${isSale && today >= startDate && today < endDate ? renderTemplate`<div class="text-end text-sm font-medium text-gray-900 dark:text-gray-100"> <p> <span class="line-through text-gray-500 dark:text-gray-400">
$${regularPrice.toFixed(2)} </span> </p> <p>$${price.toFixed(2)}</p> </div>` : renderTemplate`<p class="text-sm font-medium text-gray-900 dark:text-gray-100">
$${regularPrice.toFixed(2)} </p>`} </div> </article>`;
  })} </div>`} </div> </main>`;
}, "/Users/daniel/Development/Astro/astro-almaria-shop/src/components/almaria-products.astro", "self");

const $$AlmariaBanner = createComponent(async ($$result, $$props, $$slots) => {
  const banners = await getCollection("banners");
  const currentDate = /* @__PURE__ */ new Date();
  const activeBanners = banners.filter((banner) => {
    const startDate = new Date(banner.data.startDate);
    const endDate = new Date(banner.data.endDate);
    return currentDate >= startDate && currentDate <= endDate;
  });
  return renderTemplate`${activeBanners != null && renderTemplate`${maybeRenderHead()}<section class="bg-white dark:bg-[rgb(35,37,40)] flex-grow">${activeBanners.map((banner) => renderTemplate`<div class="mx-auto max-w-2xl px-4 py-8 mt-5 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 bg-[rgb(238,214,218)] text-center rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"><h1 class="sm:text-2xl text-lg font-medium tracking-tight text-[rgb(71,126,194)] hover:scale-105 transition-transform duration-300 ease-in-out"><span class="font-semibold">${banner.data.title}</span><br>${banner.data.description}</h1></div>`)}</section>`}`;
}, "/Users/daniel/Development/Astro/astro-almaria-shop/src/components/almaria- banner.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Almaria Shop", "description": "Almaria Shop - ropa y accesorios" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col min-h-screen"> ${renderComponent($$result2, "AlmariaHeader", $$AlmariaHeader, {})} ${renderComponent($$result2, "AlmariaBanner", $$AlmariaBanner, {})} ${renderComponent($$result2, "AlmariaProducts", $$AlmariaProducts, {})} ${renderComponent($$result2, "AlmariaFooter", $$AlmariaFooter, {})} </div> ` })}`;
}, "/Users/daniel/Development/Astro/astro-almaria-shop/src/pages/index.astro", void 0);

const $$file = "/Users/daniel/Development/Astro/astro-almaria-shop/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
