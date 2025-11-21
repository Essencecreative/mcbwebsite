'use client'

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"
import { getInvestorNews, getImageUrl } from "@/utils/api"

export default function InvestorNews() {
    const [newsItems, setNewsItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true)
                const data = await getInvestorNews(currentPage, 9) // 9 items per page
                setNewsItems(data.items || [])
                setTotalPages(data.totalPages || 1)
            } catch (error) {
                console.error("Error fetching investor news:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchNews()
    }, [currentPage])

    const formatDate = (dateString) => {
        if (!dateString) return ''
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }

    return (
        <>
            <Layout 
                headerStyle={1} 
                footerStyle={1} 
                breadcrumbTitle="Investor News" 
                breadcrumbSubTitle="Investor News" 
                breadcrumbLink="/investor-news"      
                backgroundImage="/assets/images/backgrounds/Investor-Banner.png"
            >
                <div>
                    {/*Blog Page Start*/}
                    <section className="blog-page-one">
                        <div className="container">
                            {loading ? (
                                <div className="row">
                                    <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                                        <p>Loading...</p>
                                    </div>
                                </div>
                            ) : newsItems.length === 0 ? (
                                <div className="row">
                                    <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                                        <p>No investor news found.</p>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="row">
                                        {newsItems.map((item, index) => (
                                            <div key={item._id || index} className="col-xl-4 col-lg-4">
                                                <div className="single-blog-style1 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                                    <div className="img-holder">
                                                        <div className="inner">
                                                            <img 
                                                                src={getImageUrl(item.image)} 
                                                                alt={item.title}
                                                                onError={(e) => {
                                                                    e.target.src = "/assets/images/resources/News-01.png"
                                                                }}
                                                            />
                                                            <div className="overlay-icon">
                                                                <Link href={`/investor-news/${item._id}`}>
                                                                    <span className="icon-right-arrow"></span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="category-date-box">
                                                            <div className="category">
                                                                <span className="icon-play-button-1"></span>
                                                                <h5>Investor News</h5>
                                                            </div>
                                                            <div className="date">
                                                                <h5>{formatDate(item.createdAt)}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-holder">
                                                        <h3 className="blog-title">
                                                            <Link href={`/investor-news/${item._id}`}>
                                                                {item.title}
                                                            </Link>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Pagination - You can implement this based on your API response */}
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
                    {/*Blog Page End*/}
                </div>
            </Layout>
        </>
    )
}
