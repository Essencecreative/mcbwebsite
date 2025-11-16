'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { getNewsAndUpdates, getImageUrl } from "@/utils/api"

// Swiper options
const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 500,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    loop: true,
    // Removed pagination settings
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
    },
}

export default function WealthSecure() {
    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await getNewsAndUpdates(1, 3); // Fetch first page with 3 items
                setNewsItems(data.items || []);
            } catch (error) {
                console.error("Error fetching news and updates:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    // Style classes for different slides
    const styleClasses = ['style2', 'style3', 'style4'];

    if (loading) {
        return (
            <section className="wealth-secure-area">
                <div className="container">
                    <div className="sec-title text-center">
                        <h2>News & Updates</h2>
                        <div className="sub-title">
                            <p>Stay updated with the latest news & updates</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 text-center" style={{ padding: '50px 0' }}>
                            <p>Loading...</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (newsItems.length === 0) {
        return null; // Or return a default message
    }

    return (
        <section className="wealth-secure-area">
            <div className="container">
                <div className="sec-title text-center">
                    <h2>News & Updates</h2>
                    <div className="sub-title">
                        <p>Stay updated with the latest news & updates</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper {...swiperOptions} className="wealth-secure-carousel">
                            {newsItems.map((item, index) => (
                                <SwiperSlide key={item._id || index}>
                                    <div className={`single-wealth-secure-box ${styleClasses[index % styleClasses.length]}`}>
                                        <div className="img-box">
                                            <div className="img-box-inner">
                                                <img 
                                                    src={getImageUrl(item.image)} 
                                                    alt={item.title || "News"} 
                                                    onError={(e) => {
                                                        e.target.src = "/assets/images/resources/News-04.png";
                                                    }}
                                                />
                                            </div>
                                            <div className="inner-title">
                                                <div className="arrow-top"></div>
                                                <div className="arrow-bottom"></div>
                                                <h3>
                                                    <Link href={`/news-and-updates/${item._id}`}>{item.title}</Link>
                                                </h3>
                                                <div className="right-arrow-btn">
                                                    <Link href={`/news-and-updates/${item._id}`}>
                                                        <span className="icon-right-arrow" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-box">
                                            <p>{item.shortDescription || item.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
