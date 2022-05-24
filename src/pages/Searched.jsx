import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  const params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();

    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.term);
  }, [params.term]);

  return (
    <div className="cont--grid">
      {searchedRecipes.map((recipe) => {
        return (
          <div className="cont--item " key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Searched;
