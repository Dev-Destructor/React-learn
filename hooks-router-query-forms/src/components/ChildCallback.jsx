import React, { Fragment, memo } from "react";

function ChildCallback({ todo, addNewTodo }) {
  console.log("It is rendered");

  return (
    <Fragment>
      <h4>Todo List</h4>
    </Fragment>
  );
}

export default memo(ChildCallback);
