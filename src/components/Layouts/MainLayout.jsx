import React from 'react';
import Navbar from '../Partials/Navbar';
import Footer from '../Partials/Footer';
import { Outlet } from 'react-router-dom';

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

            <main>
                <Outlet />
            </main>

            <Footer />

            {/* Go to top button */}
            <div className="go-top"><i className="fas fa-chevron-up"></i><i className="fas fa-chevron-up"></i></div>
        </div>

    );
}

export default MainLayout;