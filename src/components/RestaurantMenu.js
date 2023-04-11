
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCardComponent from "./ItemCardComponent";

const RestaurantMenu = () => {
  
  const {id} = useParams();
  const restaurant = useRestaurantMenu(id);

  return (
    <>
      <div className="parent-of-all">
        <div className="restaurant-information">
          <div className="personal-details">
            <h2 className="title">{restaurant.name}</h2>
            <h5 className="cuisine">{restaurant.cuisines.join(", ")}</h5>
            <h5 className="area">{restaurant.areaname}</h5>
            <h5 className="delivery-rate">{restaurant.deliverymsg}
            </h5>
          </div>
          <div className="rating-details">
            <span className="star-rating"><i className="fa fa-star"></i> {restaurant.avgrating}</span>
            <span className="review-count">{restaurant.totalratings}</span>
          </div>
        </div>

        <hr />

        <div className="offers">
            <div>
                <h5>30% upto 75rs</h5>
                <span>use TRYNEW above 149rs</span>
            </div>
            <div>
                <h5>30% upto 75rs</h5>
                <span>use TRYNEW above 149rs</span>
            </div>
            <div>
                <h5>30% upto 75rs</h5>
                <span>use TRYNEW above 149rs</span>
            </div>
            <div>
                <h5>30% upto 75rs</h5>
                <span>use TRYNEW above 149rs</span>
            </div>
            <div>
                <h5>30% upto 75rs</h5>
                <span>use TRYNEW above 149rs</span>
            </div>
            <div>
                <h5>30% upto 75rs</h5>
                <span>use TRYNEW above 149rs</span>
            </div>
        </div>

        <div className="veg-non-veg">
            <h4><i className="fa fa-leaf"></i> Pure Veg</h4>
        </div>

        <hr />

        <div className="cuisines-catagories">
            {
              restaurant.itemCards.map((itemCard, index) => {
                if(index != 0){
                  return <ItemCardComponent itemCard = {itemCard} key = {index}/>
                }
              })
            }
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
