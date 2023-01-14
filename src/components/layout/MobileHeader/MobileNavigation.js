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
const items = [
  { id: 1, name: "Product", component: <Product /> },
  { id: 2, name: "Industries", component: <Industries /> },
  { id: 3, name: "Learning", component: <Learning /> },
  { id: 4, name: "Support", component: <Support /> },
  { id: 5, name: "Company", component: <Company /> },
  { id: 6, name: "Salesforce", component: <Salesforce /> },
];
const MobileNavigation = () => {
  const clickHandler = () => {
    setIsShow(!isShow);
  };
  const [isShow, setIsShow] = useState(false);
  return (
    <nav className=" flex items-center xl:hidden w-2/3 mr-16 relative">
      <div
        className="mr-7 flex flex-col items-center justify-between"
        onClick={clickHandler}
      >
        <FaBars className={`w-5 h-5 ${!isShow ? "block" : "hidden"}`} />
        <AiOutlineClose className={` w-5 h-5 ${isShow ? "block" : "hidden"}`} />
      </div>
      <div className=" flex flex-col absolute mt-[392px] bg-white border-t ove w-28">
        {isShow
          ? items.map((item) => {
              return (
                <Popup
                  trigger={
                    <button className="cursor-pointer hover:text-blue-600 py-4">
                      {item.name}
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
                  <div className="w-auto bg-white h-28 mt-14 p-4 overflow-auto ">
                    {item.component}
                  </div>
                </Popup>
              );
            })
          : ""}
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
