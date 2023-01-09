import Navigation from "./Navigation";
import { BiSearch } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex w-full h-28 justify-between items-center px-8 sticky top-0 bg-white">
      <Navigation />
      <div className="flex  items-center justify-between  w-1/2 ml-7 px-4">
        <div className=" w-10 h-10 hover:rounded-full hover:bg-blue-100 flex justify-center items-center cursor-pointer ">
          <BiSearch className="w-6 h-6 hover:text-blue-600" />
        </div>
        <div className="flex flex-col text-lg justify-center items-center">
          <NavLink to="/"  className="underline cursor-pointer hover:text-blue-600">
            Contact Us
          </NavLink>
          <span>1800 667 636</span>
        </div>
        <div className=" w-10 h-10 hover:rounded-full hover:bg-blue-100 flex justify-center items-center cursor-pointer ">
          <TbWorld className="w-6 h-6  hover:text-blue-600" />
        </div>
        <div className="cursor-pointer py-2 px-3 flex items-center hover:bg-blue-100 hover:rounded-3xl hover:text-blue-600 ">
          <div>
            <FaUserAlt />
          </div>
          <NavLink className="ml-1 text-lg font-medium">Login</NavLink>
        </div>
        <button className="bg-green-700 text-white text-lg font-bold rounded-md py-3 px-7">
          Try for free
        </button>
      </div>
    </header>
  );
};

export default Header;
