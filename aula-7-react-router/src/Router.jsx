import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="usuarios" element={<Users />} />
      <Route path="usuarios/:userName" element={<UserDetail />} />
      <Route path="contato" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
