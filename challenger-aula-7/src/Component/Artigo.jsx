import { useState } from "react";
import postimg from "../assets/img/post-1.jpg";
import { useParams, useLocation, Link } from "react-router-dom";
const DataBase = [
  {
    id: 20,
    titulo: "React Components",
    conteudo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, facilis dolore eum consectetur, vero excepturi dolores nemo ea amet incidunt doloribus. Numquam illo laborum aut aperiam. Numquam, exercitationem adipisci! Beatae!",
    categoria: "frontend",
  },
  {
    id: 12,
    titulo: "Docker Compose",
    conteudo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, facilis dolore eum consectetur, vero excepturi dolores nemo ea amet incidunt doloribus. Numquam illo laborum aut aperiam. Numquam, exercitationem adipisci! Beatae!",
    categoria: "devops",
  },
  {
    id: 7,
    titulo: "Lambda Functions",
    conteudo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, facilis dolore eum consectetur, vero excepturi dolores nemo ea amet incidunt doloribus. Numquam illo laborum aut aperiam. Numquam, exercitationem adipisci! Beatae!",
    categoria: "backend",
  },
];

function Artigo() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const breacrumb = pathname.split("/");
  const artigoAtual = DataBase.find((artigo) => artigo.id == id);
  console.log(breacrumb);
  return (
    <>
      <nav>
        {breacrumb.map((r, index) => (
          <a href={r} key={index}>
            {r}
          </a>
        ))}
      </nav>
      <div className="artigo">
        <img src={postimg} alt="" />
        <strong>{artigoAtual.categoria}</strong>
        <h1>{artigoAtual.titulo}</h1>
        <p>{artigoAtual.conteudo}</p>
      </div>
    </>
  );
}

export default Artigo;