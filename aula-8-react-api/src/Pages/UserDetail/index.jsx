import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UserDetail() {
  const { userID } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>carregando dados...</div>;
  }

  return (
    <div>
      <span>{user.id}</span>
      <h1>{user.name}</h1>
      <h4>{user.email}</h4>
      <h5>{user.phone}</h5>
      <p>
        <strong>Rua:</strong>
        <span>{user.address.street}</span>
        <br />
        <strong>Cidade:</strong>
        <span>{user.address.city}</span>
        <br />
        <strong>CEP:</strong>
        <span>{user.address.zipcode}</span>
        <br />
      </p>
      <button>
        <Link to="/user">Voltar</Link>
      </button>
    </div>
  );
}

export default UserDetail;
