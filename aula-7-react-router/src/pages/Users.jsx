/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

function Users() {
  const data = ["maria", "joao", "agnos"];
  return (
    <>
      <Breadcrumb />
      <ul>
        {data.map((user, index) => (
          <li>
            <Link key={index} to={`/usuarios/${user}`}>
              {user}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Users;
