import AboutHero from "../Partials/AboutHero";
import AboutServicesBanner from "../Partials/AboutServicesBanner";
import PartnerArea from "../Partials/PartnerArea";

function About() {
    return (
        <div>
            <AboutHero />

            <section class="about-area ptb-100">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="about-title">
                                <span>About Us</span>
                                <h2>We offer creative working environments that suit your business</h2>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <div class="about-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AboutServicesBanner />
            <PartnerArea />
        </div>
    );
}

export default About;