'use client'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import ModalVideo from 'react-modal-video'
import { getYoutubeVideos } from '@/utils/api'

// Static fallback videos (MCB themed)
const DEFAULT_VIDEOS = [
  {
    _id: '1',
    youtubeId: 'vfhzo499OeA',
    title: 'Mwalimu Commercial Bank – Your Trusted Banking Partner',
    description:
      'Discover how Mwalimu Commercial Bank is transforming the banking experience for teachers, professionals, and businesses across Tanzania. Explore our range of financial services designed to meet your everyday needs.',
    category: 'About Us',
  },
  {
    _id: '2',
    youtubeId: 'vfhzo499OeA',
    title: 'Mobile Banking Made Simple with Mwalimu Mobile',
    description:
      'Experience seamless, secure, and convenient banking right from your smartphone. With Mwalimu Mobile, you can transfer funds, pay bills, and manage your accounts anytime, anywhere.',
    category: 'Digital Banking',
  },
  {
    _id: '3',
    youtubeId: 'vfhzo499OeA',
    title: 'Smart Savings & Investment Solutions',
    description:
      'Start your financial journey with our competitive savings accounts, fixed deposits, and investment products tailored to help you grow your wealth and secure your future.',
    category: 'Savings',
  },
]

const swiperOptions = {
  modules: [Autoplay, Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 700,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.yt-carousel-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.yt-carousel-next',
    prevEl: '.yt-carousel-prev',
  },
}

function getYoutubeThumbnail(videoId) {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

export default function YoutubeVideoCarousel() {
  const [videos, setVideos] = useState(DEFAULT_VIDEOS)
  const [activeVideo, setActiveVideo] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const fetchedVideos = await getYoutubeVideos()
        if (fetchedVideos && fetchedVideos.length > 0) {
          setVideos(fetchedVideos)
        }
      } catch (error) {
        console.error("Failed to load dynamic YouTube videos, using default fallback videos:", error)
      }
    }
    fetchVideos()
  }, [])

  const openVideo = (videoId) => {
    setActiveVideo(videoId)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setActiveVideo(null)
  }

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isModalOpen}
        videoId={activeVideo || ''}
        onClose={closeModal}
      />

      <section className="yt-video-carousel-section">
        {/* Decorative background blobs */}
        <div className="yt-bg-blob yt-bg-blob-1" />
        <div className="yt-bg-blob yt-bg-blob-2" />

        <div className="container">
          {/* Section Header */}
          <div className="yt-section-header">
            <h2 className="yt-section-title">
              Watch Our <span className="yt-title-highlight">Latest Videos</span>
            </h2>
            <p className="yt-section-subtitle">
              Explore our video library to learn about our services, products, and how we empower
              Tanzania's financial future.
            </p>
          </div>

          {/* Carousel */}
          <div className="yt-carousel-wrapper">
            <Swiper {...swiperOptions} className="yt-swiper">
              {videos.map((video, index) => (
                <SwiperSlide key={video._id || index}>
                  <div className="yt-slide-inner">
                    {/* LEFT: Video Thumbnail */}
                    <div className="yt-video-col">
                      <div className="yt-thumbnail-wrapper" onClick={() => openVideo(video.youtubeId)}>
                        <div className="yt-thumbnail-img-wrap">
                          <img
                            src={getYoutubeThumbnail(video.youtubeId)}
                            alt={video.title}
                            className="yt-thumbnail-img"
                            onError={(e) => {
                              e.target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
                            }}
                          />
                          <div className="yt-thumbnail-overlay" />
                        </div>

                        {/* Play Button */}
                        <div className="yt-play-btn-wrap">
                          <button className="yt-play-btn" aria-label="Play video">
                            <span className="yt-play-btn-ripple yt-ripple-1" />
                            <span className="yt-play-btn-ripple yt-ripple-2" />
                            <span className="yt-play-btn-ripple yt-ripple-3" />
                            <svg className="yt-play-icon" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                        </div>

                        {/* YouTube badge */}
                        <div className="yt-yt-badge">
                          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                          Watch on YouTube
                        </div>

                        {/* Category tag */}
                        {video.category && (
                          <div className="yt-category-tag">{video.category}</div>
                        )}
                      </div>
                    </div>

                    {/* RIGHT: Content */}
                    <div className="yt-content-col">
                      <div className="yt-content-inner">
                        {/* Slide counter */}
                        <div className="yt-slide-counter">
                          <span className="yt-counter-current">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="yt-counter-sep">/</span>
                          <span className="yt-counter-total">
                            {String(videos.length).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Category label */}
                        {video.category && (
                          <div className="yt-content-category">
                            <span className="yt-category-dot" />
                            {video.category}
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="yt-content-title">{video.title}</h3>

                        {/* Description */}
                        <p className="yt-content-desc">{video.description}</p>

                        {/* CTA Button */}
                        <button className="yt-watch-btn" onClick={() => openVideo(video.youtubeId)}>
                          <span className="yt-watch-btn-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                          Watch Video
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <button className="yt-carousel-prev yt-nav-btn" aria-label="Previous video">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="yt-carousel-next yt-nav-btn" aria-label="Next video">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Pagination dots */}
            <div className="yt-carousel-pagination" />
          </div>
        </div>
      </section>
    </>
  )
}
