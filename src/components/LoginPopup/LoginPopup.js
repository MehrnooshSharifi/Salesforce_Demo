import loginLogo from "../../assets/images/mobile_logo.png";
import { NavLink } from "react-router-dom";
const LoginPopup = () => {
  return (
    <div className="bg-white w-80 h-fit rounded-2xl shadow-2xl mt-3 flex ">
      <div className="flex h-auto flex-col justify-start items-start m-3 p-2">
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
            <img src={loginLogo} alt="loginLogo" className=" w-6 h-4" />
          </div>
          <div className="text-blue-900  mb-2">
            <NavLink to="#" className="underline outline-0">
              Markrting Cloud
            </NavLink>
          </div>
        </div>
        <hr className="bg-gray-50 w-full h-0.5 mt-4" />
        <div className="flex flex-col mt-4">
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
              Access your personal profile, community groups, on-demand
              learning, events, support, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
