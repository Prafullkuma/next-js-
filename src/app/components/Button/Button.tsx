import React from "react";

interface IButtonProps {
  children: React.ReactNode;
}
const Button = ({ children }: IButtonProps) => {
  return (
    <button className="bg-black text-white p-2 rounded-md">{children}</button>
  );
};

export default Button;
