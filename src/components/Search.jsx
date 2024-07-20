import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "79436287dfc541819d042e9b63789839";

export default function Search({ data, setdata }) {
  //usestate hook
  const [query, setquery] = useState("pizza");
  //useeffect hook
  useEffect(() => {
    //made API calls
    async function getfood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setdata(data.results);
    }
    getfood();
  }, [query]);
  return (
    <div className={styles.searchcontainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setquery(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}
