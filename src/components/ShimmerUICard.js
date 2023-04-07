import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

function ShimmerUICard() {
  return (
    <SkeletonTheme>
      <div className="restaurant-card">
        <Skeleton className='restaurant-logo'/>
        <h3 className="restaurant-name"><Skeleton/></h3>
        <h5><Skeleton count={2}/></h5>
    </div>
    </SkeletonTheme>
  );
}

export default ShimmerUICard;
