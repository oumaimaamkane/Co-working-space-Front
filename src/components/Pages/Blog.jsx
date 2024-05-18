import { NavLink } from 'react-router-dom';
import AsideBlogs from '../Partials/AsideBlogs';

function Blog() {
    return (
        <div>
            <div className="blog-area ptb-100">
                <div className="container ptb-100">

                    <div className="row g-5 flex-wrap">
                        <div className="col-xl-8 col-lg-8">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <NavLink to="blog-details.html">
                                        <img src="assets/images/blog/blog-04.jpg" alt="Personal Portfolio Images" />
                                    </NavLink>
                                    <div className="date"><i className="flaticon-calendar"></i> 13 Septembre 2024</div> 
                                </div>
                                <div className="post-content">
                                    <div className="category-info">
                                        <div className="category-list">
                                            <NavLink to="blog-details.html">UX/UI Designer</NavLink>
                                        </div>
                                    </div>
                                    <h3><NavLink to="blog-details.html">Feature Feature for next year design<i className="feather-arrow-up-right"></i></NavLink></h3>
                                    <p>Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <NavLink to="blog-details.html" className="default-btn">Lire plus <span></span></NavLink> 
                                </div>
                            </div>
                            {/* Add other blog posts similarly */}
                        </div>

                        <AsideBlogs />
                    </div>

                    <div className="row">
                        <div className="col-lg-8" data-sal="slide-up" data-sal-delay="550" data-sal-duration="800">
                            <nav className="pagination-wrapper" aria-label="Page navigation example">
                                <ul className="pagination single-column-blog">
                                    <li className="page-item"><NavLink className="page-link" to="#">Previous</NavLink></li>
                                    <li className="page-item"><NavLink className="page-link active" to="#">1</NavLink></li>
                                    <li className="page-item"><NavLink className="page-link" to="#">2</NavLink></li>
                                    <li className="page-item"><NavLink className="page-link" to="#">3</NavLink></li>
                                    <li className="page-item"><NavLink className="page-link" to="#">Next</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
