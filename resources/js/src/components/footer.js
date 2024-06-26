import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <section>
      <footer className="bg-white rounded-lg  dark:bg-gray-900 m-4">
        <div className="w-full  mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a className="flex items-center mb-4 sm:mb-0">
              <span className="self-center  text-2xl font-semibold whitespace-nowrap dark:text-white">
                Skillify
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to={"/about"} className="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <Link to={"/contact"} className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Skillify™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </section>
  );
}
