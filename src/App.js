import { TodoHead } from "./TodoHead";
import { CloseTodoButton } from "./CloseTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";

import React from "react";

// const defaultTodos = [
//   { text: "HACER LA CAMA", completed: false },
//   { text: "LAVAR LOS PLATOS", completed: false },
//   { text: "ESTUDIAR REACT.JS", completed: false },
//   { text: "COMPRAR XBOX SERIES S", completed: false },
//   { text: "ESTUDIAR CSS", completed: false },
//   { text: "ESTUDIAR GSAP", completed: false },
// ];

function useLocalStorage(itemName, initialValue) {
    
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else {
    parsedItem = JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem))
    setItem(newItem)
  }
  return [item, saveItem]
}

function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState("");
  
  
  const todosCompleted = todos.filter(todo => !!todo.completed).length;
  
  const totalTodos = todos.length;

  const searchResult = todos.filter((todo) => {
    return todo.text.includes(searchValue)
  });


 

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }


  
  
  return (
    <React.Fragment>
      <TodoHead />
      <CloseTodoButton />
      <TodoCounter completed={todosCompleted} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchResult.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
