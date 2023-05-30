import "./App.css";
import Router from "./Router";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <NavLink to="home">Home</NavLink> /
        <NavLink to="contato">Contato</NavLink> /
        <NavLink to="usuarios">Usuarios</NavLink>
      </nav>
      <Router />
    </>
  );
}

export default App;
