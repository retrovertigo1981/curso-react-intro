import "./css/TodoCounter.css"

function TodoCounter({completed, total}) {
  return (
    
    <h2>
      Has Completado {completed} de {total} Tareas
    </h2>
  );
}

export {TodoCounter}