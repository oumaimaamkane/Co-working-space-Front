import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function AboutServicesBanner() {
    useEffect(() => {
        $('.services-slides').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            }
        })
    }, []);


    return (
        <section className="services-area">
            <div className="container">
                <div className="services-slides owl-carousel owl-theme">
                    <div className="single-services-box">
                        <div className="icon">
                            <i className="flaticon-university"></i>

                            <div className="icon-bg">
                                <img src="assets/img/icon-bg1.png" alt="image" />
                                <img src="assets/img/icon-bg2.png" alt="image" />
                            </div>
                        </div>

                        <h3><NavLink to="single-services.html">Virtual Offices</NavLink></h3>

                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.</p>

                        <NavLink to="single-services.html" className="read-more-btn">Learn More</NavLink>

                        <div className="box-shape">
                            <img src="assets/img/box-shape1.png" alt="image" />
                            <img src="assets/img/box-shape2.png" alt="image" />
                        </div>
                    </div>

                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-work"></i>

                            <div class="icon-bg">
                                <img src="assets/img/icon-bg1.png" alt="image" />
                                <img src="assets/img/icon-bg2.png" alt="image" />
                            </div>
                        </div>

                        <h3><a href="single-services.html">Full-Time Offices</a></h3>

                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.</p>

                        <a href="single-services.html" class="read-more-btn">Learn More</a>

                        <div class="box-shape">
                            <img src="assets/img/box-shape1.png" alt="image" />
                            <img src="assets/img/box-shape2.png" alt="image" />
                        </div>
                    </div>

                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-room"></i>

                            <div class="icon-bg">
                                <img src="assets/img/icon-bg1.png" alt="image" />
                                <img src="assets/img/icon-bg2.png" alt="image" />
                            </div>
                        </div>

                        <h3><a href="single-services.html">Conference Rooms</a></h3>

                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.</p>

                        <a href="single-services.html" class="read-more-btn">Learn More</a>

                        <div class="box-shape">
                            <img src="assets/img/box-shape1.png" alt="image" />
                            <img src="assets/img/box-shape2.png" alt="image" />
                        </div>
                    </div>

                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-location"></i>

                            <div class="icon-bg">
                                <img src="assets/img/icon-bg1.png" alt="image" />
                                <img src="assets/img/icon-bg2.png" alt="image" />
                            </div>
                        </div>

                        <h3><a href="single-services.html">Global Access</a></h3>

                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut incididunt labore et dolore.</p>

                        <a href="single-services.html" class="read-more-btn">Learn More</a>

                        <div class="box-shape">
                            <img src="assets/img/box-shape1.png" alt="image" />
                            <img src="assets/img/box-shape2.png" alt="image" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutServicesBanner;