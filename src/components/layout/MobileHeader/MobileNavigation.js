import { NavLink } from "react-router-dom";
import image from "../../../assets/images/mobile_logo.png";
import { FaBars } from "react-icons/fa";
const MobileNavigation = () => {
  return (
    <nav className=" flex items-center xl:hidden w-2/3 mr-16">
      <div className="mr-7">
        <FaBars className="w-5 h-5" />
      </div>
      <ul className="flex   text-lg font-medium text-slate-800 justify-between items-center">
        <NavLink to="/" className="cursor-pointer shrink-0">
          <img src={image} alt="logo" className="w-11 h-15 " />
        </NavLink>
      </ul>
    </nav>
  );
};

export default MobileNavigation;
