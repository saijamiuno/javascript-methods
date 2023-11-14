import React from "react";

import users from "./users.json";

const allUsers = users?.users;

console.log(allUsers, "allUsers");

function JavaArray() {
  // Find
  //   const isNameExist = (name, allUsers) => {
  //     const user = allUsers.find((e) => e.firstName === name);
  //     return Boolean(user);
  //   };

  // Find Index
  //   const isNameExist = (name, allUsers) => {
  //     const Index = allUsers.findIndex((e) => e.firstName === name);
  //     return Index >= 0;
  //   };

  // Some
  const isNameExist = (name) => {
    const user = allUsers.some((e) => e?.firstName === name);
    return user;
  };

  console.log(isNameExist("Terrill"), "isNameExist");

  return <div>JS</div>;
}

export default JavaArray;
