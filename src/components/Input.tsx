import React, { FC } from "react";

interface Input {
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<Input> = ({ id, placeholder, value, onChange }) => {
  return (
    <input
      id={id}
      className="w-full h-14 shadow-md bg-white p-3 rounded-md"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default Input;
