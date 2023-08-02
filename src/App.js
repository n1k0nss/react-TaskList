import React, {useState} from "react";
import '../src/styles/App.scss';
import TaskList from "./components/TaskList";
import MyButton from "./components/ui/MyButton";
import MyInput from "./components/ui/MyInput";
import TaskForm from "./components/TaskForm";
import taskForm from "./components/TaskForm";

function App() {
        const [tasks, setTasks] = useState([
            {id: 1, userId: 1, title: 'lorem ipsum dolor sit', completed: false},
            {id: 2, userId: 1, title: 'asdasfcz', completed: true},
            {id: 3, userId: 2, title: '1231rq', completed: true},
            {id: 4, userId: 3, title: 'dasfsdfsfat', completed: false}
        ])

    const createTask = (newTask) => {
            setTasks([...tasks, newTask])
    }
    const removeTask = (task) => {
            setTasks(tasks.filter(t => t.id !== task.id))
    }


  return (
    <div className="app container">
        <TaskForm tasks={tasks} create={createTask}/>
        <TaskList tasks={tasks} title='Tasks' remove={removeTask}/>
    </div>
  );
}

export default App;
