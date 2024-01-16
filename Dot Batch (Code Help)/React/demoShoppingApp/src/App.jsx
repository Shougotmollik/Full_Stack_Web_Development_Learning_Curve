import { useState } from "react";

import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {
  const respone = [
    {
      name: "orange",
      price: "10",
    },
  ];

  return (
    <>
      <Item name={respone[0].name}> i wanna eat</Item>
      <ItemDate price={respone[0].price}></ItemDate> <Item name="Apple"></Item>
      <ItemDate price="10 Taka"></ItemDate>
    </>
  );
}

export default App;
