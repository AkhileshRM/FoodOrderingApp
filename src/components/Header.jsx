import React from "react";
import { LOGO } from "../constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import {useState, useContext} from "react"
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {

  const {user} = useContext(UserContext)
  const [isLogin, setIsLogin] = useState(false)

  const handleLogin = () => {
  setIsLogin(prev => !prev)
  }

 const isOnline = useOnlineStatus()

 const cartItems = useSelector(store => store.cart.items)

  return (
    <div className="flex flex-col gap-4 items-center bg-pink-100 shadow-lg px-4 py-4 sm:flex-row sm:justify-between sm:items-center">
      <Link to="/">
        <div className="w-full flex justify-center sm:w-auto sm:justify-start">
          <img className="w-32 sm:w-44" src={LOGO} alt="logo" />
        </div>
      </Link>
      <div className="w-full sm:w-auto">
        <ul className="flex flex-col gap-2 w-full sm:flex-row sm:flex-wrap sm:items-center sm:gap-0 sm:p-0 sm:m-0 sm:justify-end">
          <li className="px-2 py-1 text-sm sm:px-4 sm:text-xl">
            Online Status: {isOnline ? "✅" : "🔴"}
          </li>
          <Link to="/">
            <li className="px-2 py-1 text-sm sm:px-4 sm:text-xl">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2 py-1 text-sm sm:px-4 sm:text-xl">About Us</li>
          </Link>
          <Link to="/Contact">
            <li className="px-2 py-1 text-sm sm:px-4 sm:text-xl">Contact Us</li>
          </Link>
          <Link to="/Grocery">
            <li className="px-2 py-1 text-sm sm:px-4 sm:text-xl">Commercials</li>
          </Link>
          <Link to="/cart">
            <li className="px-2 py-1 text-base font-bold sm:px-4 sm:text-2xl">
              🛒 - ({cartItems.length})
            </li>
          </Link>
          <Link to="/login">
            <li className="px-2 py-1 sm:px-4">
              <button className="w-full rounded-lg bg-slate-800 px-4 py-2 text-base text-white sm:w-auto" onClick={handleLogin}>
               {isLogin ? "Login" : "Logout"}
              </button>
            </li>
          </Link>
          <li className="px-2 py-1 text-sm font-bold sm:px-4 sm:text-xl">
            {user}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
