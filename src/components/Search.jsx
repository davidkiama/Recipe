import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./components.css";

function Search() {
  const [inputTerm, setInputTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputTerm}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FaSearch />
      <input type="search" onChange={(e) => setInputTerm(e.target.value)} />
    </form>
  );
}

export default Search;
