import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCardComponent from "./ItemCardComponent";

const RestaurantMenu = () => {
  
  const restaurantFormat = {
      name: "",
      cuisines : [],
      areaname: "",
      deliverymsg: "",
      avgrating: "",
      totalratings: "",
      itemCards: []
  }

  const [restaurant, setrestaurant] = useState(restaurantFormat);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4358011&lng=81.846311&restaurantId=" + id + "&submitAction=ENTER");
    const json = await data.json();

    const card = json?.data?.cards[0]?.card?.card?.info;
    const cuisineDetails = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.warn(cuisineDetails[1]?.card?.card?.itemCards);
    setrestaurant({
        name: card?.name,
        cuisines: card?.cuisines,
        areaname: card?.areaName,
        deliverymsg: card?.feeDetails?.message,
        avgrating: card?.avgRatingString,
        totalratings: card?.totalRatingsString,
        itemCards: cuisineDetails
    })
    // console.warn(restaurant.itemCards[1]?.card?.card?.itemCards);

  }
  const {id} = useParams();

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
            {/* <div>Breakfast (snacks) (17)</div>
            <div>Navratri Specials (8)</div>
            <div>Laddoos (assorted) (7)</div>
            <div>Desi Ghee Sweets (10)</div>
            <div>Khoya And Mawa Sweets (9)</div> */}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
