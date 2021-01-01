import en from './en'
import pt from './pt'

export interface TranslationData {
  [index: string]: string
}

interface i18nData {
  en: TranslationData
  pt: TranslationData
}

const i18n: i18nData = {
  en: en,
  pt: pt,
}

export const translate = (locale: string) => {
  return (string: string) => {
    if (i18n[locale] && i18n[locale][string]) {
      return i18n[locale][string]
    }
    return string
  }
}

export default i18n
