import React, { useContext } from "react";
import { appContext } from "./ContextHook";

function UserContext() {
  const { username } = useContext(appContext);

  return <div>{username}</div>;
}

export default UserContext;
