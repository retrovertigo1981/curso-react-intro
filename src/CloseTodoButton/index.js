import './CloseTodoButton.css';

function CloseTodoButton() {
    
    const handleClick = () => {
        const closebtn = document.querySelector('.closeBtn');
        const body = document.querySelector('.body');
        const btn = document.querySelector('.btn');
        const root = document.querySelector('#root');
        
        closebtn.classList.toggle('active');
        btn.classList.toggle('active');
        body.classList.toggle('active');
        root.classList.toggle('active');
        console.log('Botón clickeado');
    }
    return (
        <button className="closeBtn" onClick={handleClick}>
        +
        </button>
        
      );
}

export {CloseTodoButton}