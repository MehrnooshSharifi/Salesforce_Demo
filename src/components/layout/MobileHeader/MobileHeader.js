import MobileNavigation from "./MobileNavigation";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import Popup from "reactjs-popup";
import { NavLink } from "react-router-dom";
import loginLogo from "../../../assets/images/mobile_logo.png";
const MobileHeader = () => {
  return (
    <>
      <header className="xl:hidden flex w-full h-14 justify-between items-center px-8 sticky top-0 bg-white min-w-fit ">
        <MobileNavigation />
        <div className="flex justify-end w-1/2 ml-7">
          <div className=" py-2 px-2 hover:rounded-full hover:bg-blue-100 flex justify-center items-center cursor-pointer ">
            <BiSearch className="w-4 h-4 hover:text-blue-600" />
          </div>
          <div className="cursor-pointer py-2 px-2 flex items-center hover:bg-blue-100 hover:rounded-3xl hover:text-blue-600 ">
            <Popup
              trigger={
                <button className="cursor-pointer hover:text-blue-600">
                  <FaUserAlt/>
                </button>
              }
              position="bottom center"
              on="click"
              closeOnDocumentClick
              mouseLeaveDelay={10}
              mouseEnterDelay={0}
              contentStyle={{ padding: "0px", border: "none" }}
              arrow={false}
            >
              <div className="bg-white w-64 h-96 rounded-2xl shadow-2xl mt-5 flex ">
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
                    <div className="text-gray-500  mb-2 text-sm">
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
          <button className="bg-green-700 ml-3 text-white text-sm font-bold rounded-md py-1 px-3 shrink-0">
            Try for free
          </button>
        </div>
      </header>
    </>
  );
};

export default MobileHeader;
