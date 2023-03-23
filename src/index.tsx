import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./globalStyles";
import App from "./containers/app/App";

import { Provider } from "react-redux";
import { store } from "redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>
);
