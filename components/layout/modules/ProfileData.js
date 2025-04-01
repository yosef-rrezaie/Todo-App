function ProfileData({ name, lastName , email }) {
  return (
    <div className="profile-data">
      <div>
        <span>Name : </span>
        <p>{name}</p>
      </div>
      <div>
        <span>Lastname :</span>
        <p>{lastName}</p>
      </div>
      <div>
        <span>Email :</span>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default ProfileData;
