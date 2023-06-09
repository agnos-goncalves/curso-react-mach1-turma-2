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
  const paths = pathname.split("/").filter((path) => path !== "");
  let currentPath = "";
  const nav = paths.map((path) => {
    currentPath += `/${path}`;
    return { label: `${path}`, href: currentPath };
  });
  const artigoAtual = DataBase.find((artigo) => artigo.id == id);
  return (
    <>
      <nav className="breadcrumb">
        {nav.map((path) => (
          <Link key={path.href} to={path.href}>
            {path.label} /
          </Link>
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
