/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo, useState } from "react";
import "./App.css";
// useState
// useReducer
// useContext
// useRef
// useCallback ->> memoriza uma funcao
// useMemo

function App() {
  const [counter, setCounter] = useState(0);
  const listNumbers = [1, 2, 3, 5];
  // const total = listNumbers.reduce((prev, current) => prev + current, 0);
  const total = useMemo(() => {
    return listNumbers.reduce((prev, current) => prev + current, 0);
  }, [listNumbers]);

  console.log("RENDER TOTAL", total);

  return (
    <>
      <div id="my-app">
        {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </>
  );
}

export default App;
