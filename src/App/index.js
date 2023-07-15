import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";

// const defaultTodos = [
//   { text: "HACER LA CAMA", completed: false },
//   { text: "LAVAR LOS PLATOS", completed: false },
//   { text: "ESTUDIAR REACT.JS", completed: false },
//   { text: "COMPRAR XBOX SERIES S", completed: false },
//   { text: "ESTUDIAR CSS", completed: false },
//   { text: "ESTUDIAR GSAP", completed: false },
// ];

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");

  const todosCompleted = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;

  const searchResult = todos.filter((todo) => {
    return todo.text.includes(searchValue);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      // loading={loading}
      // error={error}
      // todosCompleted={todosCompleted}
      // totalTodos={totalTodos}
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      // searchResult={searchResult}
      // completeTodo={completeTodo}
      // deleteTodo={deleteTodo}
    />
  );
}

export default App;
