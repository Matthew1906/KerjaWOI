'use client'

const Title = ({ children, size, className='' }) => {
  return (
    <h1
      className={`${
        size === "lg"
          ? "text-2xl md:text-4xl"
          : size === "md"
          ? "text-2xl md:text-3xl"
          : "text-xl md:text-2xl"
      } text-black ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
