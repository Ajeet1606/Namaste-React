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
import Login from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/Store";
import SearchTextContext from "./utils/SearchTextContext";
import SignUp from "./components/SignUp";

// -----------------------------------------  BUILDING FOOD STUDIO     ------------------------------

const AppComponent = () => {

  const [searchTxt, setsearchTxt] = useState("");
  const [searchTxtFound, setsearchTxtFound] = useState(false);

  return (
    // Provider is used to inform our app about the redux store
    <Provider store={store}>
      {/* User Context is the context we created for logged in user, this provider will pass this context to all the components */}
      <SearchTextContext.Provider value = {{searchTxt, setsearchTxt, searchTxtFound, setsearchTxtFound}}>
        <Header/>
        <Outlet /> {/* dynamic pages will be rendered here */}
      </SearchTextContext.Provider>
      <Footer />
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
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
