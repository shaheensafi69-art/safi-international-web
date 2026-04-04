import type { Locale } from './i18n-config'

const dictionaries = {
  // از آدرس نسبی (../) استفاده کن تا مستقیماً به پوشه dictionaries برود
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  fa: () => import('../dictionaries/fa.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  // جلوگیری از ارور تایپی با Type Casting
  const loadDictionary = dictionaries[locale as keyof typeof dictionaries] ?? dictionaries.fa;
  return loadDictionary();
}