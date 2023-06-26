import React from "react";
import "./css/TodoSearch.css"

function TodoSearch({searchValue,setSearchValue}) {
    
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