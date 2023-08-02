import React, {useState} from 'react';
import MyInput from "./ui/MyInput";
import MyButton from "./ui/MyButton";

const TaskForm = ({tasks, create}) => {
    const [completed, setComplete] = useState(false)
    const [task, setTask] = useState({userId: '', title: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newTask = {
            ...task, id: tasks.length + 1, completed: completed
        }
        create(newTask)
        setComplete(false)
        setTask({userId: '', title: ''})
    }
    return (
        <form className={'task-form'}>
            <MyInput
                value={task.userId}
                onChange={e => setTask({...task, userId: e.target.value})}
                type="number"
                placeholder="UserId"
            />
            <MyInput
                value={task.title}
                onChange={e => setTask({...task, title: e.target.value})}
                type="text"
                placeholder="Title"
            />
            <label htmlFor="completed">
                Completed
                <input
                    checked={completed}
                    onChange={() => setComplete((state) => !state)}
                    id="completed"
                    type="checkbox"
                />
            </label>
            <MyButton onClick={addNewPost}>Add task</MyButton>
        </form>
    );
};

export default TaskForm;