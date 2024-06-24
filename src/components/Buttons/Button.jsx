const Button = ({ children, className }) => {
  const defaultClasses =
    "h-fit text-white px-8 py-3 2xl:py-4 2xl:px-10 text-sm md:text-base 2xl:text-2xl rounded-full border-2 hover:bg-[#030303]";

  return (
    <button
      href="/"
      className={`${defaultClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
