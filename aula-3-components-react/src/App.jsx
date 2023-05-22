/* eslint-disable react/prop-types */
import "./App.css";

// function MyComponentStringAndNumber(props) {
//   return (
//     <div>
//       <h4>
//         {props.name} {props.lastName}
//       </h4>
//       <span>
//         <strong>Idade:</strong> {props.age}
//       </span>
//     </div>
//   );
// }

function ListUsers(props) {
  // condicao1 && condicao2 => return
  // condicao ? return1 : return2
  return (
    <div>
      {/* {props.active && <h3>Lista Ativa</h3>}
      {!props.active && <h3>Lista Inativa</h3>} */}

      {props.active ? <h3>Lista Ativa</h3> : <h3>Lista Inativa</h3>}
      <ul>
        {props.users.map((obj, index) => (
          <li
            key={index}
            // eslint-disable-next-line react/no-unknown-property
            isadmin={String(obj.admin)}
            className={`${obj.admin ? "user-admin" : "user-client"}`}
          >
            {/* {obj.admin && <strong>Admin: </strong>} */}
            {obj.admin ? <strong>Admin: </strong> : <strong>Client: </strong>}
            {obj.name} {obj.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const listUsers = [
    {
      name: "agnos",
      lastName: "Goncalves",
      admin: true,
    },
    {
      name: "maria",
      lastName: "silva",
      admin: false,
    },
    {
      name: "joao",
      lastName: "silva",
      admin: false,
    },
    {
      name: "roberta",
      lastName: "SR",
      admin: true,
    },
  ];
  return (
    <div>
      <ListUsers users={listUsers} active={false} />
    </div>
  );
}

export default App;
