import { defaultLocale, locales, setLocale, setRoute } from '$lib/translations';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const { url, request } = event;
  const { pathname } = url;

  // Get the base path from the environment, if set
  const basePath = process.env.BASE_PATH || '';

  // Get defined locales
  const supportedLocales = locales.get().map((l) => l.toLowerCase());

  // Extract the first part of the pathname to check if it's a locale
  let locale = supportedLocales.find((l) => l === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase());

  // If the route locale is not supported
  if (!locale) {
    // Get user preferred locale from the `Accept-Language` header
    locale = `${`${request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();

    // Set default locale if user preferred locale does not match
    if (!supportedLocales.includes(locale)) locale = defaultLocale;

    // Check if the basePath is already part of the pathname
    const newPathname = `${basePath}/${locale}`;

    // 301 redirect
    return new Response(undefined, { headers: { 'location': newPathname }, status: 301 });
  }

  // Add html `lang` attribute
  return resolve({ ...event, locals: { lang: locale } }, {
    transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`),
  });
};
// export const handle = async ({ event, resolve }) => {
//   const { url, request } = event;
//   const { pathname } = url;

//   // Get defined locales
//   const supportedLocales = locales.get().map((l) => l.toLowerCase());

//   // Try to get locale from `pathname`.
//   let locale = supportedLocales.find((l) => l === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase());

//   // If route locale is not supported
//   if (!locale) {
//     // Get user preferred locale
//     locale = `${`${request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();

//     // Set default locale if user preferred locale does not match
//     if (!supportedLocales.includes(locale)) locale = defaultLocale;

//     // 301 redirect
//     return new Response(undefined, { headers: { 'location': `/${locale}${pathname}` }, status: 301 });
//   }

//   // Add html `lang` attribute
//   return resolve({ ...event, locals: { lang: locale } }, {
//     transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`),
//   });
// };

/** @type {import('@sveltejs/kit').HandleServerError} */
export const handleError = async ({ event }) => {
  const { locals } = event;
  const { lang } = locals;

  await setLocale(lang);
  await setRoute('error');

  return locals;
};