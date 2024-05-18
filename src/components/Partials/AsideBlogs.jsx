import Categories from "./Categories";
import RecentBlogs from "./RecentBlogs";


function AsideBlogs() {
    return (
        <div class="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
            <aside class="rwt-sidebar">
                <Categories />
                <RecentBlogs />
            </aside>
        </div>
    );
}

export default AsideBlogs;