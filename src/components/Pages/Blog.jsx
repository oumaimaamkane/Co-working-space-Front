import { NavLink } from 'react-router-dom';
import AsideBlogs from '../Partials/AsideBlogs';
import BlogCard from '../Partials/BlogCard';

function Blog() {
    return (
        <div>
            <div className="blog-area ptb-100">
                <div className="container ptb-100">

                    <div className="row g-5 flex-wrap">
                        <div className="col-xl-8 col-lg-8">
                            <BlogCard />
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
