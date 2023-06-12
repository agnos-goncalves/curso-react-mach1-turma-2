/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const profileContext = createContext();

export function ProfileProvider(props) {
  const [profile, setProfile] = useState({
    name: "Agnos",
    img: "",
    socialLinks: ["www.facebook", "www.instagram", "www.twitter"],
  });

  return (
    <profileContext.Provider value={{ profile, setProfile }}>
      {props.children}
    </profileContext.Provider>
  );
}

export default profileContext;
