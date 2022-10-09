import React, { createContext, useState } from "react";
import LoginContext from "./LoginContext";
import UserContext from "./UserContext";

export const appContext = createContext(null);

function ContextHook() {
  const [username, setUsername] = useState("");

  return (
    <appContext.Provider value={{ username, setUsername }}>
      <h4>using useContext</h4>
      {/* React Context Api allows to you to easily access data at different level  of the component tree, without passing props to every level. There are three parts of this api CreateContext, Provider and Consumer */}
      <LoginContext  />
      <UserContext />
    </appContext.Provider>
  );
}

export default ContextHook;
