import React from "react";

const Button = (props) => {
  return (
    <button
      className="h-fit font-semibold text-white font-[Poppins] py-3 px-8 border-2 rounded-full md:ml-8 hover:bg-[#55BBAF]  hover:border-none
    duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
