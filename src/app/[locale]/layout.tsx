import { LANG_KOREAN, LANG_ENGLISH} from '@constants/site'
import { i18n, Locale } from 'i18n-config'
import { Metadata } from 'next'
import { getDictionary } from 'get-dictionary'
import { cookies, headers } from 'next/headers'
import cookieEnv from 'cookieEnv'
import serverUtil from '@utils/Server.util'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Head from 'next/head'
 
export async function generateStaticParams() {
    const locales = i18n.locales.map(locale => ({ locale: locale }))
    return locales
}
 
export default async function Root({ children, params }: { children: React.ReactNode; params: { locale: Locale } }) {
    const t = await getDictionary(params.locale)
    const mobile = cookieEnv.isMobile()
    const device = cookieEnv.device() // mo:모바일, pc:컴퓨터
    const pathname = serverUtil.pathname() // server 에서는 pathname 조회가 안되서 middleware 통해서 x-pathname 관리
    const locale = params.locale
    // console.log('ROOT', locale, params, mobile, layout, device)

    // const _Header = mobile
    //     ? dynamic(() => import(`@components/mobile/_layout/_Header`), { ssr: false })
    //     : dynamic(() => import(`@components/pc/_layout/_Header`), { ssr: false })
 
    // let Footer = mobile
    // ? dynamic(() => import(`@components/mobile/_layout/Footer`), { ssr: false })
    // : dynamic(() => import(`@components/pc/_layout/Footer`), { ssr: false })
 
    let htmlLang = locale + ''
 
    return (
        <html lang={htmlLang} className={`${device}`}>
            <head>
                <link rel="shortcut icon" href="/assets/images/icons/favicon.ico" />
            </head>
            <body
                className={`${locale} ${device}`}
                suppressHydrationWarning={true}
            >
                {children}
                {/* {mobile && (
                    <>
                        <_Header locale={locale} t={t} />
                        {children}
                        <Footer locale={locale} t={t} />
                    </>
                )}
 
                {!mobile && (
                    <>
                        <_Header locale={locale} t={t} />
                        <div style={{ minHeight: 800 + 'px' }}>{children}</div>
                        <Footer locale={locale} t={t} />
                    </>
                )} */}
            </body>
        </html>
    )
}
 
export async function generateMetadata(props: any) {
    console.log('ROOT.generateMetadata', props.params, serverUtil.pathname())
    const dictionary = await getDictionary(props.params.locale)
    const title = dictionary['META_TITLE']
    const desc = dictionary['META_DESC']
    const keyword = dictionary['META_KEYWORD']
 
    return {
        title: title,
        description: desc,
        keywords: keyword,
        openGraph: {
            title: title,
            description: desc,
            images: ['/assets/images/og/og.jpg'],
        },
    }
}