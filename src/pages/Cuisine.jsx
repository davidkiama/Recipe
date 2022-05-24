import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();

    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className="cont--grid">
      {cuisine.map((recipe) => {
        return (
          <div className="cont--item " key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Cuisine;
