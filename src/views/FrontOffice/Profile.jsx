import { useEffect, useState } from "react";
import images from "../../assets/img/assets";
import { Fade } from "react-awesome-reveal";
import axios from "../../api/axios";

const Profile_URL = "/me";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      const token = sessionStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token.replace(/"/g, "")}` },
      };

      console.log("Token:", token);

      try {
        const response = await axios.get(Profile_URL, config);
        setUser(response.data);
        setLoading(false);

        console.log("User data:", response.data);
      } catch (error) {
        if (error.message === "Network Error" && !error.response) {
          // It's a network error
          console.error("Network error occurred:", error);
          setLoading(false);
        } else {
          // Some other error occurred
          console.error("An error occurred:", error);
          setLoading(false);
        }
      }
    }

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-teal-500"></div>
      </div>
    );
  }

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
        <div className="h-[250px] md:h-[400px] flex justify-center items-center pt-20 md:pt-36">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content text-center">
                <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                  <h2 className="text-white uppercase font-semibold mb-1 md:mb-3 text-[24px] md:text-4xl 2xl:text-5xl">
                    Your Profile Details
                  </h2>
                  <ul className="flex justify-center items-center text-white 2xl:text-2xl font-[500]">
                    <li>
                      <a href="/" className="hover:text-black">
                        Home
                      </a>
                    </li>
                    <span className="mx-2">&gt;</span>
                    <li>Profile</li>
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      {/* Booking Section Details */}
      <section className="md:w-full 2xl:w-9/12 py-14 md:py-24 mx-auto px-4 md:px-12">
        <div className="rounded-[4px] bg-white">
          <div className="shadow-xl pb-5 rounded-[4px] text-gray-900">
            <div className="rounded-t-[4px] h-32 2xl:h-56 overflow-hidden">
              <img
                className="object-cover object-top w-full"
                src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Mountain"
              />
            </div>

            <div className="mx-auto w-28 h-28 md:w-32 md:h-32 2xl:w-36 2xl:h-36 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center w-full h-full"
                src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Woman looking front"
              />
            </div>

            <div className="text-center mt-2">
              <h2 className="font-semibold 2xl:text-2xl">{user.name}</h2>
              <div className="flex justify-center space-x-2">
                <p className="text-sm md:text-base 2xl:text-2xl text-gray-500">
                  {user.phone ? user.phone : "No Phone Number Added"}
                </p>
                {/* <div className="rounded-full border text-[11px] px-[8px] py-[3px] font-semibold"></div> */}
              </div>
            </div>

            <ul className="w-full md:w-1/5 mx-auto py-4 mt-2 2xl:text-2xl text-gray-700 flex items-center justify-around">
              <li className="flex flex-col items-center justify-around">
                <svg
                  className="w-4 2xl:w-8 fill-current text-blue-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <div>2k</div>
              </li>
              <li className="flex flex-col items-center justify-between">
                <svg
                  className="w-4 2xl:w-8 fill-current text-blue-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                </svg>
                <div>10k</div>
              </li>
              <li className="flex flex-col items-center justify-around">
                <svg
                  className="w-4 2xl:w-8 fill-current text-blue-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                <div>15</div>
              </li>
            </ul>

            <div className="mx-6 mt-10">
              <h4 className="font-semibold 2xl:text-2xl">Personal info</h4>

              <div className="mt-6 md:mt-3 card-body">
                <div className="flex flex-wrap gap-1  items-center mt-2">
                  <div className="flex items-center mr-2">
                    <svg
                      className="w-5 h-5 2xl:w-6 2xl:h-6 -ml-1 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>

                    <label className="font-semibold 2xl:text-2xl">
                      Email :
                    </label>
                  </div>
                  <span className="text-gray-500 2xl:text-2xl">
                    {user.email}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 items-center mt-2">
                  <div className="flex items-center mr-2">
                    <svg
                      className="w-5 h-5 2xl:w-6 2xl:h-6 -ml-1 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>

                    <label className="font-semibold 2xl:text-2xl">
                      Phone :
                    </label>
                  </div>
                  <span className="text-gray-500 2xl:text-2xl">
                    {user.phone ? user.phone : "No Phone Number Added"}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 items-center mt-2">
                  <div className="flex items-center mr-2">
                    <svg
                      className="w-5 h-5 2xl:w-6 2xl:h-6 -ml-1 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>

                    <label className="font-semibold 2xl:text-2xl">
                      CreatedAT :
                    </label>
                  </div>
                  <span className="text-gray-500 2xl:text-2xl">
                    {new Date(user.created_at).toLocaleString()}
                  </span>
                </div>

                <div className="flex md:justify-end mt-2">
                  <div className="flex justify-between gap-3 items-center">
                    <button className="text-sm 2xl:text-2xl text-center rounded-[8px] bg-blue-600 hover:shadow-lg font-[500] text-white px-4 py-2 2xl:px-8 2xl:py-3">
                      Edit
                    </button>

                    <button className="text-sm 2xl:text-2xl text-center rounded-[8px] bg-red-600 hover:shadow-lg font-[500] text-white px-4 py-2 2xl:px-8 2xl:py-3">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <main className="md:mx-8 my-8 pt-6 border-t pb-10 px-4 md:px-[30px]">
              <div className="flex items-center justify-between py-5 lg:py-6">
                <div className="flex items-center space-x-1">
                  <h2 className="text-xl 2xl:text-3xl font-medium text-slate-700 line-clamp-1 lg:text-[23px]">
                    Recent Reservations
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-3 lg:gap-6">
                {/* card item */}
                <div className="border-2 rounded-lg shadow-lg bg-white">
                  <div className="p-2.5">
                    <img
                      src={images.workspace1}
                      className="h-48 2xl:h-72 w-full rounded-lg object-cover object-center"
                      alt="image"
                    />
                  </div>
                  <div className="flex grow flex-col px-4 pb-5 pt-1 text-center sm:px-5">
                    <div className="mt-1">
                      <a
                        href="#"
                        className="text-lg 2xl:text-[28px] font-medium text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-100 dark:hover:text-blue-300 dark:focus:text-blue-300"
                      >
                        Private Office
                      </a>
                    </div>

                    <hr className="my-2" />

                    <p className="my-2 grow 2xl:text-2xl 2xl:leading-[45px] text-gray-500 text-left line-clamp-3">
                      Our private offices are perfect for teams of 1-100 and are
                      fully serviced so you can focus on your business.
                    </p>

                    <div>
                      <a
                        href=""
                        className="block bg-teal-500 hover:bg-teal-600 transition-all duration-500 text-white font-[500] px-6 py-3 2xl:px-8 2xl:py-5 2xl:text-2xl mt-4"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>

                {/* card item */}
                <div className="border-2 rounded-lg shadow-lg bg-white">
                  <div className="p-2.5">
                    <img
                      src={images.workspace3}
                      className="h-48 2xl:h-72 w-full rounded-lg object-cover object-center"
                      alt="image"
                    />
                  </div>
                  <div className="flex grow flex-col px-4 pb-5 pt-1 text-center sm:px-5">
                    <div className="mt-1">
                      <a
                        href="#"
                        className="text-lg 2xl:text-[28px] font-medium text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-100 dark:hover:text-blue-300 dark:focus:text-blue-300"
                      >
                        Private Office
                      </a>
                    </div>

                    <hr className="my-2" />

                    <p className="my-2 grow 2xl:text-2xl 2xl:leading-[45px] text-gray-500 text-left line-clamp-3">
                      Our private offices are perfect for teams of 1-100 and are
                      fully serviced so you can focus on your business.
                    </p>

                    <div>
                      <a
                        href=""
                        className="block bg-teal-500 hover:bg-teal-600 transition-all duration-500 text-white font-[500] px-6 py-3 2xl:px-8 2xl:py-5 2xl:text-2xl mt-4"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>

                {/* card item */}
                <div className="border-2 rounded-lg shadow-lg bg-white">
                  <div className="p-2.5">
                    <img
                      src={images.workspace2}
                      className="h-48 2xl:h-72 w-full rounded-lg object-cover object-center"
                      alt="image"
                    />
                  </div>
                  <div className="flex grow flex-col px-4 pb-5 pt-1 text-center sm:px-5">
                    <div className="mt-1">
                      <a
                        href="#"
                        className="text-lg 2xl:text-[28px] font-medium text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-100 dark:hover:text-blue-300 dark:focus:text-blue-300"
                      >
                        Private Office
                      </a>
                    </div>

                    <hr className="my-2" />

                    <p className="my-2 grow 2xl:text-2xl 2xl:leading-[45px] text-gray-500 text-left line-clamp-3">
                      Our private offices are perfect for teams of 1-100 and are
                      fully serviced so you can focus on your business.
                    </p>

                    <div>
                      <a
                        href=""
                        className="block bg-teal-500 hover:bg-teal-600 transition-all duration-500 text-white font-[500] px-6 py-3 2xl:px-8 2xl:py-5 2xl:text-2xl mt-4"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
