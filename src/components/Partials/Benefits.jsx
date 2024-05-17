function Benefits() {
    return (
        <section className="benefits-section ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Your Benefits</span>
                    <h2>Why Choose Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-benefits-box">
                            <div className="icon">
                                <i className="flaticon-layers"></i>
                            </div>
                            <h3>Creative Space</h3>
                            <p>Lorem ipsum dolor sit amet, cn consectetur adipiscing elit.</p>
                        </div>

                        <div className="single-benefits-box">
                            <div className="icon">
                                <i className="flaticon-wifi"></i>
                            </div>
                            <h3>High Speed Wifi</h3>
                            <p>Lorem ipsum dolor sit amet, cn consectetur adipiscing elit.</p>
                        </div>

                        <div className="single-benefits-box">
                            <div className="icon">
                                <i className="flaticon-taxi"></i>
                            </div>
                            <h3>Car Sharing</h3>
                            <p>Lorem ipsum dolor sit amet, cn consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="benefits-image">
                            <img src="assets/img/benefits-img.jpg" alt="Benefits" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-benefits-box">
                            <div className="icon">
                                <i className="flaticon-security"></i>
                            </div>
                            <h3>24/7 Access</h3>
                            <p>Lorem ipsum dolor sit amet, cn consectetur adipiscing elit.</p>
                        </div>

                        <div className="single-benefits-box">
                            <div className="icon">
                                <i className="flaticon-location"></i>
                            </div>
                            <h3>Great Location</h3>
                            <p>Lorem ipsum dolor sit amet, cn consectetur adipiscing elit.</p>
                        </div>

                        <div className="single-benefits-box">
                            <div className="icon">
                                <i className="flaticon-calendar"></i>
                            </div>
                            <h3>Weekly Events</h3>
                            <p>Lorem ipsum dolor sit amet, cn consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;