import clude from "../../assets/images/sfwt23_logo.png";
import artist from "../../assets/images/sfl-lp-artist-section-nile-rodgers.png";
import { Link } from "react-router-dom";
import home from "../../assets/images/homepage-success-now-lg.jpg";
const HomePage = () => {
  return (
    <div className="felx flex-col">
      <div className="bg-blue-900 w-full h-30 flex justify-center mx-auto">
        <div className="hidden lg:flex lg:ml-7 lg:w-40 lg:h-12 lg:mt-4 ">
          <img src={clude} alt="Balloon"></img>
        </div>
        <div className=" flex flex-col justify-center items-center py-4 lg:w-full  lg:flex-row-reverse lg:items-center lg:justify-center lg:mr-7">
          <div className="hidden lg:flex lg:ml-7 lg:w-40 lg:h-20 lg:-mt-14 ">
            <img src={artist} alt="Balloon"></img>
          </div>
          <div className=" flex flex-col items-center md:flex-row md:justify-center md:space-x-1 lg:flex-col lg:items-start">
            <div className="text-blue-400 font-bold lg:text-2xl">
              <p>Experience highlights from</p>
            </div>
            <div className="text-white font-bold lg:text-2xl">
              <p>Salesforce Live - now on demand</p>
            </div>
          </div>
          <div className=" mt-2 lg:mr-5 lg:flex lg:items-center lg:mt-0">
            <Link
              to="#"
              className="cursor-pointer border border-blue-900 px-3 py-1 bg-white text-blue-700 rounded-md text-sm "
            >
              WATCH NOW
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col w-full h-screen">
        {/* Deliver Section */}
        <div className="flex flex-col items-center px-4 mx-auto lg:flex-row lg:justify-between lg:items-center overflow-x-hidden">
          <div className="flex flex-col mt-4 lg:-mt-28 ">
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
          <div className="-mr-[370px]  text-center">
            <img src={home} alt="deliver" className=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
