"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getMenuCategories, getMenuItems } from "@/utils/api";

export default function Menu() {
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

    const renderMegamenu = (category) => {
        const items = menuItemsMap[category.name] || {};
        const subcategories = category.subcategories || [];
        
        // Group subcategories into columns (3 columns max)
        const columns = [];
        const itemsPerColumn = Math.ceil(subcategories.length / 3);
        
        for (let i = 0; i < subcategories.length; i += itemsPerColumn) {
            columns.push(subcategories.slice(i, i + itemsPerColumn));
        }

        return (
            <li className="dropdown megamenu" key={category._id}>
                <Link href="/">{category.displayName}</Link>
                <ul>
                    <li>
                        <div className="megamenu-content-box">
                            <div className="container">
                                <div className="megamenu-content-box__inner">
                                    <div className="row">
                                        {columns.map((column, colIndex) => (
                                            <div key={colIndex} className="col-lg-4">
                                                {column.map((subcat) => {
                                                    const subcatItems = items[subcat.name] || [];
                                                    if (subcatItems.length === 0 && !subcat.isActive) return null;
                                                    
                                                    return (
                                                        <ul
                                                            key={subcat._id || subcat.name}
                                                            style={{
                                                                borderRight: colIndex < columns.length - 1 ? '1px solid #eee' : 'none',
                                                                minHeight: '100%'
                                                            }}
                                                        >
                                                            <li style={{ fontWeight: 'bold', color: '#E97927', textDecoration: 'none' }}>
                                                                {subcat.displayName}
                                                            </li>
                                                            {subcatItems.map((item) => (
                                                                <li key={item._id} className="mega-list-item">
                                                                    <Link href={`${item.route}?type=${encodeURIComponent(item.name)}`}>
                                                                        {item.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    );
                                                })}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        );
    };

    const renderDropdown = (category) => {
        const items = menuItemsMap[category.name] || {};
        const allItems = Object.values(items).flat().sort((a, b) => a.position - b.position);

        return (
            <li className="dropdown" key={category._id}>
                <Link href="#">{category.displayName}</Link>
                <ul>
                    {allItems.map((item) => (
                        <li key={item._id}>
                            <Link href={`${item.route}?type=${encodeURIComponent(item.name)}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
        );
    };

    if (loading) {
        return (
            <ul className="main-menu__list">
                <li><Link href="/">Home</Link></li>
                <li className="dropdown">
                    <Link href="#">About</Link>
                    <ul>
                        <li><Link href="/history" style={{ cursor: 'pointer', pointerEvents: 'auto' }}>History</Link></li>
                        <li><Link href="/team" style={{ cursor: 'pointer', pointerEvents: 'auto' }}>Mission, Vision & Values</Link></li>
                        <li><Link href="/board-of-directors">Board of Directors</Link></li>
                        <li><Link href="/team">Management</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul>
                </li>
            </ul>
        );
    }

    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">About</Link>
                    <ul>
                        <li><Link href="/history" style={{ cursor: 'pointer', pointerEvents: 'auto' }}>History</Link></li>
                        <li><Link href="/team" style={{ cursor: 'pointer', pointerEvents: 'auto' }}>Mission, Vision & Values</Link></li>
                        <li><Link href="/board-of-directors">Board of Directors</Link></li>
                        <li><Link href="/team">Management</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul>
                </li>

                {/* Dynamic Menu Categories */}
                {menuCategories.map((category) => {
                    // Check if category has subcategories (megamenu) or just items (dropdown)
                    const hasSubcategories = category.subcategories && category.subcategories.length > 0;
                    return hasSubcategories ? renderMegamenu(category) : renderDropdown(category);
                })}

                {/* Investors - Keep static as requested */}
                <li className="dropdown">
                    <Link href="#">Investors</Link>
                    <ul style={{ left: '-100%' }}>
                        <li><Link href="/investor-news">Investor News</Link></li>
                        <li><Link href="/annual-general-meeting">Annual General Meeting</Link></li>
                        <li><Link href="/financial-reports">Financial Reports</Link></li>
                        <li><Link href="/tarif-guide">Tarif Guide</Link></li>
                        <li><Link href="/shareholding-structure">Shareholding Structure</Link></li>
                        <li><Link href="/share-price">Share Price</Link></li>
                        <li><Link href="/investors-relation-contect">Investors Relation Contact</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    );
}
