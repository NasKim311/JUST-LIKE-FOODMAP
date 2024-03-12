import Link from 'next/link'

const MainV = ({
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
            <div> 페이지입니다.</div>
        </main>
    </>
)

export default MainV
