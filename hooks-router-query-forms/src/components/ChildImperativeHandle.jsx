import React, { useState, forwardRef, useImperativeHandle } from 'react'

const ChildImperativeHandle = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle)
    },
  }));

  return (
    <div>
      {/* The forwardRef allows to transform a functional component and allow it to accept a reference from parent */}
      <button onClick={() => setToggle(!toggle)}>Button from Child</button>
      {toggle && <p>Toggle</p>}
    </div>
  )
})

export default ChildImperativeHandle