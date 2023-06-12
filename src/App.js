import {TodoCounter} from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import React from 'react';
import "./App.css";

const defaultTodos = [
  {text: 'Hacer la cama', completed: false},
  {text: 'Lavar los platos', completed: true},
  {text: 'Estudiar React.js', completed: true},
  {text: 'Comprar la Xbox Series S', completed: false}
]

function App() {
  
  return (
    
    <React.Fragment>
      
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
      <span>V</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>      
  );
}

export default App;

