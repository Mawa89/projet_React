import React from "react";

export default function TodoList(props) {
  return (
    <div>
      <h1>Mon composant TodoList</h1>
      {props.propsTodoList.map((value, index) => {
        return (
          <li key={index} onClick={() => props.propsDeleteTodo(value)}>
            {value}
          </li>
        );
      })}
    </div>
  );
}
