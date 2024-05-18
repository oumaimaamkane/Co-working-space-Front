import { NavLink } from "react-router-dom";

function BlogCard() {
    return (
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
    );
}

export default BlogCard;