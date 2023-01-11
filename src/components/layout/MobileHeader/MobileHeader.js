import MobileNavigation from "./MobileNavigation";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
const MobileHeader = () => {
  return (
    <>
      <header className="xl:hidden flex w-full h-14 justify-between items-center px-8 sticky top-0 bg-white min-w-fit ">
        <MobileNavigation />
        <div className="flex justify-end w-1/2 ml-7">
          <div className=" py-2 px-2 hover:rounded-full hover:bg-blue-100 flex justify-center items-center cursor-pointer ">
            <BiSearch className="w-4 h-4 hover:text-blue-600" />
          </div>
          <div className="cursor-pointer py-2 px-2 flex items-center hover:bg-blue-100 hover:rounded-3xl hover:text-blue-600 ">
            <FaUserAlt />
          </div>
          <button className="bg-green-700 ml-3 text-white text-sm font-bold rounded-md py-1 px-3 shrink-0">
            Try for free
          </button>
        </div>
      </header>
    </>
  );
};

export default MobileHeader;
