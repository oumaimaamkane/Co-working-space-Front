// PricingCards.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MemberShipModal from './MemberShipModal';

function PricingCards() {
    const [selectedMemberShip, setSelectedMemberShip] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const memberships = [
        {
            title: 'Coworking',
            price: 179,
            features: [
                'Accès 24/7',
                'Service de nettoyage',
                'Wifi/Internet Haut Débit',
                'Heures d\'ouverture (8:00 – 22:00)',
                'Charges incluses',
                'Accès à la cuisine et au salon'
            ]
        },
        // Add other memberships here
    ];

    const handleMemberShipClick = (membership) => {
        setSelectedMemberShip(membership);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <section className="pricing-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Notre Plan</span>
                    <h2>Nos Forfaits Tarifaires</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    {memberships.map((membership, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                            <div className="single-pricing-box" onClick={() => handleMemberShipClick(membership)}>
                                <div className={`pricing-header bg${index + 1}`}>
                                    <h3>{membership.title}</h3>
                                </div>
                                <div className="price">
                                    <sub>€</sub>{membership.price}<sub>/mois</sub>
                                </div>
                                <div className="book-now-btn">
                                    <button className="default-btn">Réserver maintenant <span></span></button>
                                </div>
                                <ul className="pricing-features-list">
                                    {membership.features.map((feature, index) => (
                                        <li key={index}><i className="flaticon-check-mark"></i> {feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <MemberShipModal membership={selectedMemberShip} open={modalOpen} handleClose={handleCloseModal} />
        </section>
    );
}

export default PricingCards;
