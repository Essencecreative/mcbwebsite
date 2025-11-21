import Link from "next/link";

export default function AccountSteps() {
    return (
        <>
        {/*Start Account Steps Area*/}
        <section className="account-steps-area">
            <div className="container">
            <div className="sec-title text-center">
                <h2>Your Account in Easy Steps</h2>
                <div className="sub-title">
                <p>We show our value by serving faithfully.</p>
                </div>
            </div>
            <ul className="row account-steps__content">
                {/*Start Single Account Steps Colum*/}
                <li className="col-xl-4 single-account-steps-colum text-center">
                <div className="single-account-steps">
                    <div className="icon">
                    <div className="icon-inner">
                        <span className="icon-consultation" />
                    </div>
                    <div className="counting">01</div>
                    </div>
                    <div className="text">
                    <h3>Consult With Team</h3>
                    <p>
                        Must explain to you how work mistaken give you complete guide
                        they cannot foresee pain.
                    </p>
                    </div>
                </div>
                </li>
                {/*End Single Account Steps Colum*/}
                {/*Start Single Account Steps Colum*/}
                <li className="col-xl-4 single-account-steps-colum text-center">
                <div className="single-account-steps">
                    <div className="icon">
                    <div className="icon-inner">
                        <span className="icon-file-1" />
                    </div>
                    <div className="counting">02</div>
                    </div>
                    <div className="text">
                    <h3>KYC Verification</h3>
                    <p>
                        Business it will frequently occur that pleasures have to be
                        repudiated and annoyances accepted.
                    </p>
                    </div>
                </div>
                </li>
                {/*End Single Account Steps Colum*/}
                {/*Start Single Account Steps Colum*/}
                <li className="col-xl-4 single-account-steps-colum text-center">
                <div className="single-account-steps">
                    <div className="icon">
                    <div className="icon-inner">
                        <span className="icon-investment" />
                    </div>
                    <div className="counting">03</div>
                    </div>
                    <div className="text">
                    <h3>Start Your Savings</h3>
                    <p>
                        Being able to do what we like best every pleasure is to be
                        welcomed and pain avoided but in certain.
                    </p>
                    </div>
                </div>
                </li>
                {/*End Single Account Steps Colum*/}
            </ul>
            <div className="row">
                <div className="col-xl-12">
                <div className="account-steps-area__bottom-text">
                    <p>
                    Schedule an appointment with our specialist to discuss{" "}
                    <Link href="/contact">contact us.</Link>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*End Account Steps Area*/}
        </>
    )
}
