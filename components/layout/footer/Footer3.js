import Link from "next/link"

export default function Footer3() {
    return (

        <>
            {/* Start footer area */}
            <footer className="footer-area footer-area--style3">

            {/* Start Footer Top */}
            <div className="footer-top">
            <div className="container">
                <div className="row">

                {/* Start single footer widget */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                    <div className="single-footer-widget single-footer-widget--link-box">
                    <div className="our-company-info">
                        <div className="footer-logo-style1">
                        <Link href="/">
                            <img src="/assets/images/footer/footer-logo-3.png" alt="Awesome Logo" title="" />
                        </Link>
                        </div>
                        <div className="bottom-text">
                        <p>Our goal is to help our companies all maintains of achieve best position team work occurings works the wise man therefore always holds these in matters to this principle.</p>
                        </div>
                        <div className="footer-certificate-box">
                        <div className="icon">
                            <span className="icon-certificate"></span>
                        </div>
                        <div className="title">
                            <h3>Banker’s Bank of the<br /> Year 2024</h3>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End single footer widget */}

                {/* Start single footer widget */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                    <div className="single-footer-widget single-footer-widget--link-box">
                    <div className="title">
                        <h3>Useful Links</h3>
                    </div>
                    <div className="footer-widget-links">
                        <ul>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/testimonials">Testimonials</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/careers-details">Career Detail</Link></li>
                        <li><Link href="/faq">Faq’s</Link></li>
                        <li><Link href="/blog-2">List View</Link></li>
                        <li><a href="#" style={{ cursor: 'default', pointerEvents: 'none', textDecoration: 'none', color: 'inherit' }}>Get In Touch</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                {/* End single footer widget */}

                {/* Start single footer widget */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                    <div className="single-footer-widget single-footer-widget--link-box">
                    <div className="title">
                        <h3>Services</h3>
                    </div>
                    <div className="footer-widget-links">
                        <ul>
                        <li><Link href="/accounts">All Accounts</Link></li>
                        <li><Link href="/loan-home">Home Loan</Link></li>
                        <li><Link href="/loan-personal">Personal Loan</Link></li>
                        <li><Link href="/loan-vehicle">Vehicle Loan</Link></li>
                        <li><Link href="/loan-education">Education Loan</Link></li>
                        <li><Link href="/loan-gold">Gold Loan</Link></li>
                        <li><Link href="/cards">Our All Cards</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                {/* End single footer widget */}

                {/* Start single footer widget */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                    <div className="single-footer-widget single-footer-widget--link-box">
                    <div className="find-nearest-branch-box-style2">
                        <div className="icon">
                        <span className="icon-map"></span>
                        </div>
                        <h3>Find Your Nearest<br /> Branch & ATM</h3>

                        <form id="nearest-branch-form" name="nearest-branch_form" className="default-form2" action="/index.html" method="post">
                        <div className="input-box">
                            <div className="select-box clearfix">
                            <select className="wide">
                                <option data-display="Branch">Branch</option>
                                <option value="1">Canada</option>
                                <option value="2">USA</option>
                                <option value="3">KSA</option>
                                <option value="4">India</option>
                            </select>
                            </div>
                        </div>
                        <div className="input-box">
                            <input type="text" name="form_city" id="formCity" placeholder="Enter your city" required />
                        </div>
                        <div className="button-box">
                            <button type="submit" data-loading-text="Please wait...">
                            <span className="icon-right-arrow"></span> Find On Map
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                {/* End single footer widget */}

                </div>
            </div>
            </div>
            {/* End Footer Top */}

            <div className="footer-bottom">
            <div className="container">
                <div className="bottom-inner">
                <div className="footer-menu">
                    <ul>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/accounts">All Accounts</Link></li>
                        <li><Link href="/cards-secured">Secured</Link></li>
                        <li><Link href="/account-nri">NRI Account</Link></li>
                    </ul>
                </div>
                <div className="footer-social-link">
                    <ul className="clearfix">
                    <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                    <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>

            </footer>
            {/* End footer area */}
        </>
    )
}
