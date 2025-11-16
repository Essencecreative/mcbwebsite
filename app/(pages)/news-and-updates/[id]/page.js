'use client'

import Layout from "@/components/layout/Layout"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { getNewsAndUpdate, getImageUrl } from "@/utils/api"

export default function NewsSingle() {
    const params = useParams()
    const id = params?.id
    const [newsItem, setNewsItem] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            if (!id) return

            try {
                setLoading(true)
                const data = await getNewsAndUpdate(id)
                setNewsItem(data)
            } catch (error) {
                console.error("Error fetching news item:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchNews()
    }, [id])

    const formatDate = (dateString) => {
        if (!dateString) return ''
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }

    if (loading) {
        return (
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="News & Updates">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center" style={{ padding: '100px 0' }}>
                            <p>Loading...</p>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

    if (!newsItem) {
        return (
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="News & Updates">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center" style={{ padding: '100px 0' }}>
                            <p>News item not found.</p>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={newsItem.title || "News & Updates"}>
                <div>
                    {/*Blog Page Start*/}
                    <section className="blog-page-three">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="blog-details-box">
                                       
                                        <div className="blog-details-text-box">
                                          
                                            {newsItem.content && (
                                                <div 
                                                    className="blog-details-text-2" 
                                                    style={{ marginTop: '30px' }}
                                                    dangerouslySetInnerHTML={{ __html: newsItem.content }}
                                                />
                                            )}
                                            {newsItem.createdAt && (
                                                <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
                                                    <p style={{ color: '#999', fontSize: '14px' }}>
                                                        Published on: {formatDate(newsItem.createdAt)}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Blog Page End*/}
                </div>
            </Layout>
        </>
    )
}

