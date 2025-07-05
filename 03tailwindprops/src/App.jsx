import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "Avishkar",
    age: 25,
  };

  let arr = [1, 2, 3];

  return (
    <>
      <h1>Tailwind Test</h1>
      <Card username="ChaiAurCode" someObj={myObj} array={arr} />
      <Card />
    </>
  );
}

export default App;
