import React from "react";
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
             
    } = React.useContext(TodoContext);
    
    const handleChange = (event) =>{
        setSearchValue(event.target.value.toUpperCase());
    }

    return(

        <input className="search"
        value={searchValue} 
        placeholder="Busca una tarea"
        onChange={handleChange}
        />
    );
   
}

export {TodoSearch}