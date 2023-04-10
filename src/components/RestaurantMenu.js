import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [name, setname] = useState("");
  const [cuisines, setcuisines] = useState([])
  const [areaname, setareaname] = useState(" ")
  const [deliverymsg, setdeliverymsg] = useState("")
  const [avgrating, setavgrating] = useState("")
  const [totalratings, settotalratings] = useState("")

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4358011&lng=81.846311&restaurantId=" + id + "&submitAction=ENTER");
    const json = await data.json();

    setname(json?.data?.cards[0]?.card?.card?.info?.name);
    setcuisines(json?.data?.cards[0]?.card?.card?.info?.cuisines);
    setareaname(json?.data?.cards[0]?.card?.card?.info?.areaName);
    setdeliverymsg(json?.data?.cards[0]?.card?.card?.info?.feeDetails?.message);
    setavgrating(json?.data?.cards[0]?.card?.card?.info?.avgRatingString);
    settotalratings(json?.data?.cards[0]?.card?.card?.info?.totalRatingsString);

  }
  const {id} = useParams();

  return (
    <>
      <div className="parent-of-all">
        <div className="restaurant-information">
          <div className="personal-details">
            <h2 className="title">{name}</h2>
            <h5 className="cuisine">{cuisines.join(", ")}</h5>
            <h5 className="area">{areaname}</h5>
            <h5 className="delivery-rate">{deliverymsg}
            </h5>
          </div>
          <div className="rating-details">
            <span>{avgrating}</span>
            <span>{totalratings}</span>
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
            <h4>Pure Veg</h4>
        </div>

        <hr />

        <div className="cuisines-catagories">
            <div>Breakfast (snacks) (17)</div>
            <div>Navratri Specials (8)</div>
            <div>Laddoos (assorted) (7)</div>
            <div>Desi Ghee Sweets (10)</div>
            <div>Khoya And Mawa Sweets (9)</div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
