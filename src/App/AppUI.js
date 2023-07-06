import { TodoHead } from "../TodoHead";
import { CloseTodoButton } from "../CloseTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";


function AppUI({
    todosCompleted,
    totalTodos,
    searchValue, 
    setSearchValue,
    searchResult,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
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
        </>
      );
    
}

export { AppUI }