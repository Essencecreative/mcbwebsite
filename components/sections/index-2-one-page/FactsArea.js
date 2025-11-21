export default function FactsArea() {
    return (
        <>
        <section className="facts-area">
            <div className="facts-area-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/facts-area-bg.jpg)' }}>
            </div>
            <div className="container">
                <div className="sec-title text-center">
                    <h2>Few Interesting Numbers</h2>
                    <div className="sub-title">
                        <p>Numbers that speak about banking service.</p>
                    </div>
                </div>
                <div className="row">
                    {/* Start Single Fact Box */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-fact-box">
                            <div className="icon">
                                <span className="icon-bank">
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
                                    <span className="path15"></span>
                                    <span className="path16"></span>
                                </span>
                            </div>
                            <div className="text">
                                <h3>Our Network</h3>
                                <p>86 Branches around the country</p>
                            </div>
                        </div>
                    </div>
                    {/* End Single Fact Box */}

                    {/* Start Single Fact Box */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-fact-box">
                            <div className="icon">
                                <span className="icon-expert">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </span>
                            </div>
                            <div className="text">
                                <h3>Customers</h3>
                                <p>More than 1.5 million customers</p>
                            </div>
                        </div>
                    </div>
                    {/* End Single Fact Box */}

                    {/* Start Single Fact Box */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="single-fact-box">
                        <div className="icon">
                            <span className="icon-human">
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
                                <span className="path15"></span>
                            </span>
                        </div>
                        <div className="text">
                            <h3>Employee</h3>
                            <p>1.6k professional employees</p>
                        </div>
                    </div>
                </div>
                {/* End Single Fact Box */}
                {/* Start Single Fact Box */}
                <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="single-fact-box">
                        <div className="icon">
                            <span className="icon-money-bag">
                                <span className="path1"></span>
                                <span className="path2"></span>
                            </span>
                        </div>
                        <div className="text">
                            <h3>Loans Disbursed</h3>
                            <p>45.6 Cr loans for 258 customers</p>
                        </div>
                    </div>
                </div>
                {/* End Single Fact Box */}
            </div>
            </div>
        </section>
        </>

    )
}
