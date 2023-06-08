import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RestaurantMenuShimmer = () => {
  return (
    <SkeletonTheme>
      <div className="w-full min-h-screen">
        {/* Restaurant details */}
        <div className="w-[60%] mx-auto font-Arvo mt-[20px] flex justify-between items-baseline">
          <div>
            <h2 className="font-bold text-[22px] mb-[15px]"><Skeleton/></h2>
            <h5 className="font-normal text-[#8d8d8d]">
            <Skeleton/>
            </h5>
            <h5 className="font-normal text-[#8d8d8d]"><Skeleton/></h5>
            <h5 className="font-normal text-[#8d8d8d]"><Skeleton/></h5>
          </div>
          <div className="flex flex-col shadow-md">
            <span className="star-rating text-center border-[1px] border-[#d0d0d0] py-[5px] px-[2px] text-green-800">
              <i className="fa fa-star"></i>
              <Skeleton/>
            </span>
            
              <span className="review-count text-center border-[1px] border-[#d0d0d0] py-[5px] px-[2px] text-[#8d8d8d] font-[13px]">
              <Skeleton/>
              </span>
            
          </div>
        </div>

        <hr className="w-[60%] mx-auto my-2 border-gray-600" />

        {/* Offers area */}

        <div className="w-[60%] mx-auto font-Arvo flex items-center overflow-x-auto whitespace-nowrap scrollbar-none">
          <div className="rounded-md m-1 p-2 shadow cursor-pointer border border-gray-400">
            <h5 className="font-semibold"><Skeleton/></h5>
            <span className="font-[12px] text-[#8d8d8d]">
            <Skeleton/>
            </span>
          </div>
          <div className="rounded-md m-1 p-2 shadow cursor-pointer border border-gray-400">
            <h5 className="font-semibold"><Skeleton/></h5>
            <span className="font-[12px] text-[#8d8d8d]">
            <Skeleton/>
            </span>
          </div><div className="rounded-md m-1 p-2 shadow cursor-pointer border border-gray-400">
            <h5 className="font-semibold"><Skeleton/></h5>
            <span className="font-[12px] text-[#8d8d8d]">
            <Skeleton/>
            </span>
          </div><div className="rounded-md m-1 p-2 shadow cursor-pointer border border-gray-400">
            <h5 className="font-semibold"><Skeleton/></h5>
            <span className="font-[12px] text-[#8d8d8d]">
            <Skeleton/>
            </span>
          </div><div className="rounded-md m-1 p-2 shadow cursor-pointer border border-gray-400">
            <h5 className="font-semibold"><Skeleton/></h5>
            <span className="font-[12px] text-[#8d8d8d]">
            <Skeleton/>
            </span>
          </div><div className="rounded-md m-1 p-2 shadow cursor-pointer border border-gray-400">
            <h5 className="font-semibold"><Skeleton/></h5>
            <span className="font-[12px] text-[#8d8d8d]">
            <Skeleton/>
            </span>
          </div>
        </div>

        {/* Veg/non veg declaration */}

        <div className="w-[60%] mx-auto font-Arvo">
          <h4 className="mt-[20px] mb-[10px] font-[600] text-[18px]">
            <i className="fa fa-leaf text-green-800"></i> <Skeleton/>
          </h4>
        </div>

        <hr className="w-[60%] mx-auto border-gray-600" />

        {/* Menu items with categories */}

          <div className="w-[60%] mx-auto my-1">
          <Skeleton/>
          </div>
      </div>
    </SkeletonTheme>
  );
};

export default RestaurantMenuShimmer;
