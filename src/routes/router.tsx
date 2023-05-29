import { createBrowserRouter } from "react-router-dom";
import { Basket } from "pages/Basket";
import { Homepage } from "pages/Homepage";
import { ItemDetail } from "pages/ItemDetail";
import { AuthForm } from "pages/AuthForm";
import { Login } from "pages/AuthForm/Login";
import { Registration } from "pages/AuthForm/Registration";
import App from "containers/app/App";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      { path: "/*", element: <Homepage /> },
      { path: "basket", element: <Basket /> },
      { path: "goods/:article", element: <ItemDetail /> },
      {
        path: "registration",
        element: (
          <AuthForm>
            <Registration />
          </AuthForm>
        ),
      },
      {
        path: "login",
        element: (
          <AuthForm>
            <Login />
          </AuthForm>
        ),
      },
    ],
  },
]);

export default router;
