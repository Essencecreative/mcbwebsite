'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import Layout from "@/components/layout/Layout"
import { getOpportunities } from "@/utils/api"

export default function OpportunitiesPage() {
    const [opportunities, setOpportunities] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchOpportunities = async () => {
            try {
                setLoading(true)
                const data = await getOpportunities('job')
                setOpportunities(data || [])
            } catch (err) {
                console.error("Error fetching opportunities:", err)
                setError(err.message || "Failed to load opportunities")
            } finally {
                setLoading(false)
            }
        }

        fetchOpportunities()
    }, [])

    const getDocumentUrl = (documentUrl) => {
        if (!documentUrl) return '#'
        if (documentUrl.startsWith('http')) return documentUrl
        return documentUrl
    }

    return (
        <>
            <Layout backgroundImage="/assets/images/backgrounds/Investor-Banner.png" headerStyle={1} footerStyle={1} breadcrumbTitle="Opportunities" breadcrumbSubTitle="Job Vacancies" breadcrumbLink="/opportunities">
                <div>
                    {/*Blog Page Start*/}
                    <section className="blog-page-three">
                        <div className="container">
                            {loading ? (
                                <div className="row">
                                    <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                                        <p>Loading opportunities...</p>
                                    </div>
                                </div>
                            ) : error ? (
                                <div className="row">
                                    <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                                        <p className="text-red-600">{error}</p>
                                    </div>
                                </div>
                            ) : opportunities.length === 0 ? (
                                <div className="row">
                                    <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                                        <p>No job vacancies available at the moment.</p>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="blog-page-content-box">
                                                {opportunities.map((item, index) => (
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
                                                                        <ul className="meta-info">
                                                                            <li>
                                                                                <span className="icon-calendar"></span>
                                                                                {new Date(item.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    {item.documentUrl && (
                                                                        <div className="share-btn">
                                                                            <a
                                                                                href={getDocumentUrl(item.documentUrl)}
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
