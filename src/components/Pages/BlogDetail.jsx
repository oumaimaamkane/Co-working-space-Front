import AsideBlogs from "../Partials/AsideBlogs";

function BlogDetail() {
    return (
        <div>
            <div class="rn-blog-area rn-blog-details-default rn-section-gapTop ptb-100">
                <div class="container ptb-100">
                    <div class="row g-6">
                        <div className="col-xl-8 col-lg-8">
                            <div className="rn-blog-listen">
                                <div className="blog-content-top">
                                    <h2 className="title">Sample Blog Title</h2>
                                    <span className="date">14 Octobre 2024</span>
                                </div>
                                <div className="bd-thumbnail">
                                    <div className="large-img mb--30">
                                        <img className="w-100" src="assets/img/blog-image/1.jpg" alt="Blog Image" />
                                    </div>
                                </div>
                                <div className="news-details">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                                </div>

                                <div className="comments-wrapper pt--40">
                                    <div className="comments-area">
                                        <div className="trydo-blog-comment">
                                            <h5 className="comment-title mb--40">5 replies on “Sample Blog Title”</h5>
                                        </div>
                                    </div>
                                </div>

                                {/* Placeholder for comments */}
                                <ul id="comment-container" className="comment-list">
                                    {/* Include your comment components here */}
                                    {/* Example: <SingleComment /> */}
                                </ul>

                                {/* Conditional rendering for comment form based on user's authorization */}
                                {true /* Replace with your authorization logic */}
                                ? <div className="rn-comment-form pt--60">Comment form goes here</div>
                                : <p className="text-muted">You are not authorized to post comments.</p>
                            </div>
                        </div>

                        <AsideBlogs />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
