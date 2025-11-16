'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      {/* End Mobile Menu */}
      <div className="mobile-nav__wrapper">
        <div
            className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        />
      {/* /.mobile-nav__overlay */}
      <div className="mobile-nav__content">
        <span
          className="mobile-nav__close mobile-nav__toggler"
          onClick={handleMobileMenu}
        >
          <i className="fas fa-plus" />
        </span>
        <div className="logo-box">
          <Link href="/" aria-label="logo image">
            <img
              src="/assets/images/resources/mobile-nav-logo.png"
              alt="Mobile Logo"
            />
          </Link>
        </div>
        {/* /.logo-box */}
        <div className="mobile-nav__container">
            <ul className="main-menu__list">
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                    <Link href="/#" onClick={handleMobileMenu}>Home</Link>
                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li>
                            <div className="megamenu-content-box">
                                <div className="container">
                                    <div className="megamenu-content-box__inner">
                                        <div className="row">

                                            {/*Start Home Showcase Item */}
                                            <div className="col-lg-4">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-1.jpg"
                                                            alt="" />
                                                        <div className="home-showcase__buttons">
                                                            <Link href="/"
                                                                className="btn-one home-showcase__buttons__item top">
                                                                <span className="txt" onClick={handleMobileMenu}>Multi
                                                                    Page</span>
                                                            </Link>
                                                            <Link href="/index-one-page"
                                                                className="btn-one home-showcase__buttons__item">
                                                                <span className="txt" onClick={handleMobileMenu}>One
                                                                    Page</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">
                                                        Home Page One
                                                    </h3>
                                                </div>
                                            </div>
                                            {/*End Home Showcase Item */}

                                            {/*Start Home Showcase Item */}
                                            <div className="col-lg-4">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-2.jpg"
                                                            alt="" />
                                                        <div className="home-showcase__buttons">
                                                            <Link href="/index-2"
                                                                className="btn-one home-showcase__buttons__item top">
                                                                <span className="txt" onClick={handleMobileMenu}>Multi
                                                                    Page</span>
                                                            </Link>
                                                            <Link href="/index-2-one-page"
                                                                className="btn-one home-showcase__buttons__item">
                                                                <span className="txt" onClick={handleMobileMenu}>One
                                                                    Page</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">
                                                        Home Page Two
                                                    </h3>
                                                </div>
                                            </div>
                                            {/*End Home Showcase Item */}

                                            {/*Start Home Showcase Item */}
                                            <div className="col-lg-4">
                                                <div className="home-showcase__item">
                                                    <div className="home-showcase__image">
                                                        <img src="assets/images/home-showcase/home-showcase-1-3.jpg"
                                                            alt="" />
                                                        <div className="home-showcase__buttons">
                                                            <Link href="/index-3"
                                                                className="btn-one home-showcase__buttons__item top">
                                                                <span className="txt" onClick={handleMobileMenu}>Multi
                                                                    Page</span>
                                                            </Link>
                                                            <Link href="/index-3-one-page"
                                                                className="btn-one home-showcase__buttons__item">
                                                                <span className="txt" onClick={handleMobileMenu}>One
                                                                    Page</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="home-showcase__title">
                                                        Home Page Three
                                                    </h3>
                                                </div>
                                            </div>
                                            {/*End Home Showcase Item */}

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </li>
                    </ul>
                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}>
                        <span className="fa fa-angle-right" />
                    </div>
                </li>
                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                    <Link href="/#">Services</Link>
                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li className={isActive.subMenuKey == 4 ? "dropdown current" : "dropdown"}>
                            <Link href="/">Accounts</Link>
                            <ul style={{ display: `${isActive.subMenuKey == 4 ? "block" : "none"}` }}>
                              <li><Link href="/accounts" onClick={handleMobileMenu}>All Accounts</Link></li>
                              <li><Link href="/account-savings" onClick={handleMobileMenu}>Savings Account</Link></li>
                              <li><Link href="/account-current" onClick={handleMobileMenu}>Current Account</Link></li>
                              <li><Link href="/account-fixed-dep" onClick={handleMobileMenu}>Fixed Deposit Account</Link></li>
                              <li><Link href="/account-salary" onClick={handleMobileMenu}>Salary Account</Link></li>
                              <li><Link href="/account-recuring-dep" onClick={handleMobileMenu}>Recurring Deposit Account</Link></li>
                              <li><Link href="/account-nri" onClick={handleMobileMenu}>NRI Account</Link></li>
                            </ul>
                            <div className={isActive.subMenuKey == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3, 4)}><span className="fa fa-angle-right" /></div>
                        </li>
                        <li className={isActive.subMenuKey == 5 ? "dropdown current" : "dropdown"}>
                            <Link href="/">Cards</Link>
                            <ul style={{ display: `${isActive.subMenuKey == 5 ? "block" : "none"}` }}>
                              <li><Link href="/cards" onClick={handleMobileMenu}>Our All Cards</Link></li>
                              <li><Link href="/cards-business" onClick={handleMobileMenu}>Business</Link></li>
                              <li><Link href="/cards-cashback" onClick={handleMobileMenu}>Cashback</Link></li>
                              <li><Link href="/cards-law-interest" onClick={handleMobileMenu}>Low Interest</Link></li>
                              <li><Link href="/cards-rewards" onClick={handleMobileMenu}>Rewards</Link></li>
                              <li><Link href="/cards-secured" onClick={handleMobileMenu}>Secured</Link></li>
                              <li><Link href="/cards-travel-hotel" onClick={handleMobileMenu}>Travel & Hotel</Link></li>
                            </ul>
                            <div className={isActive.subMenuKey == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3, 5)}><span className="fa fa-angle-right" /></div>
                        </li>
                        <li className={isActive.subMenuKey == 6 ? "dropdown current" : "dropdown"}>
                            <Link href="/">Loans</Link>
                            <ul style={{ display: `${isActive.subMenuKey == 6 ? "block" : "none"}` }}>
                              <li><Link href="/loan-home" onClick={handleMobileMenu}>Home Loan</Link></li>
                              <li><Link href="/loan-personal" onClick={handleMobileMenu}>Personal Loan</Link></li>
                              <li><Link href="/loan-vehicle" onClick={handleMobileMenu}>Vehicle Loan</Link></li>
                              <li><Link href="/loan-education" onClick={handleMobileMenu}>Education Loan</Link></li>
                              <li><Link href="/loan-gold" onClick={handleMobileMenu}>Gold Loan</Link></li>
                            </ul>
                            <div className={isActive.subMenuKey == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3, 6)}><span className="fa fa-angle-right" /></div>
                        </li>
                    </ul>
                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 7 ? "dropdown current" : "dropdown"}>
                    <Link href="/#" onClick={handleMobileMenu}>About</Link>
                    <ul style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                        <li><Link href="/about" onClick={handleMobileMenu}>About Us</Link></li>
                        <li><Link href="/team" onClick={handleMobileMenu}>Board of Directors</Link></li>
                        <li><Link href="/careers" onClick={handleMobileMenu}>Careers</Link></li>
                        <li><Link href="/careers-details" onClick={handleMobileMenu}>Career Detail</Link></li>
                        <li><Link href="/faq" onClick={handleMobileMenu}>Faq’s</Link></li>
                        <li><Link href="/testimonials" onClick={handleMobileMenu}>Testimonials</Link></li>
                        <li><Link href="/404" onClick={handleMobileMenu}>404 Error</Link></li>
                    </ul>
                    <div className={isActive.key == 7 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(7)}>
                        <span className="fa fa-angle-right" />
                    </div>
                </li>

                <li className={isActive.key == 8 ? "dropdown current" : "dropdown"}>
                    <Link href="/#" onClick={handleMobileMenu}>News</Link>
                    <ul style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                        <li><Link href="/blog" onClick={handleMobileMenu}>Grid View</Link></li>
                        <li><Link href="/blog-2" onClick={handleMobileMenu}>List View</Link></li>
                        <li><Link href="/blog-3" onClick={handleMobileMenu}>Large Image</Link></li>
                        <li><Link href="/blog-single" onClick={handleMobileMenu}>Single Post</Link></li>
                    </ul>
                    <div className={isActive.key == 8 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(8)}>
                        <span className="fa fa-angle-right" />
                    </div>
                </li>
                <li className={isActive.key == 9 ? "dropdown current" : "dropdown"}>
                    <Link href="/#" onClick={handleMobileMenu}>Apply Now</Link>
                    <ul style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                        <li><Link href="/loan-home" onClick={handleMobileMenu}>Home Loan</Link></li>
                        <li><Link href="/loan-personal" onClick={handleMobileMenu}>Personal Loan</Link></li>
                        <li><Link href="/loan-vehicle" onClick={handleMobileMenu}>Vehicle Loan</Link></li>
                        <li><Link href="/loan-education" onClick={handleMobileMenu}>Education Loan</Link></li>
                        <li><Link href="/loan-gold" onClick={handleMobileMenu}>Gold Loan</Link></li>
                    </ul>
                    <div className={isActive.key == 9 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(9)}>
                        <span className="fa fa-angle-right" />
                    </div>
                </li>
                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
            </ul>

        </div>
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope" />
            <a href="mailto:info@example.com">info@example.com</a>
          </li>
          <li>
            <i className="fa fa-phone-alt" />
            <a href="tel:123456789">444 000 777 66</a>
          </li>
        </ul>
        {/* /.mobile-nav__contact */}
        <div className="mobile-nav__social">
          <a href="#" className="fab fa-twitter" />
          <a href="#" className="fab fa-facebook-square" />
          <a href="#" className="fab fa-pinterest-p" />
          <a href="#" className="fab fa-instagram" />
        </div>
        {/* /.mobile-nav__social */}
      </div>
      {/* /.mobile-nav__content */}
    </div>
    {/* End Mobile Menu */}

      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
};
export default MobileMenu;
