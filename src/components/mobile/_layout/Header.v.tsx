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
        <nav>
            <Link 
                className="logo-aTag"
                href="/" 
            >
                <div className="logo-box">
                    JUST-LIKE-WE
                </div>
            </Link>

            <Link
                href='#'
            >
                <div className="menu-box">
                    <img src="assets/images/logo/menu-button.png" />
                </div>
            </Link>
        </nav>
    </>
)

export default HeaderV
