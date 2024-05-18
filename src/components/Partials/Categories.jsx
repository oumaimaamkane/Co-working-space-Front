import { NavLink } from "react-router-dom";

function Categories() {
    return (
        <div className="rbt-single-widget widget_categories">
            <h3 className="title">Categories</h3>
            <div className="inner">
                <ul className="category-list">
                    <li><NavLink to="#"><span className="left-content">Music NFT's</span><span className="count-text">300</span></NavLink></li>
                    <li><NavLink to="#"><span className="left-content">NFT Creators</span><span className="count-text">275</span></NavLink></li>
                    <li><NavLink to="#"><span className="left-content">Rare Products</span><span className="count-text">625</span></NavLink></li>
                    <li><NavLink to="#"><span className="left-content">Rate Vedios</span><span className="count-text">556</span></NavLink></li>
                    <li><NavLink to="#"><span className="left-content">Digital Arts</span><span className="count-text">247</span></NavLink></li>
                    <li><NavLink to="#"><span className="left-content">App Music NFT's</span><span className="count-text">457</span></NavLink></li>
                    <li><NavLink to="#"><span className="left-content">Application</span><span className="count-text">423</span></NavLink></li>
                    <li><NavLink to="#"><span className="left-content">Art</span><span className="count-text">235</span></NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Categories;