import Link from 'next/link';
export default function Accounts() {
    return (
        <>
        {/*Start Accounts Style1 Area*/}
        <section className="account-style1-area">
            <div className="container">
            <div className="sec-title text-center">
                <h2>Let’s Think of saving Money</h2>
                <div className="sub-title">
                <p>Convenient banking options for you.</p>
                </div>
            </div>
            <div className="row">
                {/*Start Single Account Box Style1*/}
                <div className="col-xl-4 col-lg-4">
                <div className="single-account-box-style1">
                    <div className="img-holder">
                    <img src="assets/images/resources/account-1.jpg" alt="" />
                    </div>
                    <div className="text-holder">
                    <h3>
                        <Link href="#">Savings Account</Link>
                    </h3>
                    <p>Open account now and earn upto 8%</p>
                    </div>
                </div>
                </div>
                {/*End Single Account Box Style1*/}
                {/*Start Single Account Box Style1*/}
                <div className="col-xl-4 col-lg-4">
                <div className="single-account-box-style1">
                    <div className="img-holder">
                    <img src="assets/images/resources/account-2.jpg" alt="" />
                    </div>
                    <div className="text-holder">
                    <h3>
                        <Link href="#">Current Account</Link>
                    </h3>
                    <p>Open account now and earn upto 5%</p>
                    </div>
                </div>
                </div>
                {/*End Single Account Box Style1*/}
                {/*Start Single Account Box Style1*/}
                <div className="col-xl-4 col-lg-4">
                <div className="single-account-box-style1">
                    <div className="img-holder">
                    <img src="assets/images/resources/account-3.jpg" alt="" />
                    </div>
                    <div className="text-holder">
                    <h3>
                        <Link href="#">Fixed Deposit Account</Link>
                    </h3>
                    <p>Open account now and earn upto 10%</p>
                    </div>
                </div>
                </div>
                {/*End Single Account Box Style1*/}
            </div>
            <div className="row">
                <div className="col-xl-12">
                <div className="account-style1-area_btn">
                    <Link href="/accounts">
                    <span className="icon-right-arrow" />
                    View All Accounts
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*End Accounts Style1 Area*/}
        </>


    )
}
