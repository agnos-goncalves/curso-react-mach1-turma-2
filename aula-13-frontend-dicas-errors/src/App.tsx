import { useEffect, useState } from "react";
import "./App.css";

function handlerClick() {
  alert();
}

function App() {
  return (
    <>
      <button onClick={handlerClick}>btn</button>
    </>
  );
}

export default App;
