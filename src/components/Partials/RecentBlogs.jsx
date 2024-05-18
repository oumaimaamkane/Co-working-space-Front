import { NavLink } from "react-router-dom";

function RecentBlogs() {
    return (
        <div className="rbt-single-widget widget_recent_entries mt--40">
            <h3 className="title">Recent Posts</h3>
            <div className="inner">
                <ul>
                    <li>
                        <NavLink to="#">
                            <span className="d-block">Best Corporate Tips You Will Read This Year.</span>
                            <span className="cate">Music NFT's</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <span className="d-block">Should Fixing Corporate Take 100 Steps.</span>
                            <span className="cate">Digital Arts</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <span className="d-block">The Next 100 Things To Immediately Do About.</span>
                            <span className="cate">NFT Creators</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <span className="d-block">Top 5 Lessons About Corporate To Learn Before.</span>
                            <span className="cate">Rare Products</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RecentBlogs;