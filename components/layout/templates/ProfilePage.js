import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import ProfileForm from "../modules/ProfileForm";

function ProfilePage({ data }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  console.log(data);

  function submitHnadler() {}

  return (
    <div className="profile-form">
      <h2>
        <CgProfile />
        Profile
      </h2>
      <ProfileForm
        name={name}
        lastName={lastName}
        password={password}
        setName={setName}
        setLastName={setLastName}
        setPassword={setPassword}
        submitHnadler={submitHnadler}
      />
    </div>
  );
}

export default ProfilePage;
