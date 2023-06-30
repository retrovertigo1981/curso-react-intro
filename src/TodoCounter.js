import "./css/TodoCounter.css"

function TodoCounter({ completed, total }) {
  return (
    <h2 className="TodoCounter">
      {completed === total ? (
        <>Las tareas están completadas</>
      ) : (
        <>
          Has completado <span>{completed}</span> de <span>{total}</span> tareas
        </>
      )}
    </h2>
  );
}

export { TodoCounter };
