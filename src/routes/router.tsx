import { createBrowserRouter } from "react-router-dom";
import { Basket } from "pages/Basket";
import { Homepage } from "pages/Homepage";
import { ItemDetail } from "pages/ItemDetail";
import { Login } from "pages/AuthForm/Login";
import { Registration } from "pages/AuthForm/Registration";
import App from "containers/app/App";
import { GoodsByCategory } from "pages/GoodsByCategory";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PublicRoute />,
        children: [
          { path: "/", element: <Homepage /> },
          { path: "basket", element: <Basket /> },
          { path: "goodDetails/:article", element: <ItemDetail /> },
          {
            path: "goods/:category/:subcategory?",
            element: <GoodsByCategory />,
          },
        ],
      },
      {
        path: "/",
        element: <PublicRoute restricted />,
        children: [
          {
            path: "registration",
            element: <Registration />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        path: "/",
        element: <PrivateRoute />,
        children: [{ path: "profile", element: <div></div> }],
      },
    ],
  },
]);

export default router;
