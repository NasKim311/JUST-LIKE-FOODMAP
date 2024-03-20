import ServerUtil from '@utils/Server.util'
import cookieEnv from 'cookieEnv'
import { Locale } from 'i18n-config';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
}

export default async function Root({ children, params }: { children: React.ReactNode; params: { locale: Locale } }) {
  const device = cookieEnv.device() // mo:모바일, pc:컴퓨터
  const pathname = ServerUtil.pathname() // server 에서는 pathname 조회가 안되서 middleware 통해서 x-pathname 관리
  // console.log('pathname', pathname.split('/')[1])

  let htmlLang = 'ko' // default : 'ko'

  if (pathname.split('/')[1] == 'en') {
    htmlLang = 'en'
  }

  return (
    <html lang={htmlLang} className={`${device}`}>
      <head></head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
