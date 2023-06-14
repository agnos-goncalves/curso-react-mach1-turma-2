import { useContext } from "react";
import "./App.css";
import { CounterContext } from "./counter-context";

function App() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <>
      <div>
        <input
          type="number"
          defaultValue={state.counter}
          onChange={(e) =>
            dispatch({ type: "SET_COUNTER", payload: Number(e.target.value) })
          }
        />
        <br />
        <button onClick={() => dispatch({ type: "REMOVE_COUNTER" })}>-</button>
        <strong>{state.counter}</strong>
        <button onClick={() => dispatch({ type: "ADD_COUNTER" })}>+</button>
      </div>
    </>
  );
}

export default App;
