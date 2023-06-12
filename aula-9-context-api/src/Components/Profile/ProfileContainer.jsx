/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { useContext } from "react";
import Avatar from "./Avatar";
import SocialLinks from "./SocialLinks";
import profileContext from "../../profileContext";
import ProfileFooter from "./ProfileFooter";

function ProfileContainer() {
  const { profile } = useContext(profileContext);
  return (
    <div className="profile">
      <Avatar />
      <h4>{profile.name}</h4>
      <SocialLinks />
      <ProfileFooter />
    </div>
  );
}
export default ProfileContainer;
