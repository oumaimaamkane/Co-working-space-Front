import { Fade } from "react-awesome-reveal";
import images from "../../assets/img/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClone, faXmark } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "../../components/Buttons/LinkButton";
import Testimonials from "../../components/Shared/Testimonials";

function Packs() {
  return (
    <div>
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
                  Our Packs
                </h2>
                <ul className="flex justify-center items-center text-white 2xl:text-2xl font-[500]">
                  <li>
                    <a href="/" className="hover:text-black">
                      Home
                    </a>
                  </li>
                  <span className="mx-2">&gt;</span>
                  <li>Packs</li>
                </ul>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>

      {/* Membership options Area */}
      <section className="bg-white pt-24">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col items-center justify-center">
            <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
              <h2 className="text-[24px] text-[#1E3954] md:text-[50px] font-semibold text-center mb-4">
                Membership options
              </h2>
              <FontAwesomeIcon
                icon={faClone}
                className="size-8 w-full text-[#1E3954] mx-auto text-2xl"
              />
              <p className="w-[280px] 2xl:w-[1200px] text-gray-500 text-center mx-auto text-sm md:w-[795px] md:text-lg 2xl:text-2xl leading-8 2xl:leading-[50px] my-8 mb-12 md:mb-20">
                Beautiful setting, abundant natural light, amazing comfort,
                super-fast internet, industrial style interior, custom made
                desks, state-of-the-art AC system, top notch location,…
              </p>
            </Fade>
          </div>
        </div>
      </section>

      {/* Membership options Area */}
      <section
        className="px-4 md:px-12 2xl:px-24  bg-cover leading-tight bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.cowSpaceImg2})` }}
      >
        <div className=" mx-auto py-14 md:py-28">
          <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
            <h2 className="text-[24px] md:text-[50px] font-semibold text-center mb-4 text-white">
              Membership options
            </h2>
            <FontAwesomeIcon
              icon={faClone}
              className="size-8 w-full mx-auto text-white text-2xl"
            />
            <p className="text-center mx-auto text-sm md:w-[795px] 2xl:w-[1200px] md:text-lg 2xl:text-2xl 2xl:leading-[50px] leading-8 text-white my-8 mb-12 md:mb-20">
              Beautiful setting, abundant natural light, amazing comfort,
              super-fast internet, industrial style interior, custom made desks,
              state-of-the-art AC system, top notch location,…
            </p>
          </Fade>

          <div className="memdership-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* membership single item */}
            <div className="py-8 md:py-12 col-span-1 md:col-span-4 lg:grid-cols-6 px-6 md:px-8 rounded-xl transition-border duration-200 ease-in border border-[#55BBAF] md:border-0 md:hover:border hover:border-[#55BBAF]">
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <h3 className="text-lg md:text-2xl 2xl:text-4xl font-semibold text-white">
                  Desk
                </h3>
                <div className="price flex items-center space-x-2 text-[#f6ec26] mt-4 md:mt-8 rounded-md">
                  <span className="text-lg md:text-2xl 2xl:text-4xl font-bold">
                    $
                  </span>
                  <span className="text-[30px] md:text-5xl font-semibold">
                    29
                  </span>
                  <span className="text-base md:text-lg font-semibold">
                    /mo
                  </span>
                </div>

                <p className="mt-3 md:mt-6 text-sm md:text-base leading-8 md:leading-[35px] 2xl:text-2xl 2xl:leading-[50px] text-white">
                  Monday through Friday access to open workspace with conference
                  room bookings available.
                </p>

                {/* benifits */}
                <div className="mt-6 mb-10 pr-4">
                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#55BBAF] size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm md:text-base 2xl:text-2xl text-white ml-4">
                      Mix of sitting and standing workspaces
                    </p>
                  </li>

                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#55BBAF] size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm md:text-base 2xl:text-2xl text-white ml-4">
                      24/7 Access
                    </p>
                  </li>

                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#55BBAF] size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm md:text-base 2xl:text-2xl text-white ml-4">
                      Coffee, tea, still, and sparkling water
                    </p>
                  </li>

                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-red-600 size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm md:text-base 2xl:text-2xl text-white ml-4">
                      Access to {`community's`} online member network
                    </p>
                  </li>

                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-red-600 size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm md:text-base 2xl:text-2xl text-white ml-4">
                      Fast Wi-Fi and prints
                    </p>
                  </li>
                </div>

                {/* button */}
                <LinkButton className="text-white">Join Now</LinkButton>
              </Fade>
            </div>

            {/* membership single item */}
            <div className="py-8 md:py-12 col-span-1 md:col-span-4 lg:grid-cols-6 px-6 md:px-8 relative overflow-hidden transition-border duration-200 ease-in border border-[#55697C] hover:rounded-xl hover:border-[#55BBAF]">
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <div>
                  <span className="bg-green-500 absolute w-8 h-60 2xl:w-12 -top-16 translate-x-16 right-20 2xl:right-24 -rotate-[50deg]"></span>
                  <span className="absolute uppercase top-8 right-8 2xl:right-9 2xl:top-9 rotate-[40deg] font-bold text-sm 2xl:text-2xl text-white">
                    Best
                  </span>
                </div>

                <h3 className="text-lg md:text-2xl 2xl:text-4xl font-semibold text-white">
                  Virtual
                </h3>

                <div className="price flex items-center space-x-2 text-[#f6ec26] mt-4 md:mt-8 rounded-md">
                  <span className="text-lg md:text-2xl 2xl:text-4xl font-bold">
                    $
                  </span>
                  <span className="text-[30px] md:text-5xl font-semibold">
                    60
                  </span>
                  <span className="text-base md:text-lg font-semibold">
                    /mo
                  </span>
                </div>

                <p className="mt-3 md:mt-6 text-sm md:text-base leading-8 md:leading-[35px] 2xl:text-2xl 2xl:leading-[50px] text-white">
                  Send and receive packages and mail from our midtown location.
                  Conference room bookings available.
                </p>

                {/* benifits */}
                <div className="mt-6 mb-10 pr-4">
                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#55BBAF] size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm leading-7 md:text-base 2xl:text-2xl text-white ml-4">
                      Mix of sitting and standing workspaces
                    </p>
                  </li>

                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#55BBAF] size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm leading-7 md:text-base 2xl:text-2xl text-white ml-4">
                      24/7 Access
                    </p>
                  </li>

                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#55BBAF] size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm leading-7 md:text-base 2xl:text-2xl text-white ml-4">
                      Coffee, tea, still, and sparkling water
                    </p>
                  </li>

                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#55BBAF] size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm leading-7 md:text-base 2xl:text-2xl text-white ml-4">
                      Access to {`community's`} online member network
                    </p>
                  </li>

                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-red-600 size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm leading-7 md:text-base 2xl:text-2xl text-white ml-4">
                      Fast Wi-Fi and prints
                    </p>
                  </li>
                </div>

                {/* button */}
                <LinkButton className="text-white">Join Now</LinkButton>
              </Fade>
            </div>

            {/* membership single item */}
            <div className="py-8 md:py-12 col-span-1 md:col-span-4 lg:grid-cols-6 px-6 md:px-8 rounded-xl transition-border duration-200 ease-in border border-[#55BBAF] md:border-0 md:hover:border hover:border-[#55BBAF]">
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <h3 className="text-lg md:text-2xl 2xl:text-4xl font-semibold text-white">
                  Office
                </h3>
                <div className="price flex items-center space-x-2 text-[#f6ec26] mt-4 md:mt-8 rounded-md">
                  <span className="text-lg md:text-2xl 2xl:text-4xl font-bold">
                    $
                  </span>
                  <span className="text-[30px] md:text-5xl font-semibold">
                    90
                  </span>
                  <span className="text-base md:text-lg font-semibold ">
                    /mo
                  </span>
                </div>

                <p className="mt-3 md:mt-6 text-sm md:text-base leading-8 md:leading-[35px] 2xl:text-2xl 2xl:leading-[50px] text-white">
                  Monday through Friday access to open workspace with conference
                  room bookings available.
                </p>

                {/* benifits */}
                <div className="mt-6 mb-10 pr-4">
                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#55BBAF] size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm leading-7 md:text-base 2xl:text-2xl text-white ml-4">
                      Mix of sitting and standing workspaces
                    </p>
                  </li>

                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#55BBAF] size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm leading-7 md:text-base 2xl:text-2xl text-white ml-4">
                      24/7 Access
                    </p>
                  </li>

                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#55BBAF] size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm leading-7 md:text-base 2xl:text-2xl text-white ml-4">
                      Coffee, tea, still, and sparkling water
                    </p>
                  </li>

                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#55BBAF] size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm leading-7 md:text-base 2xl:text-2xl text-white ml-4">
                      Access to {`community's`} online member network
                    </p>
                  </li>

                  <li className="py-3 flex">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#55BBAF] size-[20px] 2xl:size-[26px]"
                    />
                    <p className="text-sm leading-7 md:text-base 2xl:text-2xl text-white ml-4">
                      Fast Wi-Fi and prints
                    </p>
                  </li>
                </div>

                {/* button */}
                <LinkButton className="text-white">Join Now</LinkButton>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-24">
        <Testimonials />
      </section>

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

              <p className="text-center text-sm text-white md:text-lg my-3 2xl:text-xl md:my-5">
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

export default Packs;
