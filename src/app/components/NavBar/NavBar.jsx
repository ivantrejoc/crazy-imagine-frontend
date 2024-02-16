import { FaYoutube } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="bg-white w-full inline-flex justify-between shadow dark:bg-gray-800">
      <div className="w-fit h-fit flex flex-row px-6 py-2 ml-4 my-auto rounded-lg">
        <FaYoutube className="w-12 h-12" />
        <h3 className="text-2xl font-semibold pl-3 pt-2">Youtube</h3>
      </div>
      <div className="container flex items-center justify-center p-6 gap-3 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <a
          href="/"
          className= "focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          home
        </a>

        <a
          href="/popular"
          className= "focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Popular
        </a>

        <a
          href="/month"
          className= "focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Videos of Month
        </a>

        <a
          href="/history"
          className= "focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          History
        </a>

        <a
          href="/login"
          className= "focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Inicia Sesión
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
