import { TodoHead } from "./TodoHead";
import { CloseTodoButton } from "./CloseTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";

import React from "react";

const defaultTodos = [
  { text: "HACER LA CAMA", completed: true },
  { text: "LAVAR LOS PLATOS", completed: false },
  { text: "ESTUDIAR REACT.JS", completed: false },
  { text: "COMPRAR XBOX SERIES S", completed: false },
  { text: "ESTUDIAR CSS", completed: true },
  { text: "ESTUDIAR GSAP", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  
  const [todos, setTodos] = React.useState(defaultTodos);
  
  const todosCompleted = todos.filter(todo => !!todo.completed).length;
  
  const totalTodos = todos.length;

  const searchResult = todos.filter((todo) => {
    return todo.text.includes(searchValue)
  })

  console.log("Estamos Buscando TODOS de " + searchValue);
  console.log(setTodos);
  
  return (
    <React.Fragment>
      <TodoHead />
      <CloseTodoButton />
      <TodoCounter completed={todosCompleted} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchResult.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
