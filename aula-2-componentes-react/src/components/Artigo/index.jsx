/* eslint-disable react/prop-types */
function Artigo(props) {
  return (
    <div className="post">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Artigo;
