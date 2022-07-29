import React from "react";

function ToDoItem(props) {
  return (
    <li onClick={() => props.onChecked(props.id)} style={{ cursor: "pointer" }}>
      {props.value}
    </li>
  );
}

export default ToDoItem;
