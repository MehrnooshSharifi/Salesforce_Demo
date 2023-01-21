import { AiOutlineRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import customer from "../../../assets/images/NavigationImage/placeholder11.svg";
import Genie from "../../../assets/images/NavigationImage/placeholder29.svg";
import sales from "../../../assets/images/NavigationImage/sales-day.svg";
import service from "../../../assets/images/NavigationImage/service-day.svg";
import marketing from "../../../assets/images/NavigationImage/marketing-day.svg";
import commerce from "../../../assets/images/NavigationImage/commerce-day.svg";
import tableau from "../../../assets/images/NavigationImage/analytics-day.svg";
import mulesoft from "../../../assets/images/NavigationImage/integration-day.svg";
import slack from "../../../assets/images/NavigationImage/placeholder13.svg";
import platform from "../../../assets/images/NavigationImage/platform-day.svg";
import netzero from "../../../assets/images/NavigationImage/products-sustainability-day.svg";

const products = [
  { id: 1, title: "Genie Customer Data Cloud" , image: Genie , route:"/products/genie" },
  { id: 2, title: "Sales" , image: sales , route:"/products/sales"  },
  { id: 3, title: "Service" , image: service },
  { id: 4, title: "Marketing" , image: marketing },
  { id: 5, title: "Commerce" , image: commerce },
  { id: 6, title: "Tableau" , image: tableau },
  { id: 7, title: "Mulesoft" , image: mulesoft },
  { id: 8, title: "Slack"  , image: slack},
  { id: 9, title: "Platform" , image: platform },
  { id: 10, title: "NetZero" , image: netzero },
];

const Products = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col lg:px-12 xl:px-30 lg:py-6 ">
        <h1 className=" text-2xl xl:text-4xl font-bold text-blue-900 mb-6">Products</h1>
        <div className="flex items-center  hover:bg-blue-100 hover:text-blue-900 px-2 hover:rounded-lg">
          <div className="bg-white shadow-2xl w-7 h-7 rounded-full mr-2 flex justify-center items-center">
            <img src={customer} alt="customer360" className="w-6 h-6" />
          </div>
          <Popup
            trigger={
              <button className=" cursor-pointer text-sm lg:text-lg font-bold hover:text-blue-600 py-2">
                <div className="flex items-center justify-between w-80 text-gray-500">
                  <div>Customer 360</div>
                  <AiOutlineRight />
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
          >
            <div className="w-auto -ml-40 bg-white rounded-md shadow-lg h-28 mt-14 p-4 overflow-auto text-sm ">
              Customer 360
            </div>
          </Popup>
        </div>
        {products.map((product) => {
          return (
            <div className="flex items-center  hover:bg-blue-100 hover:text-blue-900 p-2 hover:rounded-lg">
              <div className="bg-white shadow-2xl w-7 h-7 rounded-full mr-2 flex justify-center items-center">
                <img src={product.image} alt={product.title} className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between cursor-pointer text-sm lg:text-lg font-bold w-80 text-gray-500">
                <NavLink className="w-full" to={product.route}>{product.title}</NavLink>
                <AiOutlineRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
