import 'server-only'
import { cookies, headers } from 'next/headers'
import MobileDetect from 'mobile-detect'

const isMobile = () => {
    const headersList = headers()
    const userAgent = headersList.get('user-agent')
    return Boolean(new MobileDetect(userAgent || '').mobile())
}

const device = () => {
    return isMobile() ? 'mo' : 'pc'
}

export default {
    isMobile,
    device,
}
