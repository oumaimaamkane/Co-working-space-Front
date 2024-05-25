import React from 'react'

const LinkButton = (props) => {
  return (
    <a href='/'
      className="h-fit text-white font-[Poppins] py-4 px-12 rounded-full bg-[#55BBAF] hover:bg-[#42938a]
    duration-500"
    >
      {props.children}
    </a>
  );
};

export default LinkButton;
