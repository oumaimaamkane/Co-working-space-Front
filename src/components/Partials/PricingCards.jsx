import React from 'react';
import { NavLink } from 'react-router-dom';

function PricingCards() {
    return (
        <section className="pricing-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Notre Plan</span>
                    <h2>Nos Forfaits Tarifaires</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-pricing-box">
                            <div className="pricing-header bg1">
                                <h3>Coworking</h3>
                            </div>

                            <div className="price">
                                <sub>€</sub>179<sub>/mois</sub>
                            </div>

                            <div className="book-now-btn">
                                <NavLink to="/contact" className="default-btn">Réserver maintenant <span></span></NavLink>
                            </div>

                            <ul className="pricing-features-list">
                                <li><i className="flaticon-check-mark"></i> Accès 24/7</li>
                                <li><i className="flaticon-check-mark"></i> Service de nettoyage</li>
                                <li><i className="flaticon-check-mark"></i> Wifi/Internet Haut Débit</li>
                                <li><i className="flaticon-check-mark"></i> Heures d'ouverture (8:00 – 22:00)</li>
                                <li><i className="flaticon-check-mark"></i> Charges incluses</li>
                                <li><i className="flaticon-check-mark"></i> Accès à la cuisine et au salon</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-pricing-box">
                            <div className="pricing-header bg2">
                                <h3>Bureau Virtuel</h3>
                            </div>

                            <div className="price">
                                <sub>€</sub>295<sub>/mois</sub>
                            </div>

                            <div className="book-now-btn">
                                <NavLink to="/contact" className="default-btn">Réserver maintenant <span></span></NavLink>
                            </div>

                            <ul className="pricing-features-list">
                                <li><i className="flaticon-check-mark"></i> Accès 24/7</li>
                                <li><i className="flaticon-check-mark"></i> Service de nettoyage</li>
                                <li><i className="flaticon-check-mark"></i> Wifi/Internet Haut Débit</li>
                                <li><i className="flaticon-check-mark"></i> Heures d'ouverture (8:00 – 22:00)</li>
                                <li><i className="flaticon-check-mark"></i> Charges incluses</li>
                                <li><i className="flaticon-check-mark"></i> Accès à la cuisine et au salon</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-pricing-box">
                            <div className="pricing-header bg3">
                                <h3>Bureau Dédie</h3>
                            </div>

                            <div className="price">
                                <sub>€</sub>139<sub>/mois</sub>
                            </div>

                            <div className="book-now-btn">
                                <NavLink to="/contact" className="default-btn">Réserver maintenant <span></span></NavLink>
                            </div>

                            <ul className="pricing-features-list">
                                <li><i className="flaticon-check-mark"></i> Accès 24/7</li>
                                <li className="none-active"><i className="flaticon-cross-out"></i> Service de nettoyage</li>
                                <li><i className="flaticon-check-mark"></i> Wifi/Internet Haut Débit</li>
                                <li><i className="flaticon-check-mark"></i> Heures d'ouverture (8:00 – 22:00)</li>
                                <li className="none-active"><i className="flaticon-cross-out"></i> Charges incluses</li>
                                <li><i className="flaticon-check-mark"></i> Accès à la cuisine et au salon</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default PricingCards;
