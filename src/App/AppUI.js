import { TodoHead } from "../TodoHead";
import { CloseTodoButton } from "../CloseTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { LoaderTodos } from "../LoaderTodos";


function AppUI({
    loading,
    error,
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
            {loading && 
            (
            <>
            <TodosLoading/> 
            <LoaderTodos/>
            </>
            )}
            
            {error && <TodosError/>}
            {(!loading && searchResult.length === 0) && <EmptyTodos/> }
            
            
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