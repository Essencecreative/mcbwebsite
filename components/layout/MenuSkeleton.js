"use client";
import Link from "next/link";

export default function MenuSkeleton() {
    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">About</Link>
                    <ul>
                        <li><Link href="/history">History</Link></li>
                        <li><Link href="/about">Mission, Vision & Values</Link></li>
                        <li><Link href="/board-of-directors">Board of Directors</Link></li>
                        <li><Link href="/team">Management</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul>
                </li>

                {/* Skeleton loaders for 5 menu items */}
                {[...Array(5)].map((_, index) => (
                    <li key={`skeleton-${index}`} className="dropdown">
                        <div 
                            className="skeleton-menu-item"
                            style={{
                                display: 'inline-block',
                                height: '20px',
                                width: '100px',
                                backgroundColor: '#e0e0e0',
                                borderRadius: '4px',
                                animation: 'pulse 1.5s ease-in-out infinite',
                                margin: '0 10px'
                            }}
                        />
                        <ul>
                            {[...Array(3)].map((_, subIndex) => (
                                <li key={`skeleton-sub-${subIndex}`}>
                                    <div 
                                        className="skeleton-submenu-item"
                                        style={{
                                            display: 'block',
                                            height: '16px',
                                            width: '120px',
                                            backgroundColor: '#f0f0f0',
                                            borderRadius: '4px',
                                            animation: 'pulse 1.5s ease-in-out infinite',
                                            animationDelay: `${subIndex * 0.1}s`,
                                            margin: '5px 0'
                                        }}
                                    />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}

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

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }
            `}</style>
        </>
    );
}

