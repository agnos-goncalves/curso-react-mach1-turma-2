import { useContext } from "react";
import profileContext from "../../profileContext";

function ProfileFooter() {
  const { profile, setProfile } = useContext(profileContext);
  function changeName() {
    setProfile({ ...profile, name: "Joao" });
  }
  return (
    <div className="change-username">
      <button onClick={() => changeName()}>
        Trocar nome de {profile.name} para Joao
      </button>
    </div>
  );
}

export default ProfileFooter;
