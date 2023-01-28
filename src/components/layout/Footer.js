import { TbWorld } from "react-icons/tb";
import { FaAngleUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-900 w-full h-36 text-white flex justify-start items-center">
      <div className="border border-white px-4 py-2 rounded-md flex justify-center items-center cursor-pointer ml-8">
        <TbWorld className="w-6 h-6" />
        <span className="ml-2 mr-2">WORLDWIDE</span>
        <FaAngleUp className="" />
      </div>
      <div className="text-xs ml-4">
        <span>
          © Copyright 2023 Salesforce, Inc.
          <NavLink className="text-blue-500 hover:text-white underline">
            All Rights reserved
          </NavLink>
          . Various trademarks held by their respective owners.
        </span>
        <p className="mt-2">
          SFDC Australia Pty Ltd. ABN 91 109 182 989. Level 12, Tower 3 Darling
          Park, 201 Sussex Street, Sydney NSW 2000, Australia
        </p>
        <div className="flex justify-between mt-2">
          <NavLink className="text-blue-500 hover:text-white underline">
            Legal
          </NavLink>
          <NavLink className="text-blue-500 hover:text-white underline">
            Terms of Service
          </NavLink>
          <NavLink className="text-blue-500 hover:text-white underline">
            Privacy
          </NavLink>
          <NavLink className="text-blue-500 hover:text-white underline">
            Responsible Disclosure
          </NavLink>
          <NavLink className="text-blue-500 hover:text-white underline">
            Trust
          </NavLink>
          <NavLink className="text-blue-500 hover:text-white underline">
            Contact
          </NavLink>
          <NavLink className="text-blue-500 hover:text-white underline">
            Cookie Prefrences
          </NavLink>
          <NavLink className="text-blue-500 hover:text-white underline flex justify-center items-center">
            <div className="bg-blue-500 rounded-lg text-white flex items-center mr-1 px-0.5">
              <FaCheck className="w-3 h-3 bg-white text-blue-500 rounded-l-md" />
              <FaTimes className="w-3 h-3" />
            </div>
            Your Privacy Choices
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
