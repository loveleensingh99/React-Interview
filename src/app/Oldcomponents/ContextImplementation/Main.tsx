"use client"
import React from "react";
import UserProvider from "./UserContext";
import UserProfile from "./UserProfile";

const Main = () => {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
};

export default Main;
