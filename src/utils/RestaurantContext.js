import { createContext } from "react";

const RestaurantContext = createContext({
    restaurant: {
        name: "",
        id: "",
        logo: "",
        areaname: "",
    },
})

export default RestaurantContext;