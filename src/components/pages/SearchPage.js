import Layout from "../layout/Layout";
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef } from "react";

const SearchPage = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Layout>
      <div className=" bg-gray-100 w-full h-screen flex flex-col">
        <div className=" border-2 border-blue-900 rounded-md lg:rounded-none p-1 container mx-auto lg:w-full mt-9  flex items-center justify-center lg:mt-8 lg:p-8 lg:border-0 lg:border-b lg:border-b-blue-900 ">
          <FaSearch className="lg:w-8 lg:h-8 mr-4 text-blue-800" />
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-gray-100 outline-none lg:p-3 lg:outline-none lg:bg-gray-100  lg:text-5xl"
          />
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
