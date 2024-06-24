import { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Fade } from "react-awesome-reveal";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const SERVICES_URL = "/services";

  useEffect(() => {
    axios.get(SERVICES_URL)
      .then((response) => {
        setServices(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-teal-500"></div>
      </div>
    );
  }

  return (
    <>
      {/* Services Area */}
      <div className="flex flex-wrap">
        {services.map((service, index) => (
          <div
            key={index}
            className="card w-full md:w-1/4 p-4 py-8 text-center"
          >
            <Fade
              delay={1e2}
              direction="top-left"
              triggerOnce
              cascade
              damping={1e-1}
            >
              <figure className="figure w-fit p-6 mb-4 bg-[#EEF8F7] mx-auto">
                <svg
                  className="card-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                ></svg>
                <img
                  className="card-icon"
                  src={service.image}
                  alt={service.image}
                />
              </figure>

              <h3 className=" font-semibold text-[#1E3954] 2xl:text-xl mb-4">
                {service.name}
              </h3>
              <p className="text-gray-500 text-base md:text-lg 2xl:text-2xl">
                We offer you excellent rates of return paid either monthl.
              </p>
            </Fade>
          </div>
        ))}
      </div>
    </>
  );
}