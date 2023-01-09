import { NavLink } from "react-router-dom";
import image from "../../assets/images/logo-salesforce.svg";   
const Navigation = () => {
  return (
      <nav className=" w-2/3 mr-">
        <ul className="flex  text-lg font-medium text-slate-800 justify-between items-center">
          <NavLink to="/" className="cursor-pointer">
            <img src={image} alt="logo" className="w-15 h-14" />
          </NavLink>
          <NavLink to="/ProductsPage" className="cursor-pointer hover:text-blue-600 py-4">Products</NavLink>
          <NavLink to="/IndustriesPage" className="cursor-pointer hover:text-blue-600 py-4">Industries</NavLink>
          <NavLink to="/LearningPage" className="cursor-pointer hover:text-blue-600 py-4">Learning</NavLink>
          <NavLink to="/SupportPage" className="cursor-pointer hover:text-blue-600 py-4">Support</NavLink>
          <NavLink to="/CompanyPage" className="cursor-pointer hover:text-blue-600 py-4">Company</NavLink>
          <NavLink to="/SalesforcePage" className="cursor-pointer hover:text-blue-600 py-4">Salesforce+</NavLink>
        </ul>
      </nav>
  );
};

export default Navigation;
