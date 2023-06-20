import { useCallback, useState } from "react";
import "./App.css";
// useState
// useReducer
// useContext
// useRef
// useCallback ->> memoriza uma funcao
// useMemo

function useCallbackExample() {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState("");
  console.log("RENDER");

  const GetUserName = useCallback(() => {
    return userName;
  }, [userName]);

  return (
    <>
      <div id="my-app">
        {counter} <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </>
  );
}

export default useCallbackExample;
