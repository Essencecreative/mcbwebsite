'use client'
import Link from "next/link"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Layout from "@/components/layout/Layout"
import { getInvestorCategories, getImageUrl } from "@/utils/api"

function ReportsContent() {
    const searchParams = useSearchParams()
    const type = searchParams.get("type") || "Financial Report"
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const fetchItems = async () => {
            try {
                setLoading(true)
                // Use 'reports' as the high-level category
                const data = await getInvestorCategories('reports', currentPage, 9, type)
                setItems(data.items || [])
                setTotalPages(data.totalPages || 1)
            } catch (error) {
                console.error("Error fetching reports:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchItems()
    }, [currentPage, type])

    const getPdfUrl = (pdfUrl) => {
        if (!pdfUrl) return '#'
        if (pdfUrl.startsWith('http')) return pdfUrl
        return getImageUrl(pdfUrl)
    }

    const titleMap = {
        "Financial Report": "Financial Reports",
        "Annual Report": "Annual Reports",
        "Market Disclosure": "Market Disclosures"
    }

    const displayTitle = titleMap[type] || type

    return (
        <Layout backgroundImage="/assets/images/backgrounds/Investor-Banner.png" headerStyle={1} footerStyle={1} breadcrumbTitle={displayTitle} breadcrumbSubTitle={displayTitle} breadcrumbLink="/reports">
            <div>
                <section className="blog-page-three">
                    <div className="container">
                        {loading ? (
                            <div className="row">
                                <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                                    <p>Loading...</p>
                                </div>
                            </div>
                        ) : items.length === 0 ? (
                            <div className="row">
                                <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                                    <p>No {displayTitle.toLowerCase()} found.</p>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="blog-page-content-box">
                                            {items.map((item, index) => (
                                                <div key={item._id || index} className="single-blog-style1 single-blog-style1--style3">
                                                    <div className="text-colum">
                                                        <div className="text-holder">
                                                            <h3 className="blog-title">
                                                                {item.title}
                                                            </h3>
                                                            <div className="text">
                                                                <p>{item.description}</p>
                                                            </div>
                                                            <div className="bottom">
                                                                <div className="meta-box">
                                                                    <ul className="meta-info"></ul>
                                                                </div>
                                                                {item.pdfUrl && (
                                                                    <div className="share-btn">
                                                                        <a
                                                                            href={getPdfUrl(item.pdfUrl)}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="download-btn"
                                                                            style={{ color: 'white' }}
                                                                        >
                                                                            Download
                                                                        </a>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {totalPages > 1 && (
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <ul className="styled-pagination clearfix">
                                                {currentPage > 1 && (
                                                    <li className="arrow prev">
                                                        <Link href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(currentPage - 1) }}>
                                                            <span className="fas fa-arrow-left left"></span>Prev
                                                        </Link>
                                                    </li>
                                                )}
                                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                                    <li key={page} className={currentPage === page ? 'active' : ''}>
                                                        <Link href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(page) }}>
                                                            {page}
                                                        </Link>
                                                    </li>
                                                ))}
                                                {currentPage < totalPages && (
                                                    <li className="arrow next">
                                                        <Link href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(currentPage + 1) }}>
                                                            Next<span className="fas fa-arrow-right right"></span>
                                                        </Link>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default function Reports() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ReportsContent />
        </Suspense>
    )
}
