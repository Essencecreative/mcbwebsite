'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { getProducts, getImageUrl } from "@/utils/api"

export default function DealsArea() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const items = await getProducts();
                setProducts(items);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // If no products, show empty state or return null
    if (loading) {
        return (
            <section className="deals-area">
                <div className="auto-container">
                    <div className="deals-content-box">
                        <p className="text-center" style={{ padding: '50px 0' }}>Loading...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (products.length === 0) {
        return null; // Or return a default message
    }

    return (
        <>
            <section className="deals-area">
                <div className="auto-container">
                    <div className="deals-content-box">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay={{ delay: 10000, disableOnInteraction: false }}
                            loop={products.length >= 3} // Enable loop only if there are 3 or more slides
                            speed={500}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 1 },
                                992: { slidesPerView: 1 },
                                1550: { slidesPerView: 1.4 },
                            }}
                        >
                            {products.map((product, index) => (
                                <SwiperSlide key={product._id || index}>
                                    <div className="single-deals-box">
                                        <div className="text-box">
                                            <div className="inner-title">
                                                <h4>{product.title}</h4>
                                                <h2>{product.title}</h2>
                                            </div>
                                            <p>{product.description}</p>
                                            {product.features && product.features.length > 0 && (
                                                <ul>
                                                    {product.features.map((feature, idx) => (
                                                        <li key={idx}>
                                                            <div className="inner">
                                                                <div className="icon">
                                                                    <span className="icon-checkbox-mark"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>{typeof feature === 'string' ? feature : feature.text || feature}</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {product.buttonText && product.buttonLink && (
                                                <div className="btns-box">
                                                    <Link className="btn-one" href={product.buttonLink}>
                                                        <span className="txt">{product.buttonText}</span>
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                        <div className="img-box">
                                            <div
                                                className="img-bg"
                                                style={{ backgroundImage: `url(${getImageUrl(product.image)})` }}
                                            ></div>
                                            <div className="shape-left-1"></div>
                                            <div className="shape-right-1"></div>
                                            <div className="shape-right-2"></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}
