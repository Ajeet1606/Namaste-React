import { useState } from "react";
import { IMG_CDN_URL } from "./Config";

const ItemCardComponent = (itemCard) => {
  const [expanded, setexpanded] = useState(false);


  const title = itemCard?.itemCard?.card?.card?.title;
  const menu = itemCard?.itemCard?.card?.card?.itemCards;

  if (menu === undefined) {
    return;
  }
  return (
    <>
      <div className="all-cuisines">
        <div className="categories">
          <div className="head-category" onClick={() => setexpanded(!expanded)}>
            <h3>{title} ({menu.length})</h3>
            <p>{expanded ? "➖" : "➕"}</p>
          </div>

          {expanded && (
              menu.map((curMenu, index) => {
                  return(
                    <div className="body-category">
                    <div className="meal-details-under-body-category">
                      <div className="text-details-under-body-category">
                        <h4>{curMenu?.card?.info?.name}</h4>
                        <h5>{curMenu?.card?.info?.price / 100}Rs</h5>
                        <p>{curMenu?.card?.info?.description}</p>
                      </div>
                      <div className="img-detail-under-body-category">
                          {
                              curMenu?.card?.info?.imageId ? <img
                              src={IMG_CDN_URL + curMenu?.card?.info?.imageId}
                              alt="meal-image"
                            /> : <></>
                          }
                        
                      </div>
                    </div>
                    {index < menu.length-1 ? 
                        <div className="liner-under-body-category">
                        <hr />
                      </div> : <></>
                    }
                    
                  </div>
                  )
              })
            
          )}
        </div>
      </div>
    </>
  );
};

export default ItemCardComponent;
