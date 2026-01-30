'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { getMenuCategories, getMenuItems } from "@/utils/api";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const [menuCategories, setMenuCategories] = useState([]);
  const [menuItemsMap, setMenuItemsMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        const categories = await getMenuCategories();
        setMenuCategories(categories);

        // Fetch menu items for each category
        const itemsMap = {};
        for (const category of categories) {
          const items = await getMenuItems(category.name);
          // Group items by subcategory
          const grouped = {};
          items.forEach(item => {
            if (!grouped[item.subcategory]) {
              grouped[item.subcategory] = [];
            }
            grouped[item.subcategory].push(item);
          });
          // Sort items within each subcategory by position
          Object.keys(grouped).forEach(subcat => {
            grouped[subcat].sort((a, b) => a.position - b.position);
          });
          itemsMap[category.name] = grouped;
        }
        setMenuItemsMap(itemsMap);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

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

  // Generate stable numeric key from category name
  const getCategoryKey = (categoryName) => {
    // Convert category name to a stable numeric key
    // Using a simple hash function
    let hash = 0;
    for (let i = 0; i < categoryName.length; i++) {
      const char = categoryName.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    // Ensure positive number and avoid conflicts with static keys (1, 7, 10)
    return Math.abs(hash) + 1000;
  };

  const getSubcategoryKey = (categoryName, subcategoryName) => {
    const combined = categoryName + subcategoryName;
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash) + 2000;
  };

  const renderCategoryMenu = (category, categoryKey) => {
    const items = menuItemsMap[category.name] || {};
    const subcategories = category.subcategories || [];
    
    // If category has subcategories, render them
    if (subcategories.length > 0) {
      return (
        <li 
          key={category._id} 
          className={isActive.key == categoryKey ? "dropdown current" : "dropdown"}
        >
          <Link href="#" onClick={(e) => { e.preventDefault(); handleToggle(categoryKey); }}>
            {category.displayName}
          </Link>
          <ul style={{ display: `${isActive.key == categoryKey ? "block" : "none"}` }}>
            {subcategories.map((subcat) => {
              const subcatItems = items[subcat.name] || [];
              if (subcatItems.length === 0 && !subcat.isActive) return null;
              
              const subcatKey = getSubcategoryKey(category.name, subcat.name);
              
              return (
                <li 
                  key={subcat._id || subcat.name}
                  className={isActive.subMenuKey == subcatKey ? "dropdown current" : "dropdown"}
                >
                  <Link href="#" onClick={(e) => { e.preventDefault(); handleToggle(categoryKey, subcatKey); }}>
                    {subcat.displayName}
                  </Link>
                  <ul style={{ display: `${isActive.subMenuKey == subcatKey ? "block" : "none"}` }}>
                    {subcatItems.map((item) => (
                      <li key={item._id}>
                        <Link 
                          href={`${item.route}?type=${encodeURIComponent(item.name)}`} 
                          onClick={handleMobileMenu}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div 
                    className={isActive.subMenuKey == subcatKey ? "dropdown-btn open" : "dropdown-btn"} 
                    onClick={() => handleToggle(categoryKey, subcatKey)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
              );
            })}
          </ul>
          <div 
            className={isActive.key == categoryKey ? "dropdown-btn open" : "dropdown-btn"} 
            onClick={() => handleToggle(categoryKey)}
          >
            <span className="fa fa-angle-right" />
          </div>
        </li>
      );
    } else {
      // Category without subcategories - render items directly
      const allItems = Object.values(items).flat().sort((a, b) => a.position - b.position);
      
      return (
        <li 
          key={category._id} 
          className={isActive.key == categoryKey ? "dropdown current" : "dropdown"}
        >
          <Link href="#" onClick={(e) => { e.preventDefault(); handleToggle(categoryKey); }}>
            {category.displayName}
          </Link>
          <ul style={{ display: `${isActive.key == categoryKey ? "block" : "none"}` }}>
            {allItems.map((item) => (
              <li key={item._id}>
                <Link 
                  href={`${item.route}?type=${encodeURIComponent(item.name)}`} 
                  onClick={handleMobileMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div 
            className={isActive.key == categoryKey ? "dropdown-btn open" : "dropdown-btn"} 
            onClick={() => handleToggle(categoryKey)}
          >
            <span className="fa fa-angle-right" />
          </div>
        </li>
      );
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
                src="/assets/images/resources/logo-1.svg"
                alt="Mobile Logo"
                style={{ 
                  width: 150, 
                  height: 'auto',
                  maxWidth: '100%',
                  display: 'block'
                }}
              />
            </Link>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              {/* Home */}
              <li>
                <Link href="/" onClick={handleMobileMenu}>Home</Link>
              </li>

              {/* About - Static */}
              <li className={isActive.key == 7 ? "dropdown current" : "dropdown"}>
                <Link href="#" onClick={(e) => { e.preventDefault(); handleToggle(7); }}>
                  About
                </Link>
                <ul style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                  <li><a href="#" style={{ cursor: 'default', pointerEvents: 'none', textDecoration: 'none', color: 'inherit' }}>History</a></li>
                  <li><a href="#" style={{ cursor: 'default', pointerEvents: 'none', textDecoration: 'none', color: 'inherit' }}>Mission, Vision & Values</a></li>
                  <li><Link href="/board-of-directors" onClick={handleMobileMenu}>Board of Directors</Link></li>
                  <li><Link href="/team" onClick={handleMobileMenu}>Management</Link></li>
                  <li><Link href="/faq" onClick={handleMobileMenu}>FAQ</Link></li>
                </ul>
                <div 
                  className={isActive.key == 7 ? "dropdown-btn open" : "dropdown-btn"} 
                  onClick={() => handleToggle(7)}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* Dynamic Menu Categories */}
              {!loading && menuCategories.map((category) => {
                const categoryKey = getCategoryKey(category.name);
                return renderCategoryMenu(category, categoryKey);
              })}

              {/* Investors - Static */}
              <li className={isActive.key == 10 ? "dropdown current" : "dropdown"}>
                <Link href="#" onClick={(e) => { e.preventDefault(); handleToggle(10); }}>
                  Investors
                </Link>
                <ul style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                  <li><Link href="/investor-news" onClick={handleMobileMenu}>Investor News</Link></li>
                  <li><Link href="/annual-general-meeting" onClick={handleMobileMenu}>Annual General Meeting</Link></li>
                  <li><Link href="/financial-reports" onClick={handleMobileMenu}>Financial Reports</Link></li>
                  <li><Link href="/tarif-guide" onClick={handleMobileMenu}>Tarif Guide</Link></li>
                  <li><Link href="/shareholding-structure" onClick={handleMobileMenu}>Shareholding Structure</Link></li>
                  <li><Link href="/share-price" onClick={handleMobileMenu}>Share Price</Link></li>
                  <li><Link href="/investors-relation-contect" onClick={handleMobileMenu}>Investors Relation Contact</Link></li>
                </ul>
                <div 
                  className={isActive.key == 10 ? "dropdown-btn open" : "dropdown-btn"} 
                  onClick={() => handleToggle(10)}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* Contact */}
              <li>
                <Link href="/contact" onClick={handleMobileMenu}>Contact</Link>
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
