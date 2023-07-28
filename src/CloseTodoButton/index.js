import React from "react";
import { TodoContext } from "../TodoContext";
import "./CloseTodoButton.css";

function CloseTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  const handleClick = () => {
    const closebtn = document.querySelector(".closeBtn");
    const body = document.querySelector(".body");
    const btn = document.querySelector(".btn");
    const root = document.querySelector("#root");
    const modal = document.querySelector("#modal");
    modal.classList.remove("active");
    closebtn.classList.toggle("active");
    btn.classList.toggle("active");
    body.classList.toggle("active");
    root.classList.toggle("active");
    console.log("Botón clickeado");
    setTimeout(() => {
      setOpenModal(!openModal);
    }, 700);
  };
  return (
    <button className="closeBtn" onClick={handleClick}>
      +
    </button>
  );
}

export { CloseTodoButton };
