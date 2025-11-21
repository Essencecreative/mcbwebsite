import Link from 'next/link';
export default function FeaturesStyle1() {
    return (
        <>
            <section className="features-style1-area">
                <div className="container">
                    <div className="sec-title text-center">
                    <h2>Bank for a Better Tomorrow</h2>
                    <div className="sub-title">
                        <p>Committed to helping our customers succeed.</p>
                    </div>
                    </div>
                    <div className="features-style1-content">
                    <ul className="clearfix">
                        {/* Start Single Features Style1 Box */}
                        <li>
                        <div className="single-features-style1-box">
                            <div className="shape-left">
                            <img src="assets/images/shapes/shape-1.png" alt="" />
                            </div>
                            <div className="shape-bottom">
                            <img src="assets/images/shapes/shape-2.png" alt="" />
                            </div>
                            <div className="counting-box">
                            <div
                                className="counting-box-bg"
                                style={{
                                backgroundImage:
                                    'url(assets/images/shapes/counting-box-bg.png)',
                                }}
                            ></div>
                            <h3>01</h3>
                            </div>
                            <div className="text-box">
                            <h4>Fixed Depost</h4>
                            <h3>Fixed Returns with Peace of Mind</h3>
                            <p>
                                Must explain to you how work mistaken give you complete
                                guide.
                            </p>
                            <div className="btn-box">
                                <Link href="/accounts">
                                Read More
                                <i className="fas fa-plus"></i>
                                </Link>
                            </div>
                            </div>
                        </div>
                        </li>
                        {/* End Single Features Style1 Box */}

                        {/* Start Single Features Style1 Box */}
                        <li>
                        <div className="single-features-style1-box">
                            <div className="shape-left">
                            <img src="assets/images/shapes/shape-1.png" alt="" />
                            </div>
                            <div className="shape-bottom">
                            <img src="assets/images/shapes/shape-2.png" alt="" />
                            </div>
                            <div className="counting-box">
                            <div
                                className="counting-box-bg"
                                style={{
                                backgroundImage:
                                    'url(assets/images/shapes/counting-box-bg.png)',
                                }}
                            ></div>
                            <h3>02</h3>
                            </div>
                            <div className="text-box">
                            <h4>Current Account</h4>
                            <h3>Banking Solutions for a Business</h3>
                            <p>
                                No one rejects dislikes avoids pleasures because it is
                                pleasure trivial.
                            </p>
                            <div className="btn-box">
                                <Link href="/accounts">
                                Read More
                                <i className="fas fa-plus"></i>
                                </Link>
                            </div>
                            </div>
                        </div>
                        </li>
                        {/* End Single Features Style1 Box */}

                        {/* Start Single Features Style1 Box */}
                        <li>
                        <div className="single-features-style1-box">
                            <div className="shape-left">
                            <img src="assets/images/shapes/shape-1.png" alt="" />
                            </div>
                            <div className="shape-bottom">
                            <img src="assets/images/shapes/shape-2.png" alt="" />
                            </div>
                            <div className="counting-box">
                            <div
                                className="counting-box-bg"
                                style={{
                                backgroundImage:
                                    'url(assets/images/shapes/counting-box-bg.png)',
                                }}
                            ></div>
                            <h3>03</h3>
                            </div>
                            <div className="text-box">
                            <h4>Mutual Funds</h4>
                            <h3>Our Strategies for Better Returns</h3>
                            <p>
                                Except obtain some advantages from it But who has any right
                                to find enjoy.
                            </p>
                            <div className="btn-box">
                                <Link href="/accounts">
                                Read More
                                <i className="fas fa-plus"></i>
                                </Link>
                            </div>
                            </div>
                        </div>
                        </li>
                        {/* End Single Features Style1 Box */}
                    </ul>
                    </div>
                </div>
            </section>
        </>

    )
}
