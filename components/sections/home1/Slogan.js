import Link from 'next/link';
export default function Slogan() {
    return (
        <>
            {/*Start slogan area*/}
            <section className="slogan-area">
                <div className="container">
                <div className="slogan-content-box">
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
                        <Link
                         href="https://play.google.com/store/apps/details?id=com.ubx.mwalimubank&hl=en_US"
                         target="_blank"
                         rel="noopener noreferrer"
                         >
                            <div className="icon">
                            <span className="icon-play-store" />
                            </div>
                            <div className="text">
                            <h4>Google Play</h4>
                            </div>
                        </Link>
                        </li>
                        <li>
                        <Link
                         className="style2" 
                         href="https://apps.apple.com/tz/app/mwalimu-mobile/id6461210182"
                         target="_blank"
                         rel="noopener noreferrer"
                         >
                            <div className="icon">
                            <span className="icon-apple" />
                            </div>
                            <div className="text">
                            <h4>Apple Store</h4>
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
