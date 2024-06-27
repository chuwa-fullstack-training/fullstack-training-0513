import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./Todo";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Todo />
    </Provider>
  </React.StrictMode>
);
