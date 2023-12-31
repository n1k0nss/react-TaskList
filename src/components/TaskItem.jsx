import React from 'react';
import MyButton from "./ui/MyButton";

const taskItem = (props) => {
    return (
        <div className="task">
            <div className="task__box">
                <h2 className="task__title">Task {props.task.id}</h2>
                <span className="task__user">User {props.task.userId}</span>
                <p className="task__text">{props.task.title}</p>
            </div>
            <MyButton onClick={() => props.remove(props.task)} className="task__delete">Delete</MyButton>
            <span className={
                'task__status ' +
                (props.task.completed ? 'task__status--complete' : 'task__status--uncomplete')
            }>{props.task.completed ? 'Completed' : 'Uncompleted'}</span>
        </div>
    );
};

export default taskItem;