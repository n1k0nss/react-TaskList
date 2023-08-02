import React from 'react';
import TaskItem from "./TaskItem";

const TaskList = ({tasks, title}) => {
    return (
        <div>
            <h1 className="app__title">{title}</h1>
            {tasks.map((task) =>
                <TaskItem task={task} key={task.id}/>
            )}
        </div>
    );
};

export default TaskList;