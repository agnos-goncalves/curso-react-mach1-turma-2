import { Routes, Route } from "react-router-dom";
import ArtigoLista from "./Component/ArtigoLista";
import Artigo from "./Component/Artigo";
function Router() {
  return (
    <Routes>
      <Route path="artigos" element={<ArtigoLista />} />
      <Route path="artigos/:id" element={<Artigo />} />
    </Routes>
  );
}

export default Router;
