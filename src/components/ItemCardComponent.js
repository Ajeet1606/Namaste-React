import { useState } from "react";
import MealComponent from "./MealComponent";

const ItemCardComponent = (itemCard) => {
 
  //state variables
  const [expanded, setexpanded] = useState(false);

  //extracting data from props
  const title = itemCard?.itemCard?.card?.card?.title;
  const menu = itemCard?.itemCard?.card?.card?.itemCards;
  // console.warn(menu);
  //when there is no dish 
  if (menu === undefined) {
    return;
  }

  return (
    <>
      <div className="my-[5px] py-[5px] font-Arvo">
        <div>
          <div
            className="flex cursor-pointer py-[18px] shadow-md"
            onClick={() => setexpanded(!expanded)}
          >
            <h3 className="text-center w-[90%] font-bold text-[20px]">
              {title} ({menu.length})
            </h3>
            <p className="text-center w-[10%]">{expanded ? "✖️" : "➕"}</p>
          </div>

          {expanded && 
            menu.map((curMenu, index) => {
              return <MealComponent curMenu = {curMenu} key={index}/>;
            })
          }
        </div>
      </div>
    </>
  );
};

export default ItemCardComponent;
