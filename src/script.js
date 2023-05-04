import { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";
import UserContext from "./utils/UserContext";
import RestaurantContext from "./utils/RestaurantContext";
import { Provider } from "react-redux";
import store from "./utils/Store";

// -----------------------------------------  BUILDING FOOD STUDIO     ------------------------------

const AppComponent = () => {
  // Fetch user data from API..
  const [myUser, setMyUser] = useState({
    name: "Ajeet",
    email: "aj@gmail.com",
  });

  return (
    // Provider is used to inform our app about the redux store
    <Provider store = {store}>
      {/* User Context is the context we created for logged in user, this provider will pass this context to all the components */}
      <RestaurantContext.Provider value>
        <Header />
        <Outlet /> {/* dynamic pages will be rendered here */}
        <Footer />
      </RestaurantContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about", //child path can be added but name it directly: path: 'profile' not path: '/profile' by latter one it will be localhost:1234/profile.
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
