/* eslint-disable react/jsx-key */
import ArtigoPreview from "./ArtigoPreview";
import "./component.css";

function ArtigoLista() {
  const artigosData = [
    {
      id: 20,
      titulo: "React Components",
      conteudo: "lorem ipsum summer",
      categoria: "frontend",
    },
    {
      id: 12,
      titulo: "Docker Compose",
      conteudo: "lorem ipsum summer",
      categoria: "devops",
    },
    {
      id: 7,
      titulo: "Lambda Functions",
      conteudo: "lorem ipsum summer",
      categoria: "backend",
    },
  ];
  return (
    <>
      <article className="artigo-list">
        {artigosData.map((artigo) => (
          <ArtigoPreview
            id={artigo.id}
            titulo={artigo.titulo}
            conteudo={artigo.conteudo}
            categoria={artigo.categoria}
          />
        ))}
      </article>
    </>
  );
}

export default ArtigoLista;
