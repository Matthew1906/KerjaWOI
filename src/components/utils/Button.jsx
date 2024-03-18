'use client'

const Button = ({ type, children, color, onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group m-1 bg-black rounded-md bg-opacity-70 w-fit ${className}`}
    >
      <div
        className={`bg-${color} font-bold text-white py-2 px-8 rounded-md relative -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform`}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
