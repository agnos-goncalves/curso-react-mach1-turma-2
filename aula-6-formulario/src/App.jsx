import { useRef } from "react";
import "./App.css";
function App() {
  const nameRef = useRef();
  const countryRef = useRef();
  const authRef = useRef();
  const permissionRef = useRef();
  function handlerSubmit(e) {
    console.log(
      "INFO",
      nameRef.current.value,
      countryRef.current.value,
      authRef.current.value,
      permissionRef.current.value
    );
    e.preventDefault();
  }
  console.log("RENDERIZANDO");
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <fieldset>
          <label htmlFor="">Nome</label>
          <input type="text" ref={nameRef} />
          <br />
        </fieldset>
        <fieldset>
          <select ref={countryRef}>
            <option value="">Selecione Pais</option>
            <option value="BRASIL_VALUE">Brasil</option>
            <option value="EUA_VALUE">EUA</option>
            <option value="CANADA_VALUE">Canada</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="">Permissao</label>
          <br />
          <label htmlFor="">Sim</label>
          <input
            ref={permissionRef}
            type="radio"
            name="permission"
            value="YES"
          />
          <label htmlFor="">Nao</label>
          <input
            ref={permissionRef}
            type="radio"
            name="permission"
            value="NO"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Autoriza?</label>
          <input ref={authRef} type="checkbox" name="authorize" value="YES" />
        </fieldset>
        <button type="submit">enviar</button>
      </form>
    </>
  );
}

export default App;
