import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  type?: string;
  id?: string;
  placeholder?: string;
  errorMessage?: string;
  name?: string;
  register?: any;
}

const Input: React.FC<Props> = ({
  title,
  type,
  id,
  placeholder,
  errorMessage,
  register,
  name,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={title}
        className="block mb-2 text-md font-bold text-gray-900 dark:text-gray-300"
      >
        {title}
      </label>
      <input
        type={type}
        id={id}
        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        {...register(name)}
      />
      {errorMessage && (
        <div className="h-[0.1px] flex text-[10px] sm:text-xs ">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"
              fill="#CC1E1E"
            />
          </svg>
          <p className="pt-0.5 sm:pt-0 pl-2 text-red-600">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
