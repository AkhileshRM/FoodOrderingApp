import React, { useState, useEffect } from "react";
import { Menu_API } from "../constants";

const useRestaurantMenu = (hotelID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    const response = await fetch(Menu_API + hotelID.resId);
    const data = await response.json();
    setResInfo(data);
  };

  return resInfo;
};

export default useRestaurantMenu;
