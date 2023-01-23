import DesktopNavigation from "./DesktopNavigation";
import { BiSearch } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import Popup from "reactjs-popup";
import { NavLink } from "react-router-dom";
import loginLogo from "../../../assets/images/mobile_logo.png";
const DesktopHeader = () => {
  return (
    <>
      <header className="hidden xl:flex w-full h-28 justify-between items-center px-6 sticky top-0 bg-white ">
        <DesktopNavigation />
        <div className="flex items-center justify-between  w-1/2 ml-7">
          <div className=" w-10 h-10 hover:rounded-full hover:bg-blue-100 flex justify-center items-center cursor-pointer ">
            <BiSearch className="w-6 h-6 hover:text-blue-600" />
          </div>
          <div className="flex flex-col text-lg justify-center items-center">
            <NavLink
              to="/contactUs"
              className="underline cursor-pointer hover:text-blue-600"
            >
              Contact Us
            </NavLink>
            <span>09102456878</span>
          </div>
          <div className="flex w-10 h-10 hover:rounded-full hover:bg-blue-100 justify-center items-center cursor-pointer ">
            <TbWorld className="w-6 h-6  hover:text-blue-600" />
          </div>
          <div className="cursor-pointer py-2 px-3 flex items-center  hover:bg-blue-100 hover:rounded-3xl hover:text-blue-600 mr-2">
            <Popup
              trigger={
                <button className="cursor-pointer hover:text-blue-600 flex flex-row-reverse items-center">
                  Login
                  <FaUserAlt className="mr-1" />
                </button>
              }
              position="bottom center"
              on="hover"
              closeOnDocumentClick
              mouseLeaveDelay={10}
              mouseEnterDelay={0}
              contentStyle={{ padding: "0px", border: "none" }}
              arrow={false}
            >
              <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl mt-5 flex ">
                <div className="flex h-auto flex-col justify-start items-start m-5 p-2">
                  <div className="text-blue-900 font-bold text-lg mb-4">
                    <h3>Login</h3>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-gray-500 mb-2">
                      <p>Product</p>
                    </div>
                    <div className="text-blue-900 flex w-24 justify-between items-center  mb-2 ">
                      <NavLink to="#" className="underline outline-0">
                        Salesforce
                      </NavLink>
                      <img
                        src={loginLogo}
                        alt="loginLogo"
                        className=" w-6 h-4"
                      />
                    </div>
                    <div className="text-blue-900  mb-2">
                      <NavLink to="#" className="underline outline-0">
                        Markrting Cloud
                      </NavLink>
                    </div>
                  </div>
                  <hr className="bg-gray-50 w-full h-0.5 mt-4" />
                  <div className="flex flex-col mt-5">
                    <div className="text-gray-500 mb-2">
                      <p>Trailblazer.me</p>
                    </div>
                    <div className="text-blue-900 w-24  mb-2 ">
                      <NavLink to="#" className="underline outline-0">
                        Trailblazer.me
                      </NavLink>
                    </div>
                    <div className="text-gray-500  mb-2">
                      <p>
                        Access your personal profile, community groups,
                        on-demand learning, events, support, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </div>
          <button className="bg-green-700 text-white text-base font-bold rounded-md py-3 px-6 ">
            Try for free
          </button>
        </div>
      </header>
    </>
  );
};

export default DesktopHeader;
