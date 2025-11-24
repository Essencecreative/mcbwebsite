'use client'

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"
import { getManagementMembers, getImageUrl } from "@/utils/api"

export default function Home() {
    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const data = await getManagementMembers()
                // Members are already sorted by position from the API
                setMembers(data)
            } catch (error) {
                console.error("Error fetching management members:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchMembers()
    }, [])

    // Style delays for animation
    const delays = ['100ms', '200ms', '300ms', '400ms']

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Management Team">
                <>
                    {/*Start Team Style1 Area*/}
                    <section className="team-style1-area">
                        <div className="container">
                            <div className="sec-title text-center">
                                <h2>Our Management Team</h2>
                                <div className="sub-title">
                                    <p>Team of diverse and talented leaders.</p>
                                </div>
                            </div>
                            {loading ? (
                                <div className="row">
                                    <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                                        <p>Loading...</p>
                                    </div>
                                </div>
                            ) : members.length === 0 ? (
                                <div className="row">
                                    <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                                        <p>No management members found.</p>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {/* First member centered */}
                                    {members.length > 0 && (
                                        <div className="row" style={{ marginBottom: '40px' }}>
                                            <div className="col-xl-12 text-center">
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <div style={{ maxWidth: '300px', width: '100%' }}>
                                                        <div
                                                            className="single-team-style1 wow fadeInUp"
                                                            data-wow-delay={delays[0]}
                                                            data-wow-duration="1500ms"
                                                        >
                                                            <div className="img-holder">
                                                                <div className="inner">
                                                                    <img 
                                                                        src={getImageUrl(members[0].photo)} 
                                                                        alt={members[0].fullName}
                                                                        onError={(e) => {
                                                                            e.target.src = "/assets/images/team/Management-01.png"
                                                                        }}
                                                                    />
                                                                    {members[0].linkedinLink && (
                                                                        <div className="share-button">
                                                                            <div className="icon">
                                                                                <span className="fas fa-plus" />
                                                                            </div>
                                                                            <ul className="social-links">
                                                                                <li>
                                                                                    <Link href={members[0].linkedinLink} target="_blank" rel="noopener noreferrer">
                                                                                        <i className="fab fa-linkedin" />
                                                                                    </Link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="text-holder">
                                                                <h3>
                                                                    <Link href="#">{members[0].title}</Link>
                                                                </h3>
                                                                <h5>{members[0].fullName}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Remaining members in rows of 4 */}
                                    {members.length > 1 && (
                                        <div className="row">
                                            {members.slice(1).map((member, index) => (
                                                <div key={member._id || index + 1} className="col-xl-3 col-lg-6 col-md-6">
                                                    <div
                                                        className="single-team-style1 wow fadeInUp"
                                                        data-wow-delay={delays[(index + 1) % delays.length]}
                                                        data-wow-duration="1500ms"
                                                    >
                                                        <div className="img-holder">
                                                            <div className="inner">
                                                                <img 
                                                                    src={getImageUrl(member.photo)} 
                                                                    alt={member.fullName}
                                                                    onError={(e) => {
                                                                        e.target.src = "/assets/images/team/Management-01.png"
                                                                    }}
                                                                />
                                                                {member.linkedinLink && (
                                                                    <div className="share-button">
                                                                        <div className="icon">
                                                                            <span className="fas fa-plus" />
                                                                        </div>
                                                                        <ul className="social-links">
                                                                            <li>
                                                                                <Link href={member.linkedinLink} target="_blank" rel="noopener noreferrer">
                                                                                    <i className="fab fa-linkedin" />
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="text-holder">
                                                            <h3>
                                                                <Link href="#">{member.title}</Link>
                                                            </h3>
                                                            <h5>{member.fullName}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </section>
                    {/*End Team Style1 Area*/}
                </>
            </Layout>
        </>
    )
}
