import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Hw1 from "./Hw1.tsx";
import Hw2 from "./Hw2.tsx";
import Hw3 from "./Hw3.tsx";
import Hw4 from "./Hw4.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hw1 />
    <Hw2 />
    <Hw3 />
    <Hw4 />
  </React.StrictMode>
);
