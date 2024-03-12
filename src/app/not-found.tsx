import dynamic from 'next/dynamic'
import serverUtil from '@utils/Server.util'
import cookieEnv from 'cookieEnv'

function NotFoundPage() {
    const pathname = serverUtil.pathname() // server 에서는 pathname 조회가 안되서 middleware 통해서 x-pathname 관리
    const mobile = cookieEnv.isMobile()

    // const Component = mobile
    //     ? dynamic(() => import(`@components/mobile/_common/NotFound`), { ssr: false })
    //     : dynamic(() => import(`@components/pc/_common/NotFound`), { ssr: false })

    // return <Component pathname={pathname} />
}

export default NotFoundPage
