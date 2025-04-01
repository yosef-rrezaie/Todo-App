import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import ProfileForm from "../modules/ProfileForm";

function ProfilePage({ data : information }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
    console.log(information)
  async function submitHnadler() {
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({ name, lastName, password, email: information.email }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log(data);
  }

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
