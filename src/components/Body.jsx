import React, { useState, useEffect } from "react";
import { CDN_URL } from "../constants";
import RestaurantCard, { withPromotedRestaurant } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import ThemeContext from "../utils/ThemeContext";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { Link, useParams } from "react-router-dom";

const Body = () => {
  const [restaurantsList, setRestaurantList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRestaurantsList();
  }, []);

  const getRestaurantsList = async () => {
    try {
      const response = await fetch(
        "https://namastedev.com/api/v1/listRestaurants",
      );
      const data = await response.json();
      setRestaurantList(
        data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      setFilteredData(
        data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      return data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    } catch (error) {
      console.log("An API error occured", error);
    }
  };

  // Top filter Restaurant
  const filterTopRestuarant = () => {
    const filteredRestaurants = restaurantsList?.filter(
      (res) => res?.info?.avgRating > 4.5,
    );
    setFilteredData(filteredRestaurants);
  };

  // Searching Restaurants
  const handleSearch = () => {
    const searchedRestaurants = restaurantsList?.filter((res) =>
      res?.info?.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredData(searchedRestaurants);
  };

  // Handle Search Change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    const searchedRestaurants = restaurantsList?.filter((res) =>
      res?.info?.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredData(searchedRestaurants);
  };

  const { user, setLoggedInUser } = useContext(UserContext);
  const { theme, setDarkMode } = useContext(ThemeContext);

  const PromotedRestaurant = withPromotedRestaurant(RestaurantCard);

  const status = useOnlineStatus();

  if (status === false) {
    return (
      <p>Looks like you are offline. Please check your internet Connection</p>
    );
  }

  return (
    <>
      {filteredData?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className={theme ? "bg-gray-500" : ""}>
          <div className="filter flex justify-between">
            <div className="search m-4 p-4 flex items-center">
              <button
                className="filter-btn px-4 py-2 bg-gray-100 rounded-lg"
                onClick={filterTopRestuarant}
              >
                Top Rated Restaurants
              </button>
            </div>
            <div className="search m-4 p-4 flex items-center">
              <label className="mr-2">User Name:</label>
              <input
                type="text"
                className="border-black border-2"
                value={user}
                onChange={(e) => setLoggedInUser(e.target.value)}
              />
            </div>
            <div className="search m-4 p-4 flex items-center">
              <button
                className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={() => setDarkMode((prev) => !prev)}
              >
                {theme ? "Dark Mode" : "White Mode"}
              </button>
            </div>
            <div className="search m-4 p-4">
              <input
                className="border-2 border-black"
                placeholder="Search for Food"
                type="text"
                onChange={(e) => handleSearchChange(e)}
                value={search}
              />
              <button
                className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          <div className="restaurant-container flex flex-wrap justify-evenly">
            {filteredData?.map((val) => (
              <Link
                key={val?.info?.id}
                to={"/restaurant/" + val?.info?.id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {!val?.veg ? (
                  <PromotedRestaurant
                    key={val?.info?.id}
                    id={val?.info?.id}
                    image={CDN_URL + val?.info?.cloudinaryImageId}
                    name={val?.info?.name}
                    costForTwo={val?.info?.costForTwo}
                    cuisines={val?.info?.cuisines}
                    avgRating={val?.info?.avgRating}
                    deliveryTime={val?.info?.sla?.deliveryTime}
                    userName={user}
                  />
                ) : (
                  <RestaurantCard
                    key={val?.info?.id}
                    id={val?.info?.id}
                    image={CDN_URL + val?.info?.cloudinaryImageId}
                    name={val?.info?.name}
                    costForTwo={val?.info?.costForTwo}
                    cuisines={val?.info?.cuisines}
                    avgRating={val?.info?.avgRating}
                    deliveryTime={val?.info?.sla?.deliveryTime}
                    userName={user}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
