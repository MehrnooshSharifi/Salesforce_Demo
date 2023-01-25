import logo from "../../assets/images/logo-salesforce.svg";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const ContactUsText = () => {
  return (
      <div className="flex flex-col justify-start">
        <div className="flex flex-col xl:flex-row xl:items-center">
          <div className="xl:-ml-24">
            <img src={logo} alt="logo" />
          </div>
          <div className="text-blue-900 font-bold text-2xl">
            <h2>Question?We're here to help.</h2>
          </div>
        </div>
        <div className="hidden md:block">
          <p>
            Our advisors are here to help you chart a course to success. They
            can answer all your Salesforce-related questions, including topics
            like:
          </p>
        </div>
        <div className="hidden md:flex md:flex-col md:justify-center md:items-start w-80 ">
          <div className="flex items-center">
            <FaCheck className="text-green-700" />
            <p className="ml-1">Our entire product portfolio</p>
          </div>
          <div className="flex items-center">
            <FaCheck className="text-green-700" />
            <p className="ml-1">Pricing information</p>
          </div>
          <div className="flex items-center">
            <FaCheck className="text-green-700" />
            <p className="ml-1">Implementation and adoption planning</p>
          </div>
          <div className="flex"></div>
          <div className="flex"></div>
        </div>
        <div className="font-medium">
          <p>
            Just fill out the form at right or call 1800 667 638 (AU), 0800 450
            064 (NZ).
          </p>
        </div>
        <div className="hidden  md:flex md:flex-col">
          <p>Already a customer? Visit the link below for:</p>
          <NavLink to="#" className="underline text-blue-600">
            Billing and Tech Support
          </NavLink>
        </div>
      </div>
  );
};

export default ContactUsText;
