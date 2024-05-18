import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function PartnerArea() {
    useEffect(() => {
        $('.partner-slides').owlCarousel({
            loop: true,
            margin: 30, // Added margin for gap
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 7
                }
            }
        });
    }, []);

    return (
        <section className="partner-area ptb-100 bg-f8f8f8">
            <div className="container">
                <div className="partner-title">
                    <h2>Fait Confiance par 20 000 Entreprises</h2>
                </div>

                <div className="partner-slides owl-carousel owl-theme">
                    <div className="single-partner-item">
                        <NavLink to="#">
                            <img src="assets/img/partner-image/1.png" alt="image" />
                        </NavLink>
                    </div>

                    <div className="single-partner-item">
                        <NavLink to="#">
                            <img src="assets/img/partner-image/2.png" alt="image" />
                        </NavLink>
                    </div>

                    <div className="single-partner-item">
                        <NavLink to="#">
                            <img src="assets/img/partner-image/3.png" alt="image" />
                        </NavLink>
                    </div>

                    <div className="single-partner-item">
                        <NavLink to="#">
                            <img src="assets/img/partner-image/4.png" alt="image" />
                        </NavLink>
                    </div>

                    <div className="single-partner-item">
                        <NavLink to="#">
                            <img src="assets/img/partner-image/5.png" alt="image" />
                        </NavLink>
                    </div>

                    <div className="single-partner-item">
                        <NavLink to="#">
                            <img src="assets/img/partner-image/6.png" alt="image" />
                        </NavLink>
                    </div>

                    <div className="single-partner-item">
                        <NavLink to="#">
                            <img src="assets/img/partner-image/7.png" alt="image" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default PartnerArea;
