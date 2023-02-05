import clude from "../../assets/images/sfwt23_logo.png";
import artist from "../../assets/images/sfl-lp-artist-section-nile-rodgers.png";
import { Link } from "react-router-dom";
import DeliverSection from "../HomePage/Deliver";
import Layout from "../layout/Layout";
const HomePage = () => {
  return (
    <Layout>
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
          <DeliverSection />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
