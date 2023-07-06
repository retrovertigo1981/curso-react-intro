import "./CreateTodoButton.css"; 

function CreateTodoButton() {
    
    const handleClick = () => {
        const btn = document.querySelector('.btn');
        const body = document.querySelector('.body');
        const closebtn = document.querySelector('.closeBtn');
        const root = document.querySelector('#root');
        btn.classList.toggle('active');
        closebtn.classList.toggle('active');
        body.classList.toggle('active');
        root.classList.toggle('active');
        console.log('Botón clickeado');
    }
    return (
        <button className="btn" onClick={handleClick}>
        +
        </button>
        
      );
}

export {CreateTodoButton}