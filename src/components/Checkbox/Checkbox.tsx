import React from "react";

type Props = {
  label?: string;
  anchor?: string;
};

function Checkbox({ label, anchor }: Props) {
  return (
    <div className="flex justify-between mb-6">
      <div className="flex ">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      </div>
      {anchor && (
        <a className="text-sm font-bold text-blue-600" href="">
          {anchor}
        </a>
      )}
    </div>
  );
}

export default Checkbox;
