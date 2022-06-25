import React from "react";
import { Link } from "react-router-dom";

type Props = {
  label?: string;
  anchor?: string;
};

function Checkbox({ label, anchor }: Props) {
  return (
    <div className="flex justify-between mb-6 pt-1 text-sm font-bold">
      <div className="flex items-center justify-center ">
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
          className="ml-2 text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      </div>
      {anchor && (
        <Link to="/reset-password" className="text-blue-600">
          {anchor}
        </Link>
      )}
    </div>
  );
}

export default Checkbox;
