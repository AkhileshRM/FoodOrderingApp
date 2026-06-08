import React from "react";

const RestaurantCard = ({
  image,
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwo,
  userName,
}) => {
  return (
    <>
      <div className="m-3 p-3 w-[300px] restaurant-card rounded-lg mx-auto hover:scale-105 bg-gray-200 hover:bg-gray-400 cursor-pointer">
        <img
          className="res-logo min-h-64 rounded-lg max-h-64 mx-auto w-full"
          src={image}
          alt="Restaurant Card"
          onError={(e) => {
          e.target.src = "https://media-assets.swiggy.com/swiggy/image/upload/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/731001f1-f1c4-4f5f-849f-79a697cb0b72_390173.jpg"
  }}
        />
        <h1 className="resName font-bold font-serif py-4 text-lg text-center">
          {name}
        </h1>
        <h2 className="cost m-[10px] text-center font-semibold">
          {costForTwo}
        </h2>
        <h3 className="resType m-[10px] text-center font-semibold">
          {cuisines.join(", ")}
        </h3>
        <h3 className="resRatings m-[10px] text-center font-semibold">
          {avgRating}
        </h3>
        <h3 className="deliveryTime m-[10px] text-center font-semibold">
          {deliveryTime} minutes
        </h3>
        <h4 className="deliveryTime m-[10px] text-center font-bold">
          User: {userName}
        </h4>
      </div>
    </>
  );
};

export const withPromotedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
