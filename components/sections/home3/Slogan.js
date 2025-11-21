import Link from 'next/link';
export default function FeaturesStyle4() {
    return (
        <>
            {/*Start slogan area*/}
            <section className="slogan-area slogan-area--style2">
                <div className="container">
                <div className="slogan-content-box slogan-content-box--style2">
                    <div
                    className="slogan-content-box-bg"
                    style={{
                        backgroundImage:
                        "url(assets/images/backgrounds/slogan-content-box-bg.jpg)"
                    }}
                    />
                    <div className="inner-title">
                    <h2>Experience a New Digital World.</h2>
                    <p>Mobile banking application with new &amp; exciting features.</p>
                    </div>
                    <div className="get-app-box">
                    <ul>
                        <li>
                        <Link href="/contact">
                            <div className="icon">
                            <span className="icon-play-store" />
                            </div>
                            <div className="text">
                            <h4>Download</h4>
                            </div>
                        </Link>
                        </li>
                        <li>
                        <Link className="style2" href="/contact">
                            <div className="icon">
                            <span className="icon-apple" />
                            </div>
                            <div className="text">
                            <h4>Contact Us</h4>
                            </div>
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
            {/*End slogan area*/}
        </>

    )
}
