import { Route, Routes } from "react-router-dom";
import UserList from "./Pages/UserList";
import UserDetail from "./Pages/UserDetail";

function Router() {
  return (
    <Routes>
      <Route path="/user" element={<UserList />} />
      <Route path="/user/:userID" element={<UserDetail />} />
    </Routes>
  );
}

export default Router;
