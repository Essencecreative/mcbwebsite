"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ReactModalVideo from "react-modal-video";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import "react-modal-video/css/modal-video.css"; // Import Modal Video styles
import { getCarousels, getImageUrl } from "@/utils/api";

// Swiper options
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  pagination: {
    clickable: true,
    el: "#main-slider-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  const [carouselItems, setCarouselItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarousels = async () => {
      try {
        const items = await getCarousels();
        setCarouselItems(items);
      } catch (error) {
        console.error("Error fetching carousels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarousels();
  }, []);

  // If no carousel items, show empty state or fallback
  if (loading) {
    return (
      <section className="main-slider main-slider-style1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center" style={{ padding: '100px 0' }}>
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (carouselItems.length === 0) {
    return null; // Or return a default banner
  }

  return (
    <section className="main-slider main-slider-style1">
      <Swiper {...swiperOptions} className="thm-swiper__slider">
        <div className="swiper-wrapper">
          {carouselItems.map((item, index) => (
            <SwiperSlide key={item._id || index} className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage: `url(${getImageUrl(item.image)})`,
                }}
              />
              <div
                className="main-slider-style1__shape1"
                style={{
                  backgroundImage:
                    "url(/assets/images/shapes/slider-1-shape-1.png)",
                }}
              />
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider-content">
                      <div className="main-slider-content__inner">
                        <div className="big-title">
                          <h2>
                            <br />
                            {item.title}
                          </h2>
                        </div>
                        <div className="text">
                          <p>
                            {item.description}
                          </p>
                        </div>
                        {item.buttonTitle && item.link && (
                          <div className="btns-box">
                            <Link className="btn-one" href={item.link}>
                              <span className="txt">{item.buttonTitle}</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      {/* Navigation buttons */}
      <div className="main-slider__nav">
        <div
          className="swiper-button-prev"
          id="main-slider__swiper-button-prev"
        >
          <i className="icon-chevron left" />
        </div>
        <div
          className="swiper-button-next"
          id="main-slider__swiper-button-next"
        >
          <i className="icon-chevron right" />
        </div>
      </div>
      {/* Modal for video */}
      <ReactModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="YOUR_VIDEO_ID" // replace with your actual video ID
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
}
