import Link from 'next/link'

const FooterV = ({
    t, 
    locale,
    params,
}: {
    t: string,
    locale: string,
    params: object
}) => (
    <>
        <main id="main" className="container login">
            <div> 푸터입니다.</div>
        </main>
    </>
)

export default FooterV
