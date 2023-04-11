export function filterRestaurants(searchTxt) {
  if (searchTxt === "") setFilteredRestaurants(global_restaurant_list);
  const filteredData = global_restaurant_list.filter(
    (restaurant) =>
      restaurant.data?.area?.toLowerCase() === searchTxt?.toLowerCase()
  );
  setFilteredRestaurants(filteredData);
}