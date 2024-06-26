import React from "react";
import { NavLink } from "react-router-dom";
export default () => {
  return (
    <React.Fragment>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mr-2">
          <NavLink
            to="./"
            aria-current="page"
            className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
          >
            Dashboard
          </NavLink>
        </li>
        <li className="mr-2">
          <NavLink
            to="syllabus"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Syllabus
          </NavLink>
        </li>
        <li className="mr-2">
          <NavLink
            to="modules"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Modules
          </NavLink>
        </li>
        <li className="mr-2">
          <NavLink
            to="assignments"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Assignments
          </NavLink>
        </li>
        <li className="mr-2">
          <NavLink
            to="grades"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Grades
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};
