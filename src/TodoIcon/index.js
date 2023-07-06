import { ReactComponent as CheckSVG } from "../svg/check-icon.svg";
import { ReactComponent as DeleteSVG } from "../svg/delete-icon.svg";
import "./TodoIcon.css"

const iconTypes = {
    "check": (color) => <CheckSVG className = "Icon-svg" fill = {color}/>,
    "delete": (color) => <DeleteSVG className = "Icon-svg" fill = {color}/>,
}


function TodoIcon({type, color, onClick}) {
    return (
        <span className={`${type}`} onClick={onClick}>
            { iconTypes[type](color) } 

        </span>
    )
}

export { TodoIcon }