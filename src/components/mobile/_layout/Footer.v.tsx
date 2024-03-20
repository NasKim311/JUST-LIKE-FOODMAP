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
        <footer id="footer" className="footer">
            <section className="content">
                <div className="">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    푸터입니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    </>
)

export default FooterV
