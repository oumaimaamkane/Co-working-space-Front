import React from 'react';
import Navbar from '../Partials/Navbar';
import MainBanner from '../MainBanner';
import Footer from '../Partials/Footer';

function MainLayout() {
    return (
        <div>
                {/* Preloader Area */}
                <div className="preloader">
                    <div id="global">
                        <div id="top" className="mask">
                            <div className="plane"></div>
                        </div>

                        <div id="middle" className="mask">
                            <div className="plane"></div>
                        </div>

                        <div id="bottom" className="mask">
                            <div className="plane"></div>
                        </div>

                        <p><i>LOADING...</i></p>
                    </div>
                </div>

                <Navbar />
                <MainBanner />
                {/* Other content goes here */}
                <Footer />

                {/* Go to top button */}
                <div className="go-top"><i className="fas fa-chevron-up"></i><i className="fas fa-chevron-up"></i></div>

        </div>
                
    );
}

export default MainLayout;