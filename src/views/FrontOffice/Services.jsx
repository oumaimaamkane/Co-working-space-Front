import { Fade } from "react-awesome-reveal";
import images from "../../assets/img/assets";
import Services from "../../components/Services/Services";
import Workspace from "../../components/Workspace.jsx/Workspace";
import Benifits from "../../components/Shared/Benifits";


export default function Service() {

  return (
    <div>
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
          <div className="w-full h-[250px] md:h-[400px] flex justify-center items-center pt-20 md:pt-36">
            <div className="w-full">
              <div className="breadcrumb-content mx-auto text-center">
                <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                  <h2 className="text-white uppercase font-semibold mb-1 md:mb-3 text-[24px] md:text-4xl 2xl:text-5xl">
                    Our Services
                  </h2>
                  <ul className="flex justify-center items-center text-white 2xl:text-2xl font-[500]">
                    <li>
                      <a href="/" className="hover:text-black">
                        Home
                      </a>
                    </li>
                    <span className="mx-2">&gt;</span>
                    <li>Services</li>
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
        </Fade>

        {/* Services Area */}
        <section className="bg-white pt-14 md:pt-24 px-4 md:px-12">
          <Services />
        </section>

        {/* work Space Area */}
        <section className="bg-white overflow-hidden coworking-space-area pt-14 md:pt-24">
          {/* <!-- workspace item --> */}
          <Workspace />
        </section>

        {/* Benifits Area */}
        <Benifits />
      </div>

      {/* Cta Area */}
      <section className="relative">
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

              <p className="text-center text-sm 2xl:text-xl text-white md:text-lg my-3 md:my-5">
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

          <div className="absolute top-0 left-0 -z-50 w-full h-full overflow-hidden pointer-events-none">
            <div
              className="w-full h-full fixed bottom-0 left-0 bg-cover bg-no-repeat overflow-hidden pointer-events-none"
              style={{
                backgroundPosition: "center",
                backgroundImage: `url(${images.banner3})`,
              }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}
