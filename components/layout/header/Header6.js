import Link from "next/link"
import Menu from "../Menu2"
import MobileMenu from "../MobileMenu2"
export default function Header6({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (

      <header className={`main-header main-header-style3 ${scroll ? "fixed-header" : ""}`}>
        {/*Start Main Header Style3 Top*/}
        <div className="main-header-style3__top">
            <div className="auto-container">
            <div className="outer-box">
                {/*Start Main Header Style3 Top Left*/}
                <div className="main-header-style3__top-left">
                <div className="header-btn-one">
                    <a href="#">Pay Online</a>
                </div>
                <div className="header-menu-style1">
                    <ul>
                    <li>
                        <a href="#">Careers</a>
                    </li>
                    <li>
                        <a href="#">Faq’s</a>
                    </li>
                    <li>
                        <a href="#">Offers</a>
                    </li>
                    <li>
                        <a href="#">Calendar</a>
                    </li>
                    <li>
                        <a href="#">Calculator</a>
                    </li>
                    </ul>
                </div>
                </div>
                {/*End Main Header Style3 Top Left*/}
                {/*Start Main Header Style3 Top Right*/}
                <div className="main-header-style3__top-right">
                <div className="header-contact-info-style1">
                    <ul>
                    <li>
                        <span className="icon-map" /> 12 Red Rose, LA 90010{" "}
                    </li>
                    <li>
                        <span className="icon-clock" /> 9am to 5pm, Sun Holiday
                    </li>
                    </ul>
                </div>
                <div className="header-social-link-style1">
                    <ul className="clearfix">
                    <li>
                        <a href="#">
                        <i className="fab fa-youtube" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fab fa-instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fab fa-twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fab fa-facebook-f" />
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
                {/*End Main Header Style3 Top Right*/}
            </div>
            </div>
        </div>
        {/*End Main Header Style3 Top*/}

        <nav className="main-menu main-menu-style3">
            <div className="main-menu__wrapper clearfix">
                <div className="container">
                <div className="main-menu__wrapper-inner">

                    <div className="main-menu-style3-left">
                    <div className="header-logon-box">
                        <div className="icon">
                        <span className="icon-home-button"></span>
                        </div>
                        <div className="select-box">
                        <select className="wide">
                            <option data-display="Login">Login</option>
                            <option value="1">Login</option>
                            <option value="2">Register</option>
                        </select>
                        </div>
                    </div>

                    <div className="logo-box-style3">
                        <Link href="/">
                        <img src="/assets/images/resources/logo-3.png" alt="Awesome Logo" title="" />
                        </Link>
                    </div>
                    </div>

                    <div className="main-menu-style3-middle">
                    <div className="main-menu-box">
                        <a href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                        <i className="icon-menu"></i>
                        </a>
                        <Menu />
                    </div>
                    </div>

                    <div className="main-menu-style3-right">
                    <div className="phone-number-box-style1">
                        <div className="icon">
                        <span className="icon-headphones"></span>
                        </div>
                        <h5>Toll Free</h5>
                        <h3><Link href="tel:123456789">+800 123 456 78</Link></h3>
                    </div>

                    <div className="box-search-style2">
                        <a href="#" className="search-toggler" onClick={handlePopup}>
                        <span className="icon-search"></span>
                        Search
                        </a>
                    </div>
                    </div>

                </div>
                </div>
            </div>
        </nav>
        

        <div className={`stricky-header stricky-header--style3 stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
          <div className="sticky-header__content" />
          <nav className="main-menu main-menu-style3">
            <div className="main-menu__wrapper clearfix">
                <div className="container">
                <div className="main-menu__wrapper-inner">

                    <div className="main-menu-style3-left">
                    <div className="header-logon-box">
                        <div className="icon">
                        <span className="icon-home-button"></span>
                        </div>
                        <div className="select-box">
                        <select className="wide">
                            <option data-display="Login">Login</option>
                            <option value="1">Login</option>
                            <option value="2">Register</option>
                        </select>
                        </div>
                    </div>

                    <div className="logo-box-style3">
                        <Link href="/">
                        <img src="/assets/images/resources/logo-3.png" alt="Awesome Logo" title="" />
                        </Link>
                    </div>
                    </div>

                    <div className="main-menu-style3-middle">
                    <div className="main-menu-box">
                        <a href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                        <i className="icon-menu"></i>
                        </a>
                        <Menu />
                    </div>
                    </div>

                    <div className="main-menu-style3-right">
                    <div className="phone-number-box-style1">
                        <div className="icon">
                        <span className="icon-headphones"></span>
                        </div>
                        <h5>Toll Free</h5>
                        <h3><Link href="tel:123456789">+800 123 456 78</Link></h3>
                    </div>

                    <div className="box-search-style2">
                        <a href="#" className="search-toggler" onClick={handlePopup}>
                        <span className="icon-search"></span>
                        Search
                        </a>
                    </div>
                    </div>

                </div>
                </div>
            </div>
        </nav>
        </div>

      <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
    </header>
    
    )
}