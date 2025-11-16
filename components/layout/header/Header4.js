import Link from "next/link"
import Menu from "../Menu2"
import MobileMenu from "../MobileMenu2"
export default function Header4({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (

      <header className={`main-header main-header-style1 ${scroll ? "fixed-header" : ""}`}>
        <div className="main-header-style1-top">
            <div className="auto-container">
                <div className="outer-box">
                    {/* Start Main Header Style1 Top Left */}
                    <div className="main-header-style1-top__left">
                        <div className="looking-banking-box">
                            <div className="inner-title">
                                <span className="icon-binoculars"></span>
                                <p>Looking</p>
                            </div>
                            <div className="select-box clearfix">
                                <select className="wide" defaultValue="en">
                                    <option data-display="Personal Banking">Personal Banking</option>
                                    <option value="1">Business Banking</option>
                                    <option value="2">Personal Banking 01</option>
                                    <option value="3">Personal Banking 02</option>
                                    <option value="4">Personal Banking 03</option>
                                </select>
                            </div>
                        </div>
                        <div className="nearest-branch">
                            <span className="icon-map"></span>
                            <a href="#">Find Nearest Branch</a>
                        </div>
                    </div>
                    {/* End Main Header Style1 Top Left */}

                    {/* Start Main Header Style1 Top Right */}
                    <div className="main-header-style1-top__right">
                        <div className="header-menu-style1">
                            <ul>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Faq’s</a></li>
                                <li><a href="#">Offers</a></li>
                                <li><a href="#">Calendar</a></li>
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
                    {/* End Main Header Style1 Top Right */}
                </div>
            </div>
        </div>
        <nav className="main-menu main-menu-style1">
            <div className="main-menu__wrapper clearfix">
                <div className="container">
                    <div className="main-menu__wrapper-inner">

                        <div className="main-menu-style1-left">
                            <div className="logo-box-style1">
                                <Link href="/">
                                    <img src="/assets/images/resources/logo-1.png" alt="Awesome Logo" title="" />
                                </Link>
                            </div>

                            <div className="main-menu-box">
                                <a href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                    <i className="icon-menu"></i>
                                </a>

                                <Menu />
                            </div>
                        </div>

                        <div className="main-menu-style1-right">
                            <div className="header-btn-one">
                                <Link href="#">
                                    <span className="icon-home-button"></span>Login
                                </Link>
                                <Link className="style2" href="#">
                                    <span className="icon-payment"></span>Open an Account
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
        <div className="main-header-style1-bottom">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="update-box">
                        <div className="inner-title">
                            <span className="icon-megaphone"></span>
                            <h4>Updates:</h4>
                        </div>
                        <div className="text">
                            <p>Get up to 4%* on our Savings Account Balances with Finbank.</p>
                            <a href="#"><span className="icon-chevron"></span>More Details</a>
                        </div>
                    </div>
                    <div className="slogan-box">
                        <p>Dear Customer, We have launched Video KYC facility for new customers to open savings accounts.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
          <div className="sticky-header__content" />
          <nav className="main-menu">
              <div className="main-menu__wrapper clearfix">
                  <div className="container">
                      <div className="main-menu__wrapper-inner">

                          <div className="main-menu-style1-left">
                              <div className="logo-box-style1">
                                  <Link href="/">
                                      <img src="/assets/images/resources/logo-1.png" alt="Awesome Logo" title="" />
                                  </Link>
                              </div>

                              <div className="main-menu-box">
                                  <a href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                      <i className="icon-menu"></i>
                                  </a>

                                  <Menu />
                              </div>
                          </div>

                          <div className="main-menu-style1-right">
                              <div className="header-btn-one">
                                  <Link href="#">
                                      <span className="icon-home-button"></span>Login
                                  </Link>
                                  <Link className="style2" href="#">
                                      <span className="icon-payment"></span>Open an Account
                                  </Link>
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