const MainV = ({
    t,
    locale,
    params,
}: {
    t: string,
    locale: string,
    params: any,
}) => (
    <>
        <main id="main" className="container main-container">
            <div className="main-cover">
                <div className="title-box">
                    <div className="title-logo">
                        <img src="assets/images/logo/title-logo.png" />
                    </div>
                    <div className="sentence">Memory Album</div>
                </div>
            </div>
        </main>
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 p-2">
                        <div className="card">
                            <div className="card-body">
                                Start creating your amazing application!
                            </div>
                        </div>
                    </div>
                    <div className="col-6 p-2">
                        <div className="card">
                            <div className="card-body">
                                Start creating your amazing application!
                            </div>
                        </div>
                    </div>
                    <div className="col-6 p-2">
                        <div className="card">
                            <div className="card-body">
                                Start creating your amazing application!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
)

export default MainV
