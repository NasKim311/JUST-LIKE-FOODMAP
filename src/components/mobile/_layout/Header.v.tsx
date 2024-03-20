import Link from 'next/link'

const HeaderV = ({
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
            <div> 헤더입니다.</div>
        </main>
    </>
)

export default HeaderV
