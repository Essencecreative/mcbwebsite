import Link from 'next/link';
export default function FeaturesStyle4() {
    return (
        <>
        <section className="features-style4-area">
            <div className="container">
                <div className="row">

                    <div className="col-xl-4">
                        <div className="features-style4-title-box">
                            <div className="sec-title">
                                <h2>Finbank<br /> Super Savings<br /> a/c in 5 Mins</h2>
                                <div className="sub-title">
                                    <p>Blinded by desire that they cannot foresee pain & trouble that are bound.</p>
                                </div>
                            </div>
                            <div className="btns-box">
                                <Link href="/contact" className="btn-one">
                                    <span className="txt">Open an Account</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3">
                        <div className="app-screen">
                            <img src="/assets/images/resources/app-screen.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-5">
                        <div className="account-creation-step">
                            <ul>
                                <li>
                                    <div className="single-step">
                                        <div className="counting">01</div>
                                        <div className="text-box">
                                            <h3>Submit Documents</h3>
                                            <p>Perfectly simple & easy to distinguish of choice is prevents.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="single-step">
                                        <div className="counting">02</div>
                                        <div className="text-box">
                                            <h3>KYC Verification</h3>
                                            <p>Claims off duty or the obligations it will pleasures be repudiated.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="single-step">
                                        <div className="counting lnone">03</div>
                                        <div className="text-box">
                                            <h3>Open an a/c & Deposit</h3>
                                            <p>Demoralized by charms pleasure of the they cannot and trouble.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>

    )
}
