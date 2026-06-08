import React, { useState, useEffect } from "react";

const Grocery = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=5000");
    const data = await response.json();
    setInfo(data?.products);
  };

  return (
    <div className="flex flex-wrap">
      {info?.map((item) => (
         <div key={item.id} className="m-3 p-3 w-[300px] restaurant-card rounded-lg mx-auto hover:scale-105 bg-gray-200 hover:bg-gray-400 cursor-pointer">
      <img
        className="res-logo min-h-64 rounded-lg max-h-64 mx-auto w-full"
        src={item?.images[0]}
        alt="Restaurant Card"
        onError={(e) => {
          e.target.src =
            "https://media-assets.swiggy.com/swiggy/image/upload/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/731001f1-f1c4-4f5f-849f-79a697cb0b72_390173.jpg";
        }}
      />
      <h1 className="resName font-bold font-serif py-4 text-lg text-center">
       {item?.title}
      </h1>
      <h2 className="cost m-[10px] text-center font-semibold">{item?.description}</h2>
      <h3 className="resType m-[10px] text-center font-semibold">
       
      </h3>
      <h3 className="resRatings m-[10px] text-center font-semibold">
 
      </h3>
      <h3 className="deliveryTime m-[10px] text-center font-semibold">
      
      </h3>
      <h4 className="deliveryTime m-[10px] text-center font-bold">
      
      </h4>
    </div>
      ))}
    </div>
  
  );
};

export default Grocery;
