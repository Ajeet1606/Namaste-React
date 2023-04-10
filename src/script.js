import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";

// -----------------------------------------  BUILDING FOOD STUDIO     ------------------------------

const AppComponent = () => {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Outlet/>     {/* dynamic pages will be rendered here */}
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",       //child path can be added but name it directly: path: 'profile' not path: '/profile' by latter one it will be localhost:1234/profile.
        element: <About/>,
        children: [
          {
            path: "profile",
            element: <ProfileClass/>
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {                                        
        path: "/restaurant/:id",
        element: <RestaurantMenu/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>); 
