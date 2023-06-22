import "./App.css";
import useFetch from "./hooks/use-fetch";
import useOnline from "./hooks/use-online";
import useResize from "./hooks/use-resize";

function App() {
  const appWindow = useResize();
  const online = useOnline();
  const users = useFetch("https://jsonplaceholder.typicode.com/users");
  const userFinded = useFetch("https://jsonplaceholder.typicode.com/users/1");
  return (
    <>
      <div>
        <span>{online ? "Online" : "Offline"}</span>
        <div>
          <h2>useResize</h2>
          <span>width: {appWindow.width}</span> /
          <span>height: {appWindow.height}</span>
        </div>
        <ul>
          {users.data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <div>usuario especifico</div>
        {userFinded.data.email}
      </div>
    </>
  );
}

export default App;
