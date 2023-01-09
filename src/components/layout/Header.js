import Navigation from "./Navigation";
import { BiSearch } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  return (
    <header className="flex w-full bg-red-100 h-28 justify-between items-center px-8 sticky">
      <Navigation />
      <div className="flex  items-center justify-between bg-yellow-100 w-1/2 ml-7 px-4">
        <div><BiSearch className="w-6 h-6"/></div>
        <div className="flex flex-col text-lg">
          <a className="underline">Contact Us</a>
          <span>1800 667 636</span>
        </div>
        <div><TbWorld className="w-6 h-6"/></div>
        <div className="flex items-center">
          <div><FaUserAlt/></div>
          <a className="ml-1 text-lg font-medium">Login</a>
        </div>
        <button className="bg-green-700 text-white font-bold rounded-md py-3 px-8">Try For Free</button>
      </div>
    </header>
  );
};

export default Header;
