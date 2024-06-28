import { Routes, Route } from "react-router-dom";
import ComponentList from "./ComponentList";
import ColorComponent from "./ColorComponent";
import "./App.css";

function App(){
  return (
    <>
      <Routes>
          <Route path="/" element={<ComponentList />} />
          <Route path="/component/:id" element={<ColorComponent />} />
      </Routes>
    </>
  );
}

export default App;
