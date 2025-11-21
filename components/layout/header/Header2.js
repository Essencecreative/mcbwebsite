import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (

      <header className={`main-header main-header-style2 ${scroll ? "fixed-header" : ""}`}>
        <div className="main-header-style2__top">
            <div className="auto-container">
                <div className="outer-box">
                {/* Start Main Header Style2 Top Left */}
                <div className="main-header-style2__top-left">
                    <div className="notification-box">
                    <div className="icon">
                        <span className="icon-notification"></span>
                    </div>
                    <p>
                        Get upto 4%* on our Savings Account Balances with Finbank.
                        <a href="#">
                        <span className="icon-right-arrow"></span>
                        </a>
                    </p>
                    </div>
                </div>
                {/* End Main Header Style2 Top Left */}

                {/* Start Main Header Style2 Top Right */}
                <div className="main-header-style2__top-right">
                    <div className="header-menu-style1">
                    <ul>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/faq">Faq’s</Link></li>
                        <li><Link href="#">Offers</Link></li>
                        <li><Link href="#">Calendar</Link></li>
                    </ul>
                    </div>
                    <div className="box-search-style1">
                        <a href="#" className="search-toggler" onClick={handlePopup}>
                            <span className="icon-search"></span>
                            Search
                        </a>
                    </div>
                    <div className="language-switcher">
                    <div id="polyglotLanguageSwitcher">
                        <form action="#">
                        <select id="polyglot-language-options" defaultValue="en">
                            <option id="en" value="en">English</option>
                            <option id="fr" value="fr">French</option>
                            <option id="de" value="de">German</option>
                            <option id="it" value="it">Italian</option>
                            <option id="es" value="es">Spanish</option>
                        </select>
                        </form>
                    </div>
                    </div>
                </div>
                {/* End Main Header Style2 Top Right */}
                </div>
            </div>
        </div>
        <nav className="main-menu main-menu-style2">
            <div className="main-menu__wrapper clearfix">
                <div className="container">
                <div className="main-menu__wrapper-inner">

                    <div className="main-menu-style2-left">
                    <div className="logo-box-style2">
                        <Link href="/">
                        <img src="/assets/images/resources/logo-2.png" alt="Awesome Logo" title="" />
                        </Link>
                    </div>

                    <div className="looking-banking-box looking-banking-box--style2">
                        <div className="icon">
                        <span className="icon-binoculars"></span>
                        </div>
                        <div className="select-box clearfix">
                        <p>Looking</p>
                        <select className="wide">
                            <option data-display="Personal Banking">Personal Banking</option>
                            <option value="1">Business Banking</option>
                            <option value="2">Personal Banking 01</option>
                            <option value="3">Personal Banking 02</option>
                            <option value="4">Personal Banking 03</option>
                        </select>
                        </div>
                    </div>
                    </div>

                    <div className="main-menu-style2-right">
                    <div className="main-menu-box">
                        <a href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                        <i className="icon-menu"></i>
                        </a>
                        <Menu />
                    </div>

                    <div className="header-btn-one">
                        <Link href="#">Make Payment</Link>
                    </div>

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
                    </div>

                </div>
                </div>
            </div>
        </nav>
        

        <div className={`stricky-header stricky-header--style2 stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
          <div className="sticky-header__content" />
          <nav className="main-menu main-menu-style2">
            <div className="main-menu__wrapper clearfix">
                <div className="container">
                <div className="main-menu__wrapper-inner">

                    <div className="main-menu-style2-left">
                    <div className="logo-box-style2">
                        <Link href="/">
                        <img src="/assets/images/resources/logo-2.png" alt="Awesome Logo" title="" />
                        </Link>
                    </div>

                    <div className="looking-banking-box looking-banking-box--style2">
                        <div className="icon">
                        <span className="icon-binoculars"></span>
                        </div>
                        <div className="select-box clearfix">
                        <p>Looking</p>
                        <select className="wide">
                            <option data-display="Personal Banking">Personal Banking</option>
                            <option value="1">Business Banking</option>
                            <option value="2">Personal Banking 01</option>
                            <option value="3">Personal Banking 02</option>
                            <option value="4">Personal Banking 03</option>
                        </select>
                        </div>
                    </div>
                    </div>

                    <div className="main-menu-style2-right">
                    <div className="main-menu-box">
                        <a href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                        <i className="icon-menu"></i>
                        </a>
                        <Menu />
                    </div>

                    <div className="header-btn-one">
                        <Link href="#">Make Payment</Link>
                    </div>

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
