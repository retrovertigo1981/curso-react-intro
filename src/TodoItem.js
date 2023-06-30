import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon'
import './css/TodoItem.css'

function TodoItem(props) {
    return(  
      <li>
        <CompleteIcon completed = {props.completed} onComplete = {props.onComplete}/>
        <p className={`${props.completed && "complete"}`}>{props.text}</p>
        <DeleteIcon onDelete = {props.onDelete} />
        
      </li>      
    );
}

export { TodoItem };