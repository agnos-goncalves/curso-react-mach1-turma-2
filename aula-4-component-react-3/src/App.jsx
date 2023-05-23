/* eslint-disable react/prop-types */
import "./App.css";

function ListUsers(props) {
  return (
    <div>
      <h3>Usuarios</h3>
      {props.children && <ul className="color">{props.children}</ul>}
    </div>
  );
}

function Builder(type) {
  function Post() {
    return <div>Post</div>;
  }
  function Product() {
    return <div>Product</div>;
  }

  if (type === "POST") {
    return Post;
  }
  if (type === "Product") {
    return Product;
  }
}

function MenuJSX(props) {
  function MenuAdmin() {
    return (
      <div>
        <nav>
          <a href="">gerenciar sistema</a>
          <br />
          <a href="">gerenciar produtos</a>
          <br />
        </nav>
      </div>
    );
  }

  function MenuClient() {
    return (
      <div>
        <nav>
          <a href="">ver produtos</a>
          <br />
          <a href="">comprar</a>
        </nav>
      </div>
    );
  }

  if (props.type === "ADMIN") {
    return MenuAdmin();
  }
  if (props.type === "CLIENT") {
    return MenuClient();
  }
  // return props.type === "ADMIN" ? MenuAdmin() : MenuClient();
}

function MyButton() {
  function HandlerClick() {
    alert("clickou");
  }
  return <button onClick={HandlerClick}>btn 1</button>;
}

function MyButton2(props) {
  return <button onClick={() => props.onClickButton()}>btn 2</button>;
}

function App() {
  const buildData = Builder("Product");
  function HandlerClickParent(message) {
    alert(message);
  }
  return (
    <>
      <MyButton />
      <MyButton2 onClickButton={HandlerClickParent} />
      <div>
        {buildData()}
        <br />
        <MenuJSX type="ADMIN" />
        <br />
        <br />
        <br />
        <MenuJSX type="CLIENT" />
      </div>
    </>
  );
}

export default App;
