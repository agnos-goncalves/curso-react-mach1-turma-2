import { useState } from "react";
import "./App.css";
function App() {
  const [fieldName, setFieldName] = useState();
  const [fieldCountry, setFieldCountry] = useState();
  const [fieldAuth, setFieldAuth] = useState();
  const [fieldPermission, setFieldPermission] = useState();
  function handlerSubmit(e) {
    console.log("INFO", fieldName, fieldCountry, fieldAuth, fieldPermission);
    e.preventDefault();
  }
  console.log("RENDERIZANDO");
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <fieldset>
          <label htmlFor="">Nome</label>
          <input type="text" onChange={(e) => setFieldName(e.target.value)} />
          <br />
        </fieldset>
        <fieldset>
          <select onChange={(e) => setFieldCountry(e.target.value)}>
            <option value="">Selecione Pais</option>
            <option value="BRASIL_VALUE">Brasil</option>
            <option value="EUA_VALUE">EUA</option>
            <option value="CANADA_VALUE">Canada</option>
          </select>
        </fieldset>
        <fieldset onChange={(e) => setFieldPermission(e.target.value)}>
          <label htmlFor="">Permissao</label>
          <br />
          <label htmlFor="">Sim</label>
          <input type="radio" name="permission" value="YES" />
          <label htmlFor="">Nao</label>
          <input type="radio" name="permission" value="NO" />
        </fieldset>
        <fieldset>
          <label htmlFor="">Autoriza?</label>
          <input
            type="checkbox"
            name="authorize"
            onChange={(e) => setFieldAuth(e.target.checked)}
            value="YES"
          />
        </fieldset>
        <button
          type="submit"
          disabled={
            !fieldName || !fieldAuth || !fieldPermission || !fieldCountry
          }
        >
          enviar
        </button>
      </form>
    </>
  );
}

export default App;
