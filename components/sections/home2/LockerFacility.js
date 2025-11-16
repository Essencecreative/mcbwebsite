import Link from "next/link";

export default function LockerFacility() {
    return (
        <>
        <section className="locker-facility-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="locker-facility-highlights">
                            <div className="single-box one">
                                <div className="icon">
                                    <span className="icon-checkbox-mark"></span>
                                </div>
                                <p>Choose your locker sizes</p>
                            </div>
                            <div className="single-box two">
                                <div className="icon">
                                    <span className="icon-checkbox-mark"></span>
                                </div>
                                <p>Book from anywhere</p>
                            </div>
                            <div className="single-box three">
                                <div className="icon">
                                    <span className="icon-checkbox-mark"></span>
                                </div>
                                <p>Facility of Nomination</p>
                            </div>
                            <div className="img-box">
                                <div className="inner">
                                    <img className="float-bob-y" src="/assets/images/resources/locker-facility.png" alt="" />
                                    <div className="icon">
                                        <span className="icon-protection">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                            <span className="path5"></span>
                                            <span className="path6"></span>
                                            <span className="path7"></span>
                                            <span className="path8"></span>
                                            <span className="path9"></span>
                                            <span className="path10"></span>
                                            <span className="path11"></span>
                                            <span className="path12"></span>
                                            <span className="path13"></span>
                                            <span className="path14"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="locker-facility-text-box">
                            <div className="sec-title">
                                <h2>Best Locker<br /> Facility For Your<br /> Valuables</h2>
                            </div>
                            <div className="text-box">
                                <p>
                                    Perfectly simple and easy to distinguish. In a free hour when our power off choices is untrammelled best pleasure is to be welcomed every pleasures to be welcomed every avoided.
                                </p>
                            </div>
                            <div className="btns-box">
                                <Link className="btn-one" href="#">
                                    <span className="txt">Online Booking</span>
                                </Link>
                            </div>
                            <div className="faq-question-btn">
                                <div className="icon">
                                    <span className="icon-faq"></span>
                                </div>
                                <p>Have queries? Click below link</p>
                                <Link href="#"><span className="icon-right-arrow"></span>faq’s</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>

    )
}
