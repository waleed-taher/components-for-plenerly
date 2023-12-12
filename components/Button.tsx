import React from "react";

interface ButtonProps {
  title: string;
  icons: React.ReactNode;
}

const Button = ({ title, icons }: ButtonProps) => {
  return (
    <button className="flex items-center justify-center gap-4 text-lg bg-orange-400 rounded-md py-2 w-3/4 sm:w-3/5 mx-auto md:w-1/2 md:px-2 ">
      <span>{title}</span>
      {icons}
    </button>
  );
};

export default Button;
