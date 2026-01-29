"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import { getActiveHeaderUpdate } from "@/utils/api";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  const [headerUpdate, setHeaderUpdate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeaderUpdate = async () => {
      try {
        const update = await getActiveHeaderUpdate();
        setHeaderUpdate(update);
      } catch (error) {
        console.error("Error fetching header update:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeaderUpdate();
  }, []);

  return (
    <header className={`main-header main-header-style1 ${scroll ? "fixed-header" : ""}`}>
      {/* Top Bar */}
      <div className="main-header-style1-top">
        <div className="auto-container">
          <div className="outer-box">
            {/* Left: Phone + Links */}
            <div className="main-header-style1-top__left">
              <div
                className="inner-title"
                style={{
                  minWidth: 100,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <span className="icon-phone"></span>&nbsp;&nbsp;
                <p>0800 750 033</p>
              </div>

              <div className="nearest-branch">
                <a href="/contact" style={{ cursor: 'pointer', pointerEvents: 'auto' }}>Contact Us</a>
              </div>

              {/* TALL DIVIDER + News & Updates + Opportunities */}
              <div className="header-links ms-3 d-flex align-items-center">
                <span className="divider"></span>
                <a href="/news-and-updates" className="ms-2">
                  News & Updates
                </a>
                <span className="divider ms-2"></span>
                <a href="/opportunities" className="ms-2">
                  Opportunities
                </a>
              </div>
            </div>

            {/* Right: Foreign Exchange, Search, Language */}
            <div className="main-header-style1-top__right">
              <div className="header-menu-style1">
                <ul>
                  <li>
                    <Link href="/foreign-exchange">Foreign Exchange</Link>
                  </li>
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
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-menu main-menu-style1">
        <div className="main-menu__wrapper clearfix">
          <div className="container">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu-style1-left">
                <div className="logo-box-style1">
                  <Link href="/">
                    <img
                      src="/assets/images/resources/logo-1.svg"
                      alt="Awesome Logo"
                      title=""
                      style={{ width: 150 }}
                    />
                  </Link>
                </div>

                <div className="main-menu-box">
                  <a href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                    <i className="icon-menu"></i>
                  </a>
                  <Menu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Bar */}
      {headerUpdate && (
        <div className="main-header-style1-bottom">
          <div className="auto-container">
            <div className="outer-box">
              <div className="update-box">
                <div className="inner-title">
                  <span className="icon-megaphone"></span>
                  <h4>Updates:</h4>
                </div>
                <div className="text">
                  <p>{headerUpdate.text}</p>
                  {headerUpdate.link && (
                    <a href={headerUpdate.link}>
                      <span className="icon-chevron"></span>More Details
                    </a>
                  )}
                </div>
              </div>
              <div className="slogan-box">
                <p>
                  Dear Customer, We have launched Video KYC facility for new customers to open
                  savings accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Header */}
      <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
        <div className="sticky-header__content" />
        <nav className="main-menu">
          <div className="main-menu__wrapper clearfix">
            <div className="container">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu-style1-left">
                  <div className="logo-box-style1">
                    <Link href="/">
                      <img
                        src="/assets/images/resources/logo-1.svg"
                        alt="Awesome Logo"
                        title=""
                        style={{ width: 150 }}
                      />
                    </Link>
                  </div>

                  <div className="main-menu-box">
                    <a href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                      <i className="icon-menu"></i>
                    </a>
                    <Menu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <MobileMenu
        handleMobileMenu={handleMobileMenu}
        handleSidebar={handleSidebar}
        isSidebar={isSidebar}
      />

      {/* CSS for Tall Divider */}
      <style jsx>{`
        .header-links a {
          color: var(--thm-black);
          text-decoration: none;
          font-size: 16px;
          font-weight: 400;
          white-space: nowrap;
        }

        .header-links a:hover {
          color: #e97927;
          text-decoration: underline;
        }

        .nearest-branch a {
          cursor: pointer !important;
          pointer-events: auto !important;
          text-decoration: none;
        }

        .nearest-branch a:hover {
          color: #e97927;
          text-decoration: underline;
        }

        .divider {
          display: inline-block;
          width: 1px;
          height: 20px;
          background-color: #ccc;
          margin: 0 8px;
          opacity: 0.7;
          position: relative;
          top: -1px;
        }

        @media (max-width: 768px) {
          .divider {
            height: 16px;
            margin: 0 6px;
          }
          .header-links a {
            font-size: 13px;
          }
        }
      `}</style>
    </header>
  );
}