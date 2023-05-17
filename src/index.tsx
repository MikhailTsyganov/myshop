import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./globalStyles";
import { PersistGate } from "redux-persist/integration/react";
import App from "./containers/app/App";

import { Provider } from "react-redux";
import { store, persistor } from "redux/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </PersistGate>
    </ThemeProvider>
  </Provider>
);
