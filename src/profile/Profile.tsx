import React from "react";

import { ProfileProps } from "./profile.interface";

import "./Profile.scss";

const Profile: React.FC<ProfileProps> = ({ displayName, photoURL }) => {
  return (
    <div className="profile-container">
      <img
        className="profile-pic"
        src={photoURL}
        alt="Profile image"
        referrerPolicy="no-referrer"
      />
      <p className="full-name">{displayName}</p>
    </div>
  );
};

export default Profile;
