import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:term" element={<Searched />} />
    </Routes>
  );
}

export default Pages;
