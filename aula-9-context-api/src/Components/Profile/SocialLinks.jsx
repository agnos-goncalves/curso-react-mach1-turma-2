import { useContext } from "react";
import profileContext from "../../profileContext";

/* eslint-disable react/prop-types */
function SocialLinks() {
  const { profile } = useContext(profileContext);
  return (
    <ul className="social-links">
      {profile.socialLinks.map((link, index) => (
        <li key={index}>
          <a>{link}</a>
        </li>
      ))}
    </ul>
  );
}
export default SocialLinks;
