import { TodoHead } from "./TodoHead";
import { CloseTodoButton } from "./CloseTodoButton";
import {TodoCounter} from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";

import React from 'react';




const defaultTodos = [
  {text: 'HACER LA CAMA', completed: false},
  {text: 'LAVAR LOS PLATOS', completed: true},
  {text: 'ESTUDIAR REACT.JS', completed: true},
  {text: 'COMPRAR XBOX SERIES S', completed: false},
  {text: 'ESTUDIAR CSS', completed: true}
]

function App() {
  
  return (
    
    <React.Fragment>
      <TodoHead/>
      <CloseTodoButton/> 
      <TodoCounter completed={4} total={8}/>
      <TodoSearch/> 
       <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text} 
            completed={todo.completed}           
          /> 
        ))}
      </TodoList>

      <CreateTodoButton/>     
      
    </React.Fragment>
  );
}

export default App;

