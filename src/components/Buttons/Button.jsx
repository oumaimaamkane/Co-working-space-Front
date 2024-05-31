const Button = ({ children, className }) => {
  const defaultClasses =
    "h-fit text-white px-8 py-3 text-sm md:text-base border-2 rounded-full md:ml-8 hover:bg-[#030303]  hover:border-transparent duration-200";

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
