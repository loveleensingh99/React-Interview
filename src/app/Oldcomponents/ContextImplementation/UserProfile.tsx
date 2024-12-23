import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const { user, updateUser } = useContext(UserContext);

  const changeName = () => {
    updateUser({ ...user, name: "Leenu" });
  };
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default UserProfile;
