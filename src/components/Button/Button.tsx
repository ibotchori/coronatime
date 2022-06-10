import React, { FC } from "react";

interface Props {
  title?: string;
  type?: string;
}

const Button: FC<Props> = ({ title, type }) => {
  return (
    <button
      type="submit"
      className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 uppercase font-bold rounded-lg text-md w-full  px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  mr-10"
    >
      {title}
    </button>
  );
};

export default Button;
