import { TodoHead } from "./TodoHead";
import {TodoCounter} from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import "./css/App.css";
import React from 'react';




const defaultTodos = [
  {text: 'HACER LA CAMA', completed: false},
  {text: 'LAVAR LOS PLATOS', completed: true},
  {text: 'ESTUDIAR REACT.JS', completed: true},
  {text: 'COMPRAR XBOX SERIES S', completed: false},
  {text: 'ESTUDIAR CSS', completed: false}
]

function App() {
  
  return (
    
    <React.Fragment>
      <TodoHead/>
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

function TodoItem(props) {
  return(  
    <li>
      <span><input type="checkbox"></input></span>
      <p>{props.text}</p>
      <span>X</span>
    </li>      
  );
}

export default App;

