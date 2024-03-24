import httpService from '@core/http.service'

async function getMainList(locale: string): Promise<any> {
    return httpService.get(`/${locale}/`,)
}

export default {
    getMainList
}