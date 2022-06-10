import React from "react";

type Props = {
  title?: string;
  type?: string;
  id?: string;
  placeholder?: string;
};

const Input = (props: Props) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={props.title}
        className="block mb-2 text-md font-bold text-gray-900 dark:text-gray-300"
      >
        {props.title}
      </label>
      <input
        type={props.type}
        id={props.id}
        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
