'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="News Large View">
                <div>

                    {/*Blog Page Start*/}
                    <section className="blog-page-three">
                        <div className="container">
                            <div className="row">
                            <div className="col-xl-12">
                            <div className="blog-details-box">
                                <div className="blog-details-text-box">
                                    <h2 className="blog-details-title">
                                        Board Approves Capital Raise of<br /> Rs. 2000 Crores
                                    </h2>
                                    <div className="blog-details-quote-box">
                                        <div className="icon">
                                            <span className="icon-quote"></span>
                                        </div>
                                        <div className="text">
                                            <h3>Don’t just save money, make more money with a checking account from us.</h3>
                                            <h6>- Franklin</h6>
                                        </div>
                                    </div>
                                    <div className="blog-details-text-1">
                                        <p>In a free hour, when our power of choice is untrammelled and when nothing prevents claims of duty obligations of business it will frequently occur our power of choice is untrammelled when nothing prevents our being able to do what we like best, every pleasure be welcomed and every pain avoided in certain circumstances and owings to the claims of duty or the obligations off business it will frequently occurs that pleasures have to be repudiated and annoyances accepted.</p>
                                    </div>
                                    <div className="blog-details-text-2">
                                        <p>Our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted holds in these matters to this principle of selection.</p>
                                    </div>
                                    <div className="blog-details-text-3">
                                        <p>Nothing prevents claims duty obligations of business will frequently occur powerchoice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain but in certain chooses to enjoy a pleasure that has no annoying consequences.</p>
                                    </div>
                                    <div className="blog-details-text-4">
                                        <p>Prevents our being able to do what we like best every pleasure is to be welcomed every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations.</p>
                                    </div>
                                    <div className="blog-details-text-5">
                                        <h3>Trust Your Money With Us</h3>
                                        <p>Frequently occur our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided all in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures but have to be repudiated and annoyances accepted holds in these matters to this principle.</p>
                                    </div>
                                    <div className="blog-details-text-6">
                                        <div className="inner-title">
                                            <div className="dot-box"></div>
                                            <h3>The Bank That’s Always Open</h3>
                                        </div>
                                        <p>Every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations.</p>
                                        <ul>
                                            <li>Don’t just make a deposit, make an investment today</li>
                                            <li>Known for trust, honesty, and customer care</li>
                                            <li>We’re more than just someone’s ATM. We’re here for life’s big moments</li>
                                            <li>Simplify your finances</li>
                                            <li>A bank for people who want to live life better</li>
                                            <li>Because all other banks are the same</li>
                                        </ul>
                                    </div>

                                  

                             
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