import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

import "./components.css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );

      const data = await api.json();

      setPopular(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
    }
  };
  return (
    <div>
      Popular
      <div className="wrapper">
        <h3>Popular picks</h3>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            arrows: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="card">
                  <Link to={`/recipe/${recipe.id}`}>
                    <p>{recipe.title} </p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

const Card = styled.div``;

const Gradient = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 3;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0.5));
`;

export default Popular;
