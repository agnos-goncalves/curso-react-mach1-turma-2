/* eslint-disable react/prop-types */
import postimg from "../assets/img/post-1.jpg";
import "./style.css";
import { Link } from "react-router-dom";

function ArtigoPreview(props) {
  return (
    <article className="artigo-preview">
      <img src={postimg} alt="" />
      <h6>{props.categoria}</h6>
      <h4>{props.titulo}</h4>
      <span>{props.conteudo}</span>
      <Link to={`/artigos/${props.id}`}>saiba mais</Link>
    </article>
  );
}

export default ArtigoPreview;
