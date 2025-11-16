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
                <li className="scrollToLink">
                    <Link href="#home" onClick={handleMobileMenu}>Home</Link>
                </li>
                <li className="scrollToLink">
                    <Link href="#about" onClick={handleMobileMenu}>About</Link>
                </li>
                <li className="scrollToLink">
                    <Link href="#service" onClick={handleMobileMenu}>Services</Link>
                </li>
                <li className="scrollToLink">
                    <Link href="#news" onClick={handleMobileMenu}>News</Link>
                </li>
                <li className="scrollToLink">
                    <Link href="#contact" onClick={handleMobileMenu}>Get In Touch</Link>
                </li>
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                    <Link href="/#" onClick={handleMobileMenu}>Apply Now</Link>
                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/" onClick={handleMobileMenu}>Home Page 01</Link></li>
                        <li><Link href="/index-2" onClick={handleMobileMenu}>Home Page 02</Link></li>
                        <li><Link href="/index-3" onClick={handleMobileMenu}>Home Page 03</Link></li>
                    </ul>
                    <div className={isActive.key == 9 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}>
                        <span className="fa fa-angle-right" />
                    </div>
                </li>
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