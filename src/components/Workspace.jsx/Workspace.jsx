import { useState, useEffect } from "react";
import axios from "../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../../components/Pagination";
import LinkButton from "../Buttons/LinkButton";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Fade, Slide } from "react-awesome-reveal";
import images from "../../assets/img/assets";

export default function Workspace() {
  const [workspaces, setWorkspace] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const WORKSPACE_URL = "/espaces";
  const itemsPerPage = 2;

  useEffect(() => {
    axios
      .get(WORKSPACE_URL)
      .then((response) => {
        setWorkspace(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setLoading(false);
      });
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentWorkspaces = workspaces.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(workspaces.length / itemsPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-teal-500"></div>
      </div>
    );
  }

  return (
    <>
      {/* <!-- workspace item --> */}
      {currentWorkspaces.map((workspaceItem, index) => (
        <Slide
          key={index}
          delay={1e2}
          direction={index % 2 === 0 ? "right" : "left"}
          triggerOnce
          cascade
          damping={1e-1}
        >
          <div
            className={`flex ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            } flex-wrap`}
          >
            <img
              src={index % 2 === 0 ? images.workspace1 : images.workspace2}
              className="w-full md:w-1/2"
              alt="workspace image"
            />

            {/* workspace Description */}
            <div className="w-full md:w-1/2 workspace-content p-6 pb-16 md:p-16">
              <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                <h4 className="text-[22px] md:text-2xl 2xl:text-4xl font-semibold text-[#1E3954] mb-2 2xl:mb-4">
                  {workspaceItem.category.name}
                </h4>
                {/* team */}
                <div className="pb-4 flex items-center border-b">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="size-5 2xl:size-8 text-[#1E3954]"
                  />
                  <p className="pl-3 font-semibold text-gray-500 text-sm 2xl:text-xl">
                    Ideal for team size {workspaceItem.capacity} people
                  </p>
                </div>

                <p className="text-gray-500 text-sm 2xl:text-xl leading-8 2xl:leading-[50px] md:text-lg mt-5">
                  {workspaceItem.description}
                </p>

                <p className="uppercase text-sm md:text-base 2xl:text-xl font-bold mt-5">
                  From{" "}
                  <span className="text-teal-500">
                    ${workspaceItem.price}
                    {workspaceItem.category.name === "Salle de reunion"
                      ? "/hr"
                      : "/mo"}
                  </span>
                </p>

                {/* button */}
                <LinkButton className="md:py-4 text-white md:px-12 uppercase rounded-full mt-6 md:mt-8">
                  Learn More
                </LinkButton>
              </Fade>
            </div>
          </div>
        </Slide>
      ))}

      <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
        {/* Pagination */}
        <div className="md:mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </Fade>
    </>
  );
}