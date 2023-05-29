import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./globalStyles";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { store, persistor } from "redux/store";

import { RouterProvider } from "react-router-dom";
import router from "routes/router";

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
