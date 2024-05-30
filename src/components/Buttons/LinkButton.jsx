const LinkButton = ({ children, className }) => {
  const defaultClasses =
    "inline-block h-fit text-white px-8 py-3 md:py-4 md:px-12 text-sm md:text-base rounded-full bg-black hover:bg-gray-800 duration-200";

  return (
    <a
      href="/"
      className={`${defaultClasses} ${className}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
