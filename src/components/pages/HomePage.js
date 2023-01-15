import balloon from "../../assets/images/sfl_anz_balloon.png";
import artist from "../../assets/images/sfl-lp-artist-section-nile-rodgers.png";
const HomePage = () => {
  return (
    <div className="bg-blue-400 w-full h-30 flex justify-center mx-auto">
      <div className="hidden lg:flex lg:ml-7">
        <img src={balloon} alt="Balloon"></img>
      </div>
      <div className=" flex flex-col justify-center items-center py-4 lg:w-full  lg:flex-row-reverse lg:items-center lg:justify-center lg:mr-7">
        <div className="hidden lg:flex lg:ml-7 lg:w-40 lg:h-20 lg:-mt-14 lg:ml-40 ">
          <img src={artist} alt="Balloon"></img>
        </div>
        <div className=" flex flex-col items-center md:flex-row md:justify-center md:space-x-1 lg:flex-col lg:items-start">
          <div className="text-slate-800 font-bold lg:text-2xl">
            <p>Experience highlights from</p>
          </div>
          <div className="text-white font-bold lg:text-2xl">
            <p>Salesforce Live - now on demand</p>
          </div>
        </div>
        <div className=" mt-2 lg:mr-5 lg:flex lg:items-center lg:mt-0">
          <a
            href="#"
            className="cursor-pointer border border-blue-900 px-3 py-1 bg-white text-blue-700 rounded-md text-sm "
          >
            WATCH NOW
          </a>
        </div>
      </div>
      {/* <div className="hidden lg:flex lg:ml-7 bg-pink-300 w-30 h-16 ">
        <img src={artist} alt="Balloon"></img>
      </div> */}
    </div>
  );
};

export default HomePage;
