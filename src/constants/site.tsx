export const LANG_KOREAN: string = 'ko'
export const LANG_ENGLISH: string = 'en'

export enum AUTH_CODE_TYPE {
    EMAIL = 'EMAIL',
    SMS = 'SMS',
}

export const TEL_PREFIX = [
    '02',
    '031',
    '032',
    '033',
    '041',
    '042',
    '043',
    '044',
    '051',
    '052',
    '053',
    '054',
    '055',
    '061',
    '062',
    '063',
    '064',
    '0502',
    '0505',
    '070',
]

export const CELL_PREFIX = ['010', '011', '016', '017', '018', '019']

export default {
    LANG_KOREAN,
    LANG_ENGLISH,
    AUTH_CODE_TYPE,
    TEL_PREFIX,
    CELL_PREFIX,
}
