import React from 'react';

function Footer() {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="subscribe-area">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="subscribe-content">
                                <h2>Abonnez-vous à notre newsletter</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="subscribe-form">
                                <form className="newsletter-form" data-toggle="validator">
                                    <input type="email" className="input-newsletter" placeholder="Entrez votre adresse e-mail" name="EMAIL" required="" autoComplete="off" />

                                    <button type="submit">S'abonner maintenant <i className="flaticon-right-chevron"></i></button>
                                    <div id="validator-newsletter" className="form-result"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <a href="about.html"><img src="assets/img/logo-youcode-ma.png" alt="image" style={{ maxWidth: '150px' }} /></a>

                                <p>Lorem ipsum dolor s it amet, consectetur e lit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra lacus vel facilisis.</p>
                            </div>

                            <ul className="social">
                                <li><a href="about.html" target="_blank" rel="noreferrer"><i className="flaticon-facebook"></i></a></li>
                                <li><a href="about.html" target="_blank" rel="noreferrer"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="about.html" target="_blank" rel="noreferrer"><i className="flaticon-linkedin"></i></a></li>
                                <li><a href="about.html" target="_blank" rel="noreferrer"><i className="flaticon-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Liens rapides</h3>

                            <ul className="footer-quick-links">
                                <li><a href="index.html">Accueil</a></li>
                                <li><a href="team.html">Notre équipe</a></li>
                                <li><a href="about.html">À propos de nous</a></li>
                                <li><a href="news-1.html">Dernières actualités</a></li>
                                <li><a href="the-place.html">L'endroit</a></li>
                                <li><a href="about.html">Politique de confidentialité</a></li>
                                <li><a href="event.html">Nos événements</a></li>
                                <li><a href="about.html">Termes et conditions</a></li>
                                <li><a href="pricing.html">Nos packages</a></li>
                                <li><a href="contact.html">Contactez-nous</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
                        <div className="single-footer-widget">
                            <h3>Coordonnées</h3>

                            <ul className="footer-contact-info">
                                <li><span>Adresse:</span> 27 Division St, New York, NY 10002, USA</li>
                                <li><span>Email:</span> <a href="/cdn-cgi/l/email-protection#c8b2a9bba088afa5a9a1a4e6aba7a5"><span className="__cf_email__" data-cfemail="d2a8b3a1ba92b5bfb3bbbefcb1bdbf">[email&#160;protected]</span></a></li>
                                <li><span>Téléphone:</span> <a href="tel:321948754">+(321) 948 754</a></li>
                                <li><span>Fax:</span> <a href="tel:12129876543">+1-212-9876543</a></li>
                                <li><a href="https://goo.gl/maps/1xz4L8TGSdkBhVmb7" target="_blank" rel="noreferrer">Voir l'emplacement sur GoogleMap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <p>© Afrtsy est fièrement détenue par <a href="https://envytheme.com/" target="_blank" rel="noreferrer">Simplon</a></p>
                        </div>

                        <div className="col-lg-6 col-sm-6 col-md-6">
                            <ul>
                                <li><a href="about.html">Politique de confidentialité</a></li>
                                <li><a href="about.html">Termes et conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;