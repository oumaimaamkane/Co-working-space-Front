import { NavLink } from "react-router-dom";

function Contact() {
    return (
        <section className="contact-area ptb-100">
            <div className="container ptb-100">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="section-title">
                            <span className="sub-title">Contactez-nous</span>
                            <h2>Dites Bonjour</h2>
                            <p>Votre adresse email ne sera pas publiée. Nous promettons de ne pas spammer!</p>
                        </div>

                        <div className="contact-info">
                            <ul className="contact-list">
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-location"></i>
                                    </div>
                                    <span>Adresse</span>
                                    CA 560 Bush St & 20th Ave, Apt 5 San Francisco, 230909, Canada
                                </li>

                                <li>
                                    <div className="icon">
                                        <i className="flaticon-email"></i>
                                    </div>
                                    <span>Email</span>
                                    <NavLink to="/cdn-cgi/l/email-protection#fc869d8f94bc99919d9590d29f9391">
                                        <span className="__cf_email__" data-cfemail="5822392b30183d35393134763b3735">[email&#160;protected]</span>
                                    </NavLink>
                                    <NavLink to="/cdn-cgi/l/email-protection#4a2c2b320a2f272b232664292527">
                                        <span className="__cf_email__" data-cfemail="3157504971545c50585d1f525e5c">[email&#160;protected]</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <div className="icon">
                                        <i className="fas fa-phone-volume"></i>
                                    </div>
                                    <span>Téléphone</span>
                                    <a href="tel:44587154756">+44 587 154756</a>
                                    <a href="tel:55555514574">+55 5555 14574</a>
                                </li>
                            </ul>

                            <ul className="social">
                                <li><NavLink to="#" target="_blank"><i className="flaticon-facebook"></i></NavLink></li>
                                <li><NavLink to="#" target="_blank"><i className="flaticon-twitter"></i></NavLink></li>
                                <li><NavLink to="#" target="_blank"><i className="flaticon-linkedin"></i></NavLink></li>
                                <li><NavLink to="#" target="_blank"><i className="flaticon-instagram"></i></NavLink></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="section-title">
                            <span className="sub-title">Une question?</span>
                            <h2>Envoyez un message</h2>
                            <p>Votre adresse email ne sera pas publiée. Nous promettons de ne pas spammer!</p>
                        </div>

                        <div className="contact-form">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control" required data-error="Veuillez entrer votre nom" placeholder="Nom" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" className="form-control" required data-error="Veuillez entrer votre email" placeholder="Email" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Veuillez entrer votre sujet" placeholder="Sujet" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" id="message" cols="30" rows="6" required data-error="Écrivez votre message" placeholder="Votre message"></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn">Envoyer le message <span></span></button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-map">
                <img src="assets/img/bg-map.png" alt="image" />
            </div>
        </section>
    )
}

export default Contact;