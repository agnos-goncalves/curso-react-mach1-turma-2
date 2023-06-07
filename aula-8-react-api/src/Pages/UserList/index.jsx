import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // throw new Error("Erro ao carregar os dados");
        setUsers(data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []); // inicializando

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>carregando dados....</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/user/${user.id}`}>mais informacao</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
