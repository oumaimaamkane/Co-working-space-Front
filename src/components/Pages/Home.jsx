import Benefits from "../Partials/Benefits";
import BlogsHighlights from "../Partials/BlogsHighlights";
import MainBanner from "../Partials/MainBanner";
import PricingCards from "../Partials/PricingCards";
import ServicesBanner from "../Partials/ServicesBanner";

function Home(){
    return (
        <div>
            <MainBanner />
            <ServicesBanner />
            <Benefits />
            <PricingCards />
            <BlogsHighlights />
        </div>
    );
}

export default Home;