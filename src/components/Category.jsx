import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import "./components.css";

function Category() {
  return (
    <div className="nav-list">
      <NavLink to="cuisine/italian" className="nav-link">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>

      <NavLink to="cuisine/american" className="nav-link">
        <FaHamburger />
        <h4>American</h4>
      </NavLink>

      <NavLink to="cuisine/thai" className="nav-link">
        <GiNoodles />
        <h4>Thai-food</h4>
      </NavLink>

      <NavLink to="cuisine/korean" className="nav-link">
        <GiChopsticks />
        <h4>Korean</h4>
      </NavLink>
    </div>
  );
}

export default Category;
