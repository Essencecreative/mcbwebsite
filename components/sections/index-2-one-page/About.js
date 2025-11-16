'use client'
import ModalVideo from 'react-modal-video';
import { useState } from 'react'


export default function About() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        {/*About One Start*/}
        <section
            id="about"
            className="intro-style1-area"
            style={{ backgroundColor: "#f5f8f7" }}
            >
            <div className="container">
                <div className="row">

                <div className="col-xl-6">
                    <div className="intro-style1-video-gallery">
                    <div className="intro-style1-video-gallery-bg"
                        style={{ backgroundImage: 'url(assets/images/resources/intro-style1-video-gallery.jpg)' }}>
                    </div>
                    <div className="intro-video-gallery-style1">
                        <div className="icon wow zoomIn animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <a className="video-popup" title="Video Gallery" onClick={() => setIsOpen(true)}>
                            <span className="icon-play-button-1"></span>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-xl-6">
                    <div className="intro-style1-content-box">
                    <div className="sec-title">
                        <h2>Known for Trust,<br /> Honesty & Customer<br /> Support</h2>
                    </div>
                    <div className="text">
                        <p>Belongs to those who fail in their duty through weakness of will, which is
                        the same as saying through shrinking from toil and pain. These cases are
                        perfectly simple and easy to distinguish.</p>

                        <p>Choice is untrammelled and when nothing prevents our being able to do
                        what we like best every pleasure is to be welcomed.</p>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="intro-style1-single-box">
                            <div className="img-box">
                            <div className="img-box-inner">
                                <img src="assets/images/resources/intro-style1-1.jpg" alt="Our Journey" />
                            </div>
                            <div className="overlay-text">
                                <h3>Our Journey</h3>
                            </div>
                            </div>
                            <div className="title-box">
                            <h3><a href="#">For Over Four Decades Our Bank</a></h3>
                            </div>
                        </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="intro-style1-single-box">
                            <div className="img-box">
                            <div className="img-box-inner">
                                <img src="assets/images/resources/intro-style1-2.jpg" alt="Our Team" />
                            </div>
                            <div className="overlay-text">
                                <h3>Our Team</h3>
                            </div>
                            </div>
                            <div className="title-box">
                            <h3><a href="#">Passion & Professional Management</a></h3>
                            </div>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>

                </div>
            </div>
            {/* Modal Video */}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="06dV9txztKY" onClose={() => setIsOpen(false)} />
            </section>
        {/*About One End*/}
        </>
    )
}