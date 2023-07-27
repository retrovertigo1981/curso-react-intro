import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage(
    "TODOS_V1",
    []
  );

  const [searchValue, setSearchValue] = React.useState("");

  const [showButton, setShowButton] = React.useState("btn");

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const isVisible = scrollPosition >= 250 ? "btn btn-hide" : "btn";
      setShowButton(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [openModal, setOpenModal] = React.useState(false);

  const todosCompleted = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;

  const searchResult = todos.filter((todo) => {
    return todo.text.includes(searchValue);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

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
    <TodoContext.Provider
      value={{
        loading,
        error,
        todosCompleted,
        totalTodos,
        searchValue,
        setSearchValue,
        searchResult,
        completeTodo,
        addTodo,
        deleteTodo,
        openModal,
        showButton,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
