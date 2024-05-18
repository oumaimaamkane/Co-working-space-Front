import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';


function ServicesBanner() {
    useEffect(() => {
        $('.main-services-slides').owlCarousel({
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
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }, []);

    return (
        <section className="services-area ptb-100 bg-f8f8f8">
            <div className="container">
                <div className="section-title">
                    <h2>Nous offrons des environnements de travail créatifs</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="main-services-slides owl-carousel owl-theme">
                    <div className="services-box">
                        <img src="assets/img/gallery-image/1.jpg" alt="Espace de bureau" />
                        <div className="services-content">
                            <h3><NavLink to="#">Espace de bureau</NavLink></h3>
                            <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</p>
                        </div>
                    </div>

                    <div className="services-box">
                        <img src="assets/img/gallery-image/2.jpg" alt="Coworking" />
                        <div className="services-content">
                            <h3><NavLink to="single-services.html">Coworking</NavLink></h3>
                            <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</p>
                        </div>
                    </div>

                    <div className="services-box">
                        <img src="assets/img/gallery-image/3.jpg" alt="Espaces de réunion" />
                        <div className="services-content">
                            <h3><NavLink to="single-services.html">Espaces de réunion</NavLink></h3>
                            <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</p>
                        </div>
                    </div>

                    <div className="services-box">
                        <img src="assets/img/gallery-image/4.jpg" alt="Bureaux virtuels" />
                        <div className="services-content">
                            <h3><NavLink to="single-services.html">Bureaux virtuels</NavLink></h3>
                            <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ServicesBanner;