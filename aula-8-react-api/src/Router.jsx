import { Route, Routes } from "react-router-dom";
import PagHome from "./Components/PagHome";
import PagUsuarios from "./Components/PagUsuarios";
import PagContato from "./Components/PagContatos";

function Router() {
  return (
    <Routes>
      <Route path="/home" element={<PagHome />} />
      <Route path="/usuarios" element={<PagUsuarios />} />
      <Route path="/contato" element={<PagContato />} />
    </Routes>
  );
}

export default Router;
