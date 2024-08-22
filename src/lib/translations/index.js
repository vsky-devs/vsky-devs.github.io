import { dev } from '$app/environment';
import i18n from 'sveltekit-i18n';
import pl from './pl';
import ru from './ru';
import lang from './lang';

/** @type {import('sveltekit-i18n').Config} */
const config = {
  log: {
    level: dev ? 'warn' : 'error',
  },
  translations: {
    pl: {
      ...pl,
      lang,
    },
    ru: {
      ...ru,
      lang,
    },
  },
};

export const defaultLocale = 'pl';

export const { t, locale, locales, loading, setLocale, setRoute, translations } = new i18n(config);