import React from 'react';
import { TodoContext } from '../TodoContext';
import { CloseTodoButton } from '../CloseTodoButton';
import './TodoForm.css';

function TodoForm() {
    const {addTodo} = React.useContext(TodoContext);
   
    const [textArea, setTextArea] = React.useState('');

    const onChange = (e) => setTextArea(e.target.value);
    
    const handleClearClick = () => {
        setTextArea('');
    }

    const handleAddClick = () => {
        if (textArea === ''){
            alert('Debes Ingresar una tarea')
        }else{
            addTodo(textArea.toUpperCase());
            setTextArea('');
        }
        
    }


    return (
        <form onSubmit={(event) => {
            event.preventDefault()
        }}>
            
            <label>Escribe tus Tareas</label>
            <CloseTodoButton/>
            <textarea
                placeholder='Estudiar React'
                value={textArea}
                onChange={onChange}
            />
            <div className='todoform-btns-container'>
                <button
                    type='button' 
                    className='btns btn-clear' 
                    onClick={handleClearClick}>
                    Limpiar
                </button>
                <button
                    type='submit' 
                    className='btns btn-add-todo'
                    onClick={handleAddClick}>
                        Aceptar
                </button>       
            </div>
                     
            
        </form>
        
    )
}

export { TodoForm }