import { NavLink } from "react-router-dom";
import image from "../../../assets/images/logo-salesforce.svg";
import Popup from "reactjs-popup";
import Product from "../NavigationItem/Products";
import Company from "../NavigationItem/Company";
import Industries from "../NavigationItem/Industries";
import Learning from "../NavigationItem/Learning";
import Support from "../NavigationItem/Support";
import Salesforce from "../NavigationItem/Salesforce";
const items = [
  { id: 1, name: "Product", component: <Product /> },
  { id: 2, name: "Industries", component: <Industries /> },
  { id: 3, name: "Learning", component: <Learning /> },
  { id: 4, name: "Support", component: <Support /> },
  { id: 5, name: "Company", component: <Company /> },
  { id: 6, name: "Salesforce", component: <Salesforce /> },
];
const DesktopNavigation = () => {
  return (
    <nav className=" hidden xl:block w-2/3 mr-16">
      <ul className="flex  text-lg font-medium text-slate-800 justify-between items-center">
        <NavLink to="/" className="cursor-pointer">
          <img src={image} alt="logo" className="w-15 h-14" />
        </NavLink>
        {items.map((item) => {
          return (
            <Popup
              trigger={
                <button className="cursor-pointer hover:text-blue-600 py-4">
                  {item.name}
                </button>
              }
              position="bottom left"
              on="click"
              closeOnDocumentClick
              mouseLeaveDelay={100}
              mouseEnterDelay={0}
              contentStyle={{ padding: "0px", border: "none" }}
              arrow={false}
              key={item.id}
            >
              <div className="bg-white w-auto h-28 mt-6 p-4 overflow-auto ">
                {item.component}
              </div>
            </Popup>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
