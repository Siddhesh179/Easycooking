import { useState } from "react";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Nav from "./components/Nav";
import "./App.css";
import Globalcontainer from "./components/Globalcontainer";
import Innercontainer from "./components/innercontainer";
import Recipe from "./components/Recipe";
function App() {
  const [data, setdata] = useState([]);
  const [foodid, setfoodid] = useState("658615");
  return (
    <div className="App">
      <Nav />
      <Search data={data} setdata={setdata} />
      <Globalcontainer>
        <Innercontainer>
          <Foodlist setfoodid={setfoodid} data={data} />
        </Innercontainer>
        <Innercontainer>
          <Recipe foodid={foodid} />
        </Innercontainer>
      </Globalcontainer>
    </div>
  );
}

export default App;
