import React, {useState} from "react";
import '../src/styles/App.scss';
import TaskList from "./components/TaskList";
import MyButton from "./components/ui/MyButton";
import MyInput from "./components/ui/MyInput";

function App() {
        const [tasks, setTasks] = useState([
            {id: 1, userId: 1, title: 'lorem ipsum dolor sit', completed: false},
            {id: 2, userId: 1, title: 'asdasfcz', completed: true},
            {id: 3, userId: 2, title: '1231rq', completed: true},
            {id: 4, userId: 3, title: 'dasfsdfsfat', completed: false}
        ])
    const [completed, setComplete] = useState(false)
    const [task, setTask] = useState({userId: '', title: ''})
    const addNewPost = (e) => {
        e.preventDefault()
        setTasks([...tasks, {...task, id: tasks.length + 1, completed: completed}])
        setComplete(false)
        setTask({userId: '', title: ''})
    }
  return (
    <div className="app container">
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
        <TaskList tasks={tasks} title='Tasks'/>
    </div>
  );
}

export default App;
