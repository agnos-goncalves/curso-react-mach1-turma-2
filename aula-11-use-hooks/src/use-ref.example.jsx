import { useRef } from "react";
import "./App.css";

function UseRefExample() {
  // const [field, setField] = useState();
  const fieldRef = useRef();
  function sendData(e) {
    e.preventDefault();
  }
  return (
    <>
      <div id="my-app">
        <form action="" onSubmit={sendData}>
          <input type="text" ref={fieldRef} />
          <input type="text" />
          {/* <input type="text" onChange={(e) => setField(e.target.value)} /> */}
          <button type="submit">enviar</button>
        </form>
      </div>
    </>
  );
}

export default UseRefExample;
