import { useEffect, useState } from "react";
import styles from "./recipe.module.css";
import Itemlist from "./Itemlist";
export default function Recipe({ foodid }) {
  const [food, setFood] = useState({});
  const [loading, setloading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;
  const API_KEY = "79436287dfc541819d042e9b63789839";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setloading(false);
    }
    fetchFood();
  }, [foodid]);
  return (
    <div className={styles.recipecard}>
      <h1 className={styles.recipetitle}> {food.title} </h1>
      <img className={styles.recipeimage} src={food.image} alt="" />
      <div className={styles.recipedetails}>
        <span>
          <strong>⏱️{food.readyInMinutes} Minutes </strong>
        </span>
        <span>
          <strong> Serves: {food.servings}</strong>
        </span>
        <span>{food.vegetarian ? "🥦 Vegetarian" : " 🥩Non Vegetarian"}</span>
        <span>{food.vegan ? " 🫑Vegan" : ""}</span>
      </div>
      <div>
        $ <strong>{food.pricePerServing / 100} Per Serving</strong>
      </div>
      <h2>Ingredients</h2>
      <Itemlist food={food} loading={loading} />
      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {loading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
