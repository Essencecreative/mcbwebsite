import Link from 'next/link';
export default function ServiceRequest() {
    return (
        <>
        {/*Start Service Request Style2 Area*/}
        <section className="service-request-style2-area">
            <div className="container">
            <div className="row">
                <div className="col-xl-6">
                <div className="service-request-style2-img-box">
                    <div className="service-request-style2-img-box__inner">
                    <img
                        src="assets/images/resources/service-request-style2.jpg"
                        alt=""
                    />
                    </div>
                </div>
                </div>
                <div className="col-xl-6">
                <div className="service-request-style2-content-box">
                    <div
                    className="pattern-bottom"
                    style={{
                        backgroundImage:
                        "url(assets/images/shapes/service-request-style2-content-box-pattern.png)"
                    }}
                    ></div>
                    <div className="sec-title">
                    <h2>
                        Online Emergency
                        <br /> Service Requests All In
                        <br /> One Place
                    </h2>
                    <div className="sub-title">
                        <p>
                        Desire that they cannot foresee the pain &amp; trouble that
                        are bound too ensue equal blame belongs through shrinking.
                        </p>
                    </div>
                    </div>
                    <div className="service-request-style2-content-box__inner">
                    <ul>
                        <li>
                        <div className="single-service-request-style2-box">
                            <div className="icon">
                            <span className="icon-credit-card" />
                            </div>
                            <div className="title">
                            <h3>
                                Credit &amp; Debit Card
                                <br /> Related
                                <Link href="/account-savings">
                                <span className="icon-right-arrow" />
                                </Link>
                            </h3>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div className="single-service-request-style2-box">
                            <div className="icon">
                            <span className="icon-computer" />
                            </div>
                            <div className="title">
                            <h3>
                                Mobile &amp; Internet
                                <br /> Banking
                                <Link href="/account-savings">
                                <span className="icon-right-arrow" />
                                </Link>
                            </h3>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div className="single-service-request-style2-box">
                            <div className="icon">
                            <span className="icon-book" />
                            </div>
                            <div className="title">
                            <h3>
                                Account &amp; Personal
                                <br /> Details Change
                                <Link href="/account-savings">
                                <span className="icon-right-arrow" />
                                </Link>
                            </h3>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div className="single-service-request-style2-box">
                            <div className="icon">
                            <span className="icon-check-book" />
                            </div>
                            <div className="title">
                            <h3>
                                Cheque Book / DD
                                <br /> Related
                                <Link href="/account-savings">
                                <span className="icon-right-arrow" />
                                </Link>
                            </h3>
                            </div>
                        </div>
                        </li>
                    </ul>
                    <div className="service-request-style2__btns-box">
                        <Link className="btn-one" href="/faq">
                        <span className="txt">Customer FAQ’s</span>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*End Service Request Style2 Area*/}
        </>


    )
}
