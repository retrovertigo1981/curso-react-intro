import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import "./App.css";

function App() {
  
  return (
    
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      {/* <CreateTodoButton/> */}     
      
    </div>
  );
}

function TodoItem() {
  return(  
    <li>
      <span>V</span>
      <p>Llorar con la llorona</p>
      <span>X</span>
    </li>      
  );
}

export default App;

