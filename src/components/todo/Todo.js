import React, {useState} from "react";
import todo from './todo.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV, faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import ActionMenu from "../actionMenu/ActionMenu";

export const Todo = ({todo}) => {
    const [showActions, setShowActions] = useState(false);
    let completedCls = todo.resolved ? 'completed-colors' : '';

    const handleActionMenuClick = ()=> {
        setShowActions(!showActions);
    };




    return (
        <li data-id={todo.id} className={completedCls}>
            <p>{todo.name}</p>
            <p>
                <span className="creation-mark"><strong>Created Time {convertMsToTimeStr(todo.creationDate)}</strong></span>
                {
                    !showActions
                        ? <FontAwesomeIcon icon={faEllipsisV} className={'action-menu ' + completedCls} onClick={handleActionMenuClick}/>
                        : <FontAwesomeIcon icon={faEllipsisH} className={'action-menu ' + completedCls} onClick={handleActionMenuClick}/>
                }
            </p>
            {
                showActions && <div className="action-menu-wrapper"><ActionMenu data={todo}/></div>
            }
        </li>
    )
};

function convertMsToTimeStr(time) {
    let year = new Date(time).getUTCFullYear();
    let month = new Date(time).getUTCMonth() + 1;
    let day = new Date(time).getUTCDate();
    return `${day}/${month}/${year}`
}