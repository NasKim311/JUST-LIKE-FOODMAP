import Link from 'next/link'
import { Button } from 'react-bootstrap'

const MainV = ({
    t, 
    locale,
    params,
}: {
    t: string,
    locale: string,
    params: object,
}) => (
    <>
        <main id="main" className="container">
            <div> PC바디입니다.</div>
        </main>
    </>
)

export default MainV
