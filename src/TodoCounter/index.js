import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css"

function TodoCounter() {
  const {
    todosCompleted,
    totalTodos,

  } = React.useContext(TodoContext)
  return (
    <h2 className="TodoCounter">
      {todosCompleted === totalTodos ? (
        <>Las tareas están completadas</>
      ) : (
        <>
          Has completado <span>{todosCompleted}</span> de <span>{totalTodos}</span> tareas
        </>
      )}
    </h2>
  );
}

export { TodoCounter };
