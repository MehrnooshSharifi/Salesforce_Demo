import homeLarge from "../../assets/images/homepage-success-now-lg.jpg";
import homeSmaall from "../../assets/images/homepage-success-now-sm.jpg"
import { Link } from "react-router-dom";
const DeliverSection = () => {
    return ( 
        <div className="flex flex-col items-center px-2 lg:flex-row lg:justify-between lg:items-center overflow-x-hidden sm:px-4">
        <div className=" flex flex-col mt-4 lg:-mt-28 ">
          <div className="text-blue-900 font-bold text-4xl flex flex-col">
            <p>Deliver Success now</p>
            <p>with Salesforce</p>
            <p> customer 360</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-x-1 w-2/3">
              <Link
                to="#"
                className=" underline decoration-0 decoration-solid decoration-blue-900 text-blue-700 text-xl font-thin"
              >
                See how
              </Link>
              <span className="text-lg text-gray-500 font-thin">
                our suite of products and services helps 98% of customers meet
                or exceed their ROI goals.
              </span>
            </div>
          </div>
          <div className="flex mt-3 items-center">
            <div className=" text-xs px-3 py-2 text-white bg-green-600 rounded-md ">
              <Link>START MY FREE TRAIL</Link>
            </div>
            <div className="ml-2 text-xs px-4 py-2 text-white bg-blue-600 rounded-md">
              <Link>WATCH DEMOS</Link>
            </div>
          </div>
        </div>
        <div className=" text-center  sm:mx-auto lg:-mr-[370px] ">
          <img src={homeLarge} alt="deliver" className="hidden lg:block"></img>
          <img src={homeSmaall} alt="deliver" className="lg:hidden"></img>
        </div>
      </div>
     );
}
 
export default DeliverSection;