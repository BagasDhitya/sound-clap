import React, { FC } from "react";

interface Button {
  id: string;
  label?: string;
  onClick?: React.MouseEventHandler;
}

const Button: FC<Button> = ({ id, label, onClick }) => {
  return (
    <button
      id={id}
      className="w-full h-full bg-orange-clap flex justify-center text-white"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
