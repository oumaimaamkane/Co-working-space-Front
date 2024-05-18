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

                        <h3><NavLink to="single-services.html">Bureaux Virtuels</NavLink></h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <NavLink to="single-services.html" className="read-more-btn">En savoir plus</NavLink>

                        <div className="box-shape">
                            <img src="assets/img/box-shape1.png" alt="image" />
                            <img src="assets/img/box-shape2.png" alt="image" />
                        </div>
                    </div>

                    <div className="single-services-box">
                        <div className="icon">
                            <i className="flaticon-work"></i>

                            <div className="icon-bg">
                                <img src="assets/img/icon-bg1.png" alt="image" />
                                <img src="assets/img/icon-bg2.png" alt="image" />
                            </div>
                        </div>

                        <h3><NavLink to="single-services.html">Bureaux à Temps Plein</NavLink></h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <NavLink to="single-services.html" className="read-more-btn">En savoir plus</NavLink>

                        <div className="box-shape">
                            <img src="assets/img/box-shape1.png" alt="image" />
                            <img src="assets/img/box-shape2.png" alt="image" />
                        </div>
                    </div>

                    <div className="single-services-box">
                        <div className="icon">
                            <i className="flaticon-room"></i>

                            <div className="icon-bg">
                                <img src="assets/img/icon-bg1.png" alt="image" />
                                <img src="assets/img/icon-bg2.png" alt="image" />
                            </div>
                        </div>

                        <h3><NavLink to="single-services.html">Salles de Conférence</NavLink></h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <NavLink to="single-services.html" className="read-more-btn">En savoir plus</NavLink>

                        <div className="box-shape">
                            <img src="assets/img/box-shape1.png" alt="image" />
                            <img src="assets/img/box-shape2.png" alt="image" />
                        </div>
                    </div>

                    <div className="single-services-box">
                        <div className="icon">
                            <i className="flaticon-location"></i>

                            <div className="icon-bg">
                                <img src="assets/img/icon-bg1.png" alt="image" />
                                <img src="assets/img/icon-bg2.png" alt="image" />
                            </div>
                        </div>

                        <h3><NavLink to="single-services.html">Accès Global</NavLink></h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <NavLink to="single-services.html" className="read-more-btn">En savoir plus</NavLink>

                        <div className="box-shape">
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