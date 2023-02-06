import Layout from "../layout/Layout";
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef } from "react";

const SearchPage = () => {
    const inputRef=useRef();
    useEffect(()=>{
        inputRef.current.focus();
    } , [])
  return (
    <Layout>
      <div className=" bg-gray-100 w-full h-screen">
        <div className="w-full flex items-center justify-center mt-8 p-8 border-b border-b-blue-900 container mx-auto" >
          <FaSearch className="w-8 h-8 mr-4 text-blue-800" />
          <input ref={inputRef} type="text" className="w-full p-3 outline-none bg-gray-100  text-5xl" />
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
