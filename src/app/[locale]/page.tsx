import serverUtil from '@utils/Server.util'
import cookieEnv from 'cookieEnv'
import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'
import dynamic from 'next/dynamic'

export default async function Page({ params: { locale } }: { params: { locale: Locale } }) {
    const startTime = performance.now()
    const t = await getDictionary(locale)
    const mobile = cookieEnv.isMobile()
    const pathname = serverUtil.pathname() // server 에서는 pathname 조회가 안되서 middleware 통해서 x-pathname 관리

    const Main = mobile
        ? dynamic(() => import(`@components/mobile/main/Main`), { ssr: false })
        : dynamic(() => import(`@components/pc/main/Main`), { ssr: false })

    const endTime = performance.now()
    console.log(`=======AhnlabDotCom Main Page Performance : ${endTime - startTime} milliseconds`)

    return (
        <Main
            t={t}
            locale={locale}
        />
    )
}
