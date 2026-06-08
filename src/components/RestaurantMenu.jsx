import React, {useState} from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

  const [activeIndex, setActiveIndex] = useState(null)

  const hotelID = useParams();
  const resInfo = useRestaurantMenu(hotelID);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu text-center">
      <h1 className="font-bold m-5 text-2xl">{name}</h1>
      <p className="font-bold m-3 text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory 
        key={category?.card?.card?.title}
        data={category?.card?.card}
        showItems={activeIndex === index ? true : false}
        setActiveIndex={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
