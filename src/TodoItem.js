import './css/TodoItem.css'

function TodoItem(props) {
    return(  
      <li>
        <span><input className="check" type="checkbox"></input></span>
        <p className={`${props.completed && "complete"}`}>{props.text}</p>
        <span className="close">X</span>
      </li>      
    );
}

export {TodoItem};