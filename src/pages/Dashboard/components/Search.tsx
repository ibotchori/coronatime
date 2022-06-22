import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const Search = (props: Props) => {
  const { t } = useTranslation();
  return (
    <form>
      <div className="relative max-w-[300px] px-0 sm:mx-10 md:mx-28 sm:my-10 ">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5  text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 sm:bg-gray-50 rounded-lg sm:border border-gray-300 sm:focus:border-gray-400 sm:focus:ring-1 sm:focus:ring-gray-400 focus:outline-none"
          placeholder={t("search")}
        />
      </div>
    </form>
  );
};

export default Search;
