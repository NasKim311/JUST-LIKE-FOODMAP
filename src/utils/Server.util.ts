import 'server-only'

import { cookies, headers } from 'next/headers'

const pathname = () => {
    const headersList = headers()
    const xpathname = headersList.get('x-pathname') // x-pathname 은 middleware 에서 설정

    return xpathname || ''
}

async function serviceErrorHandler(res: Response): Promise<any> {
    if (res.status != 200) {
        const data = await res.json()
        throw data
    }
    return await res.json()
}

export default {
    pathname,
    serviceErrorHandler,
}
