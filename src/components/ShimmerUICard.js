import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ShimmerUICard() {
  return (
    <SkeletonTheme>
      <div className="w-[250px] m-[10px] px-[10px] py-[5px] rounded-[5px] transition duration-300 ease-in-out hover:scale-110 shadow-md">
        <Skeleton className="w-[300px] h-[157.48px] rounded-[5px]" />
        <h3 className="m-[2px] font-Arvo font-normal">
          <Skeleton />
        </h3>
        <h5>
          <Skeleton count={2} />
        </h5>
      </div>
    </SkeletonTheme>

  );
}

export default ShimmerUICard;
