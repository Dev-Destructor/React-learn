import React, { useContext } from "react";
import { appContext } from "./ContextHook";

function LoginContext() {
  const { setUsername } = useContext(appContext)
  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
    </div>
  )
}

export default LoginContext
