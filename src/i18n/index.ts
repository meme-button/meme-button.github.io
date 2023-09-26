import { createI18n } from "vue-i18n";

const langs = import.meta.glob("./*.json", { eager: true, import: "default" });
const messages = Object.entries(langs).reduce((msgs, [key, value]) => {
  const langKey = key.match(/\.\/(.*).json/)?.[1];
  if (langKey) return { ...msgs, [langKey]: value };
  return msgs;
}, {});

const site_lang = localStorage.site_lang || "en";

const i18n = createI18n({
  // Composition API
  legacy: false,

  // default locale
  locale: site_lang,
  fallbackLocale: "en",

  // translations
  messages,
});

_changeLang(site_lang);

export const $t:typeof i18n.global.t = i18n.global.t;
export const $d:typeof i18n.global.d = i18n.global.d;
export const $n:typeof i18n.global.n = i18n.global.n;
export const $locale:typeof i18n.global.locale = i18n.global.locale;

export function _changeLang(targetLocale:string) {
  i18n.global.locale.value = targetLocale;
  localStorage.site_lang = targetLocale;
  document.documentElement.setAttribute("lang", targetLocale);
}

export default i18n;
