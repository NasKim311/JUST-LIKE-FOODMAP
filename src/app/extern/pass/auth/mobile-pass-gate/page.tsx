import dynamic from 'next/dynamic'

export default async function Page() {
    const NicePassMobilePopup = dynamic(() => import(`@components/mobile/auth/NicePassMobilePopup`), { ssr: false })

    return <NicePassMobilePopup />
}