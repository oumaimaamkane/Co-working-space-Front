import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogsHighlights = () => {
    return (
        <section className="blog-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>News and Insights</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <NavLink to="single-news.html"><img src="assets/img/blog-image/1.jpg" alt="image" /></NavLink>

                                <div className="date"><i className="flaticon-calendar"></i> Oct 14, 2024</div>
                            </div>

                            <div className="post-content">
                                <h3><NavLink to="single-news.html">Why Business Absolutely Needs a Virtual Office</NavLink></h3>
                                <p>Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <NavLink to="single-news.html" className="default-btn">Read More <span></span></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <NavLink to="single-news.html"><img src="assets/img/blog-image/2.jpg" alt="image" /></NavLink>

                                <div className="date"><i className="flaticon-calendar"></i> Oct 10, 2024</div>
                            </div>

                            <div className="post-content">
                                <h3><NavLink to="single-news.html">6 Design Trends to Look For in Coworking Spaces</NavLink></h3>
                                <p>Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <NavLink to="single-news.html" className="default-btn">Read More <span></span></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <NavLink to="single-news.html"><img src="assets/img/blog-image/3.jpg" alt="image" /></NavLink>

                                <div className="date"><i className="flaticon-calendar"></i> Sep 13, 2024</div>
                            </div>

                            <div className="post-content">
                                <h3><NavLink to="single-news.html">5 Ways to Work Remotely Without Being Overlooked</NavLink></h3>
                                <p>Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <NavLink to="single-news.html" className="default-btn">Read More <span></span></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="blog-notes">
                            <p>Insights to help you do what you do better, faster and more profitably. <NavLink to="#">Read Full Blog</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogsHighlights;
