import { AiOutlineRight } from "react-icons/ai";
import Popup from "reactjs-popup";
const Products = () => {
  return (
    <div className="h-screen">
        <div className="flex flex-col lg:px-28 lg:py-6">
          <h1 className="text-lg font-bold text-blue-900 mb-6">Products</h1>
          <div>
            <Popup
              trigger={
                <button className="cursor-pointer text-lg font-bold hover:text-blue-600 py-2">
                  <div className="flex items-center justify-between w-80">
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
              <div className="w-auto -ml-40 bg-blue-100 h-28 mt-14 p-4 overflow-auto ">
                Customer 360
              </div>
            </Popup>
          </div>
        </div>
    </div>
  );
};

export default Products;
