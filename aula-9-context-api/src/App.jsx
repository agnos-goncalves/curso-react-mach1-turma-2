/* eslint-disable react/jsx-key */
import { useContext } from "react";
import "./App.css";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import profileContext from "./profileContext";

function App() {
  const { profile } = useContext(profileContext);
  return (
    <>
      <header>{profile.name}</header>
      <ProfileContainer />
    </>
  );
}

export default App;
