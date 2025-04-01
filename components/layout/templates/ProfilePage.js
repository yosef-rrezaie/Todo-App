import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import ProfileForm from "../modules/ProfileForm";
import ProfileData from "../modules/ProfileData";
import { useRouter } from "next/router";

function ProfilePage({ data: information }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  console.log(information);
  async function submitHnadler() {
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({
        name,
        lastName,
        password,
        email: information.email,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log(data);
    if (data.status === "success") router.reload();
  }

  return (
    <div className="profile-form">
      <h2>
        <CgProfile />
        Profile
      </h2>
      <ProfileData
        name={information.name ? information.name : "No name entered"}
        lastName={
          information.lastName ? information.lastName : "No lastName entered"
        }
        email={information.email}
      />
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
