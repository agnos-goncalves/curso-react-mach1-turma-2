import "./style.css";
import { useLocation } from "react-router-dom";

function Breadcrumb() {
  const data = useLocation();
  return <div className="bread">{data.pathname}</div>;
}

export default Breadcrumb;
