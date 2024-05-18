import React from 'react';
import { NavLink } from 'react-router-dom';

function BlogsHighlights() {
    return (
        <section className="blog-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Actualités et Insights</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <NavLink to="single-news.html"><img src="assets/img/blog-image/1.jpg" alt="image" /></NavLink>

                                <div className="date"><i className="flaticon-calendar"></i> 14 Octobre 2024</div>
                            </div>

                            <div className="post-content">
                                <h3><NavLink to="single-news.html">Pourquoi les entreprises ont absolument besoin d'un bureau virtuel</NavLink></h3>
                                <p>Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <NavLink to="single-news.html" className="default-btn">Lire plus <span></span></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <NavLink to="single-news.html"><img src="assets/img/blog-image/2.jpg" alt="image" /></NavLink>

                                <div className="date"><i className="flaticon-calendar"></i> 10 Octobre 2024</div>
                            </div>

                            <div className="post-content">
                                <h3><NavLink to="single-news.html">6 tendances de design à rechercher dans les espaces de coworking</NavLink></h3>
                                <p>Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <NavLink to="single-news.html" className="default-btn">Lire plus <span></span></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <NavLink to="single-news.html"><img src="assets/img/blog-image/3.jpg" alt="image" /></NavLink>

                                <div className="date"><i className="flaticon-calendar"></i> 13 Septembre 2024</div>
                            </div>

                            <div className="post-content">
                                <h3><NavLink to="single-news.html">5 façons de travailler à distance sans être négligé</NavLink></h3>
                                <p>Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <NavLink to="single-news.html" className="default-btn">Lire plus <span></span></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="blog-notes">
                            <p>Des informations pour vous aider à faire ce que vous faites mieux, plus rapidement et plus rentablement. <NavLink to="#">Lire le blog complet</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default BlogsHighlights;
