import { Fade } from "react-awesome-reveal";
import images from "../../assets/img/assets";
import Carousel from "../../components/Slider/Carousel";
import LinkButton from "../../components/Buttons/LinkButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faXmark } from "@fortawesome/free-solid-svg-icons";
import Slider from "../../components/Membership/Slider";
import FloorPlan from "./FloorPlan";
import Services from "../../components/Services/Services";

const REVIEW_IMAGE = [
  images.workspace1,
  images.workspace2,
  images.workspace3,
  images.workspace4,
];

const Membership_SLIDES = [
  {
    title: "Day Pass",
    price: 10,
    duration: "/day",
    benefits: [
      "Mix of sitting and standing workspaces",
      "24/7 Access",
      "Coffee, tea, still, and sparkling water",
      "Access to community's online member network",
      "Fast Wi-Fi and prints",
    ],
  },
  {
    title: "Monthly",
    price: 35,
    duration: "/month",
    benefits: [
      "Mix of sitting and standing workspaces",
      "24/7 Access",
      "Coffee, tea, still, and sparkling water",
      "Access to community's online member network",
      "Fast Wi-Fi and prints",
    ],
  },
  {
    title: "6 Months",
    price: 180,
    duration: "/6 months",
    benefits: [
      "Mix of sitting and standing workspaces",
      "24/7 Access",
      "Coffee, tea, still, and sparkling water",
      "Access to community's online member network",
      "Fast Wi-Fi and prints",
    ],
  },
  {
    title: "Yearly",
    price: 366,
    duration: "/year",
    benefits: [
      "Mix of sitting and standing workspaces",
      "24/7 Access",
      "Coffee, tea, still, and sparkling water",
      "Access to community's online member network",
      "Fast Wi-Fi and prints",
    ],
  },
];

export default function SingleWorkspace() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white">
        {/* Breadcrumb Area Start */}
        <Fade
          delay={1e2}
          cascade
          triggerOnce
          damping={1e-1}
          className="px-4 md:px-12 leading-tight bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images.banner1})` }}
        >
          <div className="h-[250px] md:h-[400px] flex justify-center items-center pt-20 md:pt-36">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content text-center">
                  <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                    <h2 className="text-white uppercase font-semibold mb-1 md:mb-3 text-[24px] md:text-4xl">
                      Private Office
                    </h2>
                    <ul className="flex justify-center items-center text-white font-[500]">
                      <li>
                        <a href="/" className="hover:text-black">
                          Home
                        </a>
                      </li>
                      <span className="mx-2">&gt;</span>
                      <li>Private Office</li>
                    </ul>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Workspace Area */}
        <section className="bg-white coworking-testimonials-area py-16 px-4 md:pr-11">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
            {/* <!-- Testimonial Thumbnail --> */}
            <div className="col-span-1 md:col-span-7 lg:grid-cols-7 md:mx-8">
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <div className="w-full testimonial-thumbnail">
                  <Carousel autoSlide={true} className="" autoSlideInterval={1800}>
                    {REVIEW_IMAGE.map((slide, index) => (
                      <img key={index} src={slide} alt={`Slide ${index + 1}`} />
                    ))}
                  </Carousel>
                </div>
              </Fade>
            </div>

            <div className="col-span-1 md:col-span-5 lg:grid-cols-5">
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                {/* <!-- Section Heading --> */}
                <div className="section-heading w-11/12">
                  <h2 className="font-bold text-[24px] md:text-[30px] mb-3 text-[#1E3954]">
                    Private Office
                  </h2>

                  <div className="container flex items-center">
                    <div className="border-black border-2 w-1/2 text-center py-1 md:py-2">
                      <p className="text-gray-500 uppercase md:mb-1 text-sm md:text-base leading-8">
                        STARTING FROM
                      </p>
                      <p className="text-teal-500 text-[14px] md:text-base font-bold">
                        $30/mo
                      </p>
                    </div>

                    <div className="border-black border-2 border-l-0 w-1/2 text-center py-1 md:py-2">
                      <p className="text-gray-500 uppercase md:mb-1 text-sm md:text-base leading-8">
                        ideal for
                      </p>
                      <p className="text-teal-500 text-[14px] md:text-base font-bold">
                        20+
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!-- Workspace Content --> */}
                <div className="overflow-auto w-11/12">
                  <div className="about-content text-sm md:text-base">
                    <p className="leading-8 text-gray-500 my-4">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia dese mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste. Lorem Ipsum available.
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia dese mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste. Lorem Ipsum available.
                    </p>

                    <button
                      className="inline-block h-fit px-8 py-3 md:py-4 md:px-12 text-sm md:text-base rounded-full bg-[#030303] border-transparent hover:bg-gray-800 duration-200 text-white mt-3"
                      onClick={toggleModal}
                    >
                      Reserve Now
                    </button>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* Modal Area */}
        <div
          className={`fixed inset-0 overflow-auto  z-50 transition-all duration-500 ease-in-out transform 
        ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
          style={{
            backgroundColor: "#ffffff",
            scrollbarWidth: "none",
          }}
        >
          {/* close button */}
          <div className="absolute top-4 right-4">
            <button
              className="text-white bg-black px-4 p-2"
              onClick={toggleModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div
            className={`w-full h-full px-4 md:px-12 transition-all duration-500 ease-in-out ${
              isOpen ? "visible" : "invisible"
            }`}
          >
            {/* Membership options Area */}
            <div className="leading-tight bg-center">
              <div className="container mx-auto mt-20 pb-16">
                <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                  <h2 className="text-[20px] uppercase md:text-4xl font-semibold text-center mb-3 text-black">
                    Plan Type
                  </h2>

                  <p className="text-center text-gray-500 text-base md:text-base mb-14">
                    Choose a plan and Save more with longer contracts
                  </p>
                </Fade>

                <Slider>
                  {(Membership_SLIDES || []).map((d) => (
                    <div
                      key={d.title}
                      className="py-8 md:py-12  flex-shrink-0 w-full md:w-[31%] px-6 md:px-8 rounded-xl transition-border duration-200 ease-in border border-[#55BBAF] md:hover:border hover:border-[#55BBAF]"
                    >
                      <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                        <h3 className="text-lg uppercase md:text-2xl font-semibold text-black">
                          {d.title}
                        </h3>
                        <div className="price flex items-center space-x-2 text-green-500 mt-4 md:mt-6 rounded-md">
                          <span className="text-lg md:text-2xl font-bold">
                            $
                          </span>
                          <span className="text-[30px] md:text-5xl font-semibold">
                            {d.price}
                          </span>
                          <span className="text-base md:text-lg font-semibold">
                            {d.duration}
                          </span>
                        </div>

                        {/* benefits */}
                        <div className="mt-6 mb-10 pr-4">
                          {(d.benefits || []).map((benefit, index) => (
                            <li className="py-3 flex" key={index}>
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="text-[#55BBAF] size-[20px]"
                              />
                              <p className="text-sm md:text-base text-black ml-4">
                                {benefit}
                              </p>
                            </li>
                          ))}

                          {(d.drawbacks || []).map((drawback, index) => (
                            <li className="py-3 flex" key={index}>
                              <FontAwesomeIcon
                                icon={faTimes}
                                className="text-red-600 size-[20px]"
                              />
                              <p className="text-sm md:text-base text-black ml-4">
                                {drawback}
                              </p>
                            </li>
                          ))}
                        </div>
                        <LinkButton className="text-white w-full text-center">
                          Select Plan
                        </LinkButton>
                      </Fade>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        {/* Services Area */}
        <section className="bg-[white] pb-14 md:pb-24 px-4 md:px-12">
          <div className="section-heading">
            <h2 className="font-bold text-[20px] md:text-[30px] mb-16 text-[#1E3954]">
              Workspace Services
            </h2>
          </div>

          <Services />
        </section>

        <section className="pb-16 md:pb-24 bg-[#F9FAFC]">
          <FloorPlan />
          {/* <FloorSketcher />  */}
        </section>
      </div>

      {/* Cta Area */}
      <div className="relative">
        <div className="py-16 md:py-24 container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <Fade
              delay={1e2}
              className="w-full"
              cascade
              triggerOnce
              damping={1e-1}
            >
              <h2 className="text-[24px] text-white md:text-4xl font-bold text-center">
                Connect with us
              </h2>

              <p className="text-center text-sm text-white md:text-lg my-3 md:my-5">
                Subscribe to our e-mail list and stay up-to-date with all our
                news.
              </p>

              <div className="w-full md:w-7/12 mx-auto bg-white rounded-full mt-6 p-2 flex items-center justify-between">
                <input
                  type="email"
                  placeholder="Sign up to your newsletter"
                  className="w-8/12 text-[13px] md:text-base md:w-9/12 border-none outline-none pl-2 md:pl-8 rounded-l-full"
                />

                <button className="md:w-auto bg-teal-500 px-4 md:px-6 py-2 md:py-3 text-white text-[13px] md:text-base rounded-full">
                  Sign Up
                </button>
              </div>
            </Fade>
          </div>

          <Fade
            delay={1e2}
            cascade
            triggerOnce
            damping={1e-1}
            className="absolute top-0 left-0 -z-50 w-full h-full overflow-hidden pointer-events-none"
          >
            <div
              className="w-full h-full fixed bottom-0 left-0 bg-cover bg-no-repeat overflow-hidden pointer-events-none"
              style={{
                backgroundPosition: "center",
                backgroundImage: `url(${images.banner3})`,
              }}
            ></div>
          </Fade>
        </div>
      </div>
    </>
  );
}