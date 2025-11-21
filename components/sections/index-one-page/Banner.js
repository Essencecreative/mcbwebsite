"use client";
import Link from "next/link";
import { useState } from "react";
import ReactModalVideo from "react-modal-video";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import "react-modal-video/css/modal-video.css"; // Import Modal Video styles

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

  return (
    <section className="main-slider main-slider-style1" id="home">
      <Swiper {...swiperOptions} className="thm-swiper__slider">
        <div className="swiper-wrapper">
          {/* Slider Button Box */}
          

          {/* Start Single Swiper Slide */}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/assets/images/slides/slide-v1-1.jpg)",
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
                          Bank with the
                          <br /> Happiest Customers
                          <br /> in the World
                        </h2>
                      </div>
                      <div className="text">
                        <p>
                          On the other hand, we denounce with righteous
                          indignation
                          <br />
                          and dislike men who are so beguiled.
                        </p>
                      </div>
                      <div className="btns-box">
                        <Link className="btn-one" href="/contact">
                          <span className="txt">Make an Appointment</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* End Single Swiper Slide */}

          {/* Start Single Swiper Slide */}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/assets/images/slides/slide-v1-2.jpg)",
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
                          Banking Made
                          <br /> Easy, More Secure &<br /> More Personal
                        </h2>
                      </div>
                      <div className="text">
                        <p>
                          Their duty through weakness of will, which is the same
                          as
                          <br />
                          saying through shrinking from toil.
                        </p>
                      </div>
                      <div className="btns-box">
                        <Link className="btn-one" href="/contact">
                          <span className="txt">Make an Appointment</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* End Single Swiper Slide */}

          {/* Start Single Swiper Slide */}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/assets/images/slides/slide-v1-3.jpg)",
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
                          An Innovative
                          <br /> Framework for Your
                          <br /> Financial Solutions
                        </h2>
                      </div>
                      <div className="text">
                        <p>
                          Their duty through weakness of will, which is the same
                          as
                          <br />
                          saying through shrinking from toil.
                        </p>
                      </div>
                      <div className="btns-box">
                        <Link className="btn-one" href="/contact">
                          <span className="txt">Make an Appointment</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* End Single Swiper Slide */}
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
