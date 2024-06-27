import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
