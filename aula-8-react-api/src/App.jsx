import "./App.css";
import Router from "./Router";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <NavLink to="/home">home</NavLink>
        <NavLink to="/usuarios">usuarios</NavLink>
        <NavLink to="/contato">contato</NavLink>
      </header>
      <Router />
    </>
  );
}

export default App;
