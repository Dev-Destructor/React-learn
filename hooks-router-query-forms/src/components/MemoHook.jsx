import React, { useEffect, useMemo, useState } from "react";

function MemoHook() {
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const json = await response.json();
      setComments(json);
    };
    fetchComments();
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("Computed");
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(comments), [comments]);

  return (
    <div>
      {/* useMemo hook returns a memorized value. Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render. */}
      <h4>using useMemo</h4>
      <div>{getLongestName}</div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h2>Toggle</h2>}
      {/* As you can see here if we use findLongestName function directly, it wil recompute the value every time the page rerenders then Toggle button is clicked. But if we use the function getLongestName which is created by calling useMemo hook it will only compute once and stores the response and will not recompute every time the Toggle button is clicked, the memo value will be same unless the state comments changes */}
    </div>
  );
}

export default MemoHook;
