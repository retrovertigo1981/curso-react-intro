import React from "react";
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
import { EmptySearchResult } from "../EmptySearchResult";
import { LoaderTodos } from "../LoaderTodos";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const {
    loading,
    error,
    searchResult,
    showButton,
    completeTodo,
    deleteTodo,
    totalTodos,
    openModal,
    // setOpenModal
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoHead />
      <CloseTodoButton />
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <LoaderTodos />
          </>
        )}

        {error && <TodosError />}
        {!loading && totalTodos === 0 && <EmptyTodos />}
        {!loading && searchResult.length === 0 && totalTodos !== 0 && (
          <EmptySearchResult />
        )}

        {searchResult.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {showButton && <CreateTodoButton />}

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
