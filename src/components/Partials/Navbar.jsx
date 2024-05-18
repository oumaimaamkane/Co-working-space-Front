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
                                <li className="nav-item"><NavLink to="/" className="nav-link active">Accueil <i className="flaticon-down-arrow"></i></NavLink>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a href="index.html" className="nav-link active">Accueil Un</a></li>

                                        <li className="nav-item"><a href="index-2.html" className="nav-link">Accueil Deux</a></li>

                                        <li className="nav-item"><a href="index-3.html" className="nav-link">Accueil Trois</a></li>

                                        <li className="nav-item"><a href="index-4.html" className="nav-link">Accueil Quatre</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item"><NavLink to="/about" className="nav-link">À Propos</NavLink></li>

                                <li className="nav-item"><NavLink to="/" className="nav-link">L'Endroit</NavLink></li>

                                <li className="nav-item"><NavLink to="/" className="nav-link">Événement <i className="flaticon-down-arrow"></i></NavLink>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><NavLink to="/" className="nav-link">Événement</NavLink></li>

                                        <li className="nav-item"><NavLink to="/" className="nav-link">Détails de l'Événement</NavLink></li>
                                    </ul>
                                </li>

                                <li className="nav-item"><NavLink to="/" className="nav-link">Pages <i className="flaticon-down-arrow"></i></NavLink>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><NavLink to="/" className="nav-link">Galerie</NavLink></li>

                                        <li className="nav-item"><NavLink to="/" className="nav-link">Services</NavLink>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><NavLink to="/" className="nav-link">Services</NavLink></li>

                                                <li className="nav-item"><NavLink to="/" className="nav-link">Détails des Services</NavLink></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item"><NavLink to="/" className="nav-link">Tarification</NavLink></li>

                                        <li className="nav-item"><NavLink to="/" className="nav-link">Équipe</NavLink></li>

                                        <li className="nav-item"><NavLink to="/" className="nav-link">404 Erreur</NavLink></li>
                                    </ul>
                                </li>

                                <li className="nav-item"><NavLink to="/" className="nav-link">Actualités <i className="flaticon-down-arrow"></i></NavLink>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><NavLink to="/" className="nav-link">Grille des Actualités</NavLink></li>

                                        <li className="nav-item"><NavLink to="/" className="nav-link">Actualités avec Barre Latérale</NavLink></li>

                                        <li className="nav-item"><NavLink to="/" className="nav-link">Détails des Actualités</NavLink></li>
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
                                        Appelez-nous:
                                        <span>+1 518 285679</span>
                                    </a>
                                </div>

                                <div className="dark-version-btn">
                                    <label id="switch" className="switch">
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
