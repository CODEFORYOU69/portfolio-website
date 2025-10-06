const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type Locale = keyof typeof dictionaries;

export const i18n = {
  defaultLocale: "fr" as Locale,
  locales: ["en", "fr"] as Locale[],
};
