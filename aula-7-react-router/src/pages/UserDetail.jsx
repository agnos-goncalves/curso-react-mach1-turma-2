import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { useNavigate } from "react-router-dom";

function UserDetail() {
  const navigate = useNavigate();
  const data = useParams();
  function GoToHome() {
    navigate("/home");
  }
  return (
    <div>
      <Breadcrumb />
      <h1>{data.userName}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
        perferendis, earum vero dolores sit nemo repellendus aliquam culpa
        aliquid, neque incidunt non animi molestiae laboriosam! Consequatur,
        perferendis repellat. Cum, quae?
      </p>
      <button onClick={GoToHome}>voltar para home</button>
    </div>
  );
}
export default UserDetail;
