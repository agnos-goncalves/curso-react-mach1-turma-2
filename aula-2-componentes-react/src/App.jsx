/* eslint-disable react/prop-types */
import React from "react";
import "./App.css";
import Artigo from "./components/Artigo";
import Artigo2 from "./components/Artigo2";

function App() {
  return (
    <div>
      <h1>Meus artigos</h1>
      <Artigo title="Artigo 1" description="lorem sumemr 1" />
      <Artigo title="Artigo 2" description="lorem sumemr 2" />
      <Artigo title="Artigo 3" description="lorem sumemr 3" />
      <Artigo2 obj={{ title: "Artigo objeto", description: "???" }} />
    </div>
  );
}

export default App;
