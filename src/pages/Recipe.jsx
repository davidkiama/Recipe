import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Detail.css";

function Recipe() {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const getDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const dataDetail = await data.json();
    setDetails(dataDetail);
    console.log(dataDetail);
  };

  useEffect(() => {
    getDetails();
  }, [params.id]);
  return (
    <div className="cont--detail">
      <div>
        <h2>{details.name} </h2>
        <img src={details.image} alt="Image" />
      </div>
      <div className="info">
        <button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </button>
        <button
          className={activeTab === "ingridients" ? "active" : ""}
          onClick={() => setActiveTab("ingridients")}
        >
          Ingridients
        </button>

        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}

        {activeTab === "ingridients" && (
          <ul>
            {details.extendedIngredients.map((ingridient) => (
              <li key={ingridient.id}> {ingridient.original}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Recipe;
