import "./css/TodoCounter.css"

function TodoCounter({completed, total}) {
  return (
    
    <h2 className="TodoCounter">
      Has Completado <span>{completed}</span> de <span>{total}</span> Tareas
    </h2>
  );
}

export {TodoCounter}