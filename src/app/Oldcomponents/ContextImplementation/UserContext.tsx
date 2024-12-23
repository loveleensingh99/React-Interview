import { stat } from "fs";
import React, { createContext } from "react";
import { useState } from "react";


export const UserContext = createContext(); 


const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John", age: 30 });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;



{/*

useContext hook is used to access the value of a context within a component tree.

Steps:
1 Create a context. using createContext
2 Provide the context. Use the Context.Provieder to wrap component.
3 Consume the context Use useContext within any component that need to access the context.
*/}





 