import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css"; 


function CreateTodoButton() {
    
    const {openModal, setOpenModal, showButton} = React.useContext(TodoContext);
    
    
    const handleClick = () => {
        setOpenModal(!openModal);
        const btn = document.querySelector('.btn');
        const body = document.querySelector('.body');
        // const closebtn = document.querySelector('.closeBtn');
        const root = document.querySelector('#root'); 
        const modal = document.querySelector('#modal');
        modal.classList.add('active');       
        btn.classList.toggle('active');
        // closebtn.classList.toggle('active');
        body.classList.toggle('active');
        root.classList.toggle('active');        
    }
    return (
        <button className={showButton}  onClick={handleClick}>
        +
        </button>
        
      );
}

export { CreateTodoButton }