import Link from "next/link"

export default function Footer1() {
    return (
        <>
        {/* Start footer area */}
        <footer className="footer-area">
            {/* Start Footer Top */}
            <div className="footer-top">
            <div className="lef-shape">
                <span className="icon-origami"></span>
            </div>
            <div className="container">
                <div className="row">
                {/* Products */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                    <div className="single-footer-widget single-footer-widget--link-box">
                    <div className="title">
                        <h3>Accounts</h3>
                    </div>
                    <div className="footer-widget-links">
                        <ul>
                        <li><Link href="/Saving-Account?type=Tukutane%20January">Tukutane January</Link></li>
                        <li><Link href="/Saving-Account?type=Tunu%20Account">Tunu Account</Link></li>
                        <li><Link href="/Saving-Account?type=Child%20Saving">Child Saving</Link></li>
                        <li><Link href="/Saving-Account?type=Akiba%20Yangu">Akiba Yangu</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>

                {/* Loans */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                    <div className="single-footer-widget single-footer-widget--link-box">
                    <div className="title">
                        <h3>Loans</h3>
                    </div>
                    <div className="footer-widget-links">
                        <ul>
                        <li><Link href="/Loan-Account?type=Salary%20Advance">Salary Advance</Link></li>
                        <li><Link href="/Loan-Account?type=Ada%20Chap%20Chap">Ada Chap Chap</Link></li>
                        <li><Link href="/Loan-Account?type=Mwalimu%20Jikimu">Mwalimu Jikimu</Link></li>
                        <li><Link href="/Loan-Account?type=Wastaafu%20Loan">Wastaafu Loan</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>

                {/* Cards & Offers */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                    <div className="single-footer-widget single-footer-widget--link-box">
                    <div className="title">
                        <h3>Way To Bank</h3>
                    </div>
                    <div className="footer-widget-links">
                        <ul>
                        <li><Link href="/Ways-To-Bank?type=Mwalimu%20Mobile">Mwalimu Mobile</Link></li>
                        <li><Link href="/Ways-To-Bank?type=Mwalimu%20Wakala">Mwalimu Wakala</Link></li>
                        <li><Link href="/Ways-To-Bank?type=MwalimuCard%20Visa">MwalimuCard Visa</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>

                {/* Support */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 single-widget">
                    <div className="single-footer-widget single-footer-widget--link-box">
                    <div className="title">
                        <h3>Support</h3>
                    </div>
                    <div className="footer-widget-links">
                        <ul>
                        <li><Link href="/board-of-directors">Board Of Directors</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/opportunities">Careers</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>

                </div>
            </div>
            </div>
            {/* End Footer Top */}
            
            <div className="footer-bottom">
            <div className="container">
                <div className="bottom-inner">
                <div className="footer-menu">
                    <ul>
                    <li><Link target="_blank" rel="noopener noreferrer" href="http://essence.co.tz">2025 © All rights Reserved. Designed by: Essence Creative</Link></li>
                    </ul>
                </div>
                <div className="footer-social-link">
                    <ul className="clearfix">
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/mwalimu-commercial-bank-plc/">
                        <i className="fab fa-linkedin"></i>
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mwalimubank/?hl=en">
                        <i className="fab fa-instagram"></i>
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mwalimubankplc/">
                        <i className="fab fa-facebook-f"></i>
                        </Link>
                    </li>
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
