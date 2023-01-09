import image from "../../assets/images/logo-salesforce.svg";
const Navigation = () => {
  return (
      <nav className=" bg-blue-200 w-2/3 mr-">
        <ul className="flex  text-lg font-medium text-slate-800 justify-between items-center">
          <li className="cursor-pointer">
            <img src={image} alt="logo" className="w-15 h-14" />
          </li>
          <li className="cursor-pointer hover:text-blue-600 py-4">Products</li>
          <li className="cursor-pointer hover:text-blue-600 py-4">Industries</li>
          <li className="cursor-pointer hover:text-blue-600 py-4">Learning</li>
          <li className="cursor-pointer hover:text-blue-600 py-4">Support</li>
          <li className="cursor-pointer hover:text-blue-600 py-4">Company</li>
          <li className="cursor-pointer hover:text-blue-600 py-4">Salesforce+</li>
        </ul>
      </nav>
  );
};

export default Navigation;
