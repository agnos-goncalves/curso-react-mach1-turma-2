import { useContext } from "react";
import profileContext from "../../profileContext";

function Avatar() {
  const data = useContext(profileContext);
  return <div className="avatar" />;
}
export default Avatar;
