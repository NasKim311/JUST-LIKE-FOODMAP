import dynamic from 'next/dynamic'

export default async function Page() {
    const NicePassAuth = dynamic(() => import(`@components/mobile/auth/NicePassAuth`), { ssr: false })

    let msg = 'NICE PASS 인증 실패 경로'
    let isAuth = 'N'

    return <NicePassAuth msg={msg} isAuth={isAuth} />
}