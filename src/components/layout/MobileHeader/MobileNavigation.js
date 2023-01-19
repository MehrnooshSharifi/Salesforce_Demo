import { NavLink } from "react-router-dom";
import image from "../../../assets/images/mobile_logo.png";
import { FaBars } from "react-icons/fa";
import Popup from "reactjs-popup";
import Product from "../NavigationItem/Products";
import Company from "../NavigationItem/Company";
import Industries from "../NavigationItem/Industries";
import Learning from "../NavigationItem/Learning";
import Support from "../NavigationItem/Support";
import Salesforce from "../NavigationItem/Salesforce";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
const items = [
  { id: 1, name: "Product", component: <Product /> },
  { id: 2, name: "Industries", component: <Industries /> },
  { id: 3, name: "Learning", component: <Learning /> },
  { id: 4, name: "Support", component: <Support /> },
  { id: 5, name: "Company", component: <Company /> },
  { id: 6, name: "Salesforce", component: <Salesforce /> },
];
const MobileNavigation = () => {
  const [isShow, setIsShow] = useState(false);
  const clickHandler = () => {
    setIsShow(!isShow);
  };
  return (
    <nav className=" flex items-center xl:hidden w-2/3 mr-16 relative">
      <div
        className="mr-7 flex flex-col items-center justify-between"
        onClick={clickHandler}
      >
        <FaBars className={`w-5 h-5 ${!isShow ? "block" : "hidden"}`} />
        <AiOutlineClose className={` w-5 h-5 ${isShow ? "block" : "hidden"}`} />
      </div>
      {isShow ? (
        <div className=" flex flex-col absolute mt-[378px] bg-white shadow-lg rounded-md overflow-y-auto h-80 p-4 ">
          {items.map((item) => {
            return (
              <Popup
                trigger={
                  <button className="cursor-pointer text-lg font-bold hover:text-blue-600 py-2">
                    <div className="flex items-center justify-between w-80">
                      <div>{item.name}</div>
                      <AiOutlineRight/>
                    </div>
                  </button>
                }
                position="right center"
                on="click"
                closeOnDocumentClick
                mouseLeaveDelay={100}
                mouseEnterDelay={0}
                contentStyle={{ padding: "0px", border: "none" }}
                arrow={false}
                key={item.id}
              >
                <div isShow={isShow} className="w-auto -ml-56 bg-gray-50 rounded-md shadow-lg  h-28 mt-14 p-4 overflow-auto ">
                  {item.component}
                </div>
              </Popup>
            );
          })}
          <div className="mt-6">
            <div className="cursor-pointer py-2 px-3 flex items-center hover:bg-blue-100 hover:rounded-3xl hover:text-blue-600">
              <BsFillTelephoneFill />
              <NavLink
                to="/"
                className=" ml-1 font-medium cursor-pointer hover:text-blue-600"
              >
                Contact
              </NavLink>
            </div>
            <div className="cursor-pointer py-2 px-3 flex items-center hover:bg-blue-100 hover:rounded-3xl hover:text-blue-600">
              <FaUserAlt />
              <NavLink className="ml-1 font-medium">Login</NavLink>
            </div>
            <div className="cursor-pointer py-2 px-3 flex items-center hover:bg-blue-100 hover:rounded-3xl hover:text-blue-600">
              <TbWorld className="w-6 h-6  hover:text-blue-600" />
              <NavLink className="ml-1 font-medium">Region</NavLink>
            </div>
            <span className="text-sm flex justify-center mt-2 font-bold">09102456878 (IR)</span>
          </div>
        </div>
      ) : (
        ""
      )}
      <ul className="flex   text-lg font-medium text-slate-800 justify-between items-center">
        <NavLink to="/" className="cursor-pointer shrink-0">
          <img src={image} alt="logo" className="w-11 h-15 " />
        </NavLink>
      </ul>
    </nav>
  );
};

export default MobileNavigation;
