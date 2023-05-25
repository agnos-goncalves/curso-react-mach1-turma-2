/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./App.css";

// componentDidMount -->> criacao
// componentDidUpdate ->> atualizacao
// componentWillUnmount --> antes de ser destruido

// class MyComponent {
//   componentDidMount() {} ->> []
//   componentDidUpdate(){}
//   componentWillUnmount(){} --> []
// }

function Text(props) {
  // componentDidMount ->>
  useEffect(() => {
    console.log("Component criado!!" + props.content);
    // componentWillUnmount -->>
    return () => console.log("Component destruido " + props.content);
  }, []);

  useEffect(() => {
    console.log("Component atualizado " + props.content);
  }, [props.content]);

  return (
    <span onClick={() => props.onClickText(props.content)}>
      {props.content}
      <br />
    </span>
  );
}
function App() {
  const [texts, setTexts] = useState([
    "Ola Mundo",
    "React Curso Mach1",
    "Aula de Estado",
  ]);
  function AddItem() {
    texts.push("new item");
    setTexts([...texts]);
  }
  function RemoveItem() {
    texts.pop();
    setTexts([...texts]);
  }
  function UpdateItem(value) {
    const newTexts = texts.map((text) => {
      if (value == text) {
        return (text += " alterado");
      }
      return text;
    });
    setTexts(newTexts);
  }
  return (
    <>
      <button onClick={AddItem}>add item</button>
      <br />
      {texts.map((text, index) => (
        <Text key={index} count={1} content={text} onClickText={UpdateItem} />
      ))}
      <br />
      <button onClick={RemoveItem}>remove item</button>
    </>
  );
}

export default App;
