import 'server-only'
import type { Locale } from './i18n-config'

const i18n = {
    ko: () => import('./i18n/ko.json').then(module => module.default),
    en: () => import('./i18n/en.json').then(module => module.default),
}

export const getDictionary = async (locale: Locale) => i18n[locale]?.() ?? i18n.ko()