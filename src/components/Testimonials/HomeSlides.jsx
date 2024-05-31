import { useState, useEffect } from "react";

import PropTypes from "prop-types";

export default function HomeSlides({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, slides.length]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
    </div>
  );
}

HomeSlides.propTypes = {
  children: PropTypes.node.isRequired,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
};
