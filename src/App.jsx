import Header from "./components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Login from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
import ThemeContext from "./utils/ThemeContext";
import { useState, useEffect, lazy, Suspense } from "react";

import { Provider } from "react-redux";
import cartStore from "./utils/store";

const Grocery = lazy(() => import("./components/Grocery"));

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const data = {
      name: "Akhilesh R M",
    };
    setLoggedInUser(data.name);
  }, []);

  return (
    <>
      <Provider store={cartStore}>
        <UserContext.Provider value={{ user: "Madhyastha" }}>
          <Header />
        </UserContext.Provider>
        <ThemeContext.Provider value={{ theme: darkMode, setDarkMode }}>
          <UserContext.Provider value={{ user: loggedInUser, setLoggedInUser }}>
            <Outlet />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </Provider>
    </>
  );
}

export default App;

export const pageRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading.....</div>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
