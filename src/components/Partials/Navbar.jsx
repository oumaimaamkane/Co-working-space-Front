import React from 'react';  
import { NavLink } from 'react-router-dom';
//import { toggleTheme } from '../../assets/js/main';



function Navbar() {
    return (
        <div className="navbar-area">
            <div className="zash-responsive-nav">
                <div className="container">
                    <div className="zash-responsive-menu">
                        <div className="logo black-logo">
                            <NavLink to="/">
                                <img src="assets/img/logo.png" alt="logo" />
                            </NavLink>
                        </div>

                        <div className="logo white-logo">
                            <NavLink to="/">
                                <img src="assets/img/white-logo.png" alt="logo" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="zash-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <NavLink className="navbar-brand black-logo" to="/">
                            <img src="assets/img/logo-youcode-ma.png" alt="logo" style={{ maxWidth: '150px' }} />
                        </NavLink>
                        <NavLink className="navbar-brand white-logo" to="/">
                            <img src="assets/img/logo-youcode-ma.png" alt="logo" style={{ maxWidth: '150px' }} />
                        </NavLink>

                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item"><NavLink to="/" className="nav-link active">Home <i className="flaticon-down-arrow"></i></NavLink>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a href="index.html" className="nav-link active">Home One</a></li>

                                        <li className="nav-item"><a href="index-2.html" className="nav-link">Home Two</a></li>

                                        <li className="nav-item"><a href="index-3.html" className="nav-link">Home Three</a></li>

                                        <li className="nav-item"><a href="index-4.html" className="nav-link">Home Four</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>

                                <li className="nav-item"><NavLink to="/" className="nav-link">The Place</NavLink></li>

                                <li className="nav-item"><NavLink to="/" className="nav-link">Event <i className="flaticon-down-arrow"></i></NavLink>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><NavLink to="/" className="nav-link">Event</NavLink></li>

                                        <li className="nav-item"><NavLink to="/" className="nav-link">Event Details</NavLink></li>
                                    </ul>
                                </li>

                                <li className="nav-item"><NavLink to="/" className="nav-link">Pages <i className="flaticon-down-arrow"></i></NavLink>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><NavLink to="/" className="nav-link">Gallery</NavLink></li>

                                        <li className="nav-item"><NavLink to="/" className="nav-link">Services</NavLink>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><NavLink to="/" className="nav-link">Services</NavLink></li>

                                                <li className="nav-item"><NavLink to="/" className="nav-link">Services Details</NavLink></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item"><NavLink to="/" className="nav-link">Pricing</NavLink></li>

                                        <li className="nav-item"><NavLink to="/" className="nav-link">Team</NavLink></li>

                                        <li className="nav-item"><NavLink to="/" className="nav-link">404 Error</NavLink></li>
                                    </ul>
                                </li>

                                <li className="nav-item"><NavLink to="/" className="nav-link">News <i className="flaticon-down-arrow"></i></NavLink>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><NavLink to="/" className="nav-link">News Grid</NavLink></li>

                                        <li className="nav-item"><NavLink to="/" className="nav-link">News Right Sidebar</NavLink></li>

                                        <li className="nav-item"><NavLink to="/" className="nav-link">News Details</NavLink></li>
                                    </ul>
                                </li>

                                <li className="nav-item"><NavLink to="/" className="nav-link">Contact</NavLink></li>
                            </ul>

                            <div className="others-option d-flex align-items-center">
                                <div className="call-us">
                                    <a href="tel:1518285679" className="d-inline-block">
                                        <div className="icon">
                                            <i className="flaticon-call"></i>
                                        </div>
                                        Call Us:
                                        <span>+1 518 285679</span>
                                    </a>
                                </div>

                                <div className="dark-version-btn">
                                    <label id="switch" className="switch">
                                     {/* eslint-disable-next-line no-undef */}
                                        <input type="checkbox" onChange={toggleTheme} id="slider" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
