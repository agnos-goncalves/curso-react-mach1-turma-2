function Artigo2(props) {
  console.log("dados", props);
  return (
    <div className="post">
      <h2>{props.obj.title}</h2>
      <p>{props.obj.description}</p>
    </div>
  );
}

export default Artigo2;
