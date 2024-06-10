import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Slider({ children: slides }) {
  const [curr, setCurr] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(window.innerWidth <= 768 ? 1 : 3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerPage(window.innerWidth <= 768 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goLeft = () => {
    setCurr(curr === 0 ? slides.length - slidesPerPage : curr - slidesPerPage);
  };

  const goRight = () => {
    setCurr(curr === slides.length - slidesPerPage ? 0 : curr + slidesPerPage);
  };

  return (
    <div className="overflow-hidden relative">
      {curr !== 0 && (
        <button
          onClick={goLeft}
          className="absolute z-30 top-[40%] w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full text-white bg-[#030303] hover:hover:bg-gray-800 left-0"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}

      {curr <= slides.length - slidesPerPage - 1 && (
        <button
          onClick={goRight}
          className="absolute z-30 top-[40%] w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full text-white bg-[#030303] hover:hover:bg-gray-800 right-0"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}

      <div
        className="flex md:gap-7 transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100 / slidesPerPage}%)` }}
      >
        {slides}
      </div>
    </div>
  );
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};