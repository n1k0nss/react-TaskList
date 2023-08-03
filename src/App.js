import React, {useState} from "react";
import '../src/styles/App.scss';
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import MySelect from "./components/ui/MySelect";

function App() {
        const [tasks, setTasks] = useState([
            {id: 1, userId: 1, title: 'lorem ipsum dolor sit', completed: false},
            {id: 2, userId: 1, title: 'asdasfcz', completed: true},
            {id: 3, userId: 2, title: '1231rq', completed: true},
            {id: 4, userId: 3, title: 'dasfsdfsfat', completed: false}
        ])
    const [selectedSort, setSelectedSort] = useState('')
    const createTask = (newTask) => {
            setTasks([...tasks, newTask])
    }
    const removeTask = (task) => {
            setTasks(tasks.filter(t => t.id !== task.id))
    }
    const sortPosts = (sort) => {

    }


  return (
    <div className="app container">
        <TaskForm tasks={tasks} create={createTask}/>
        <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Sort:"
            options={[
            {value: 'titleName', name:'By task name'},
            {value: 'userIdAsc', name:'By user 0-9'},
            {value: 'userIdDesc', name:'By user 9-0'},
            {value: 'completed', name:'Completed'},
            {value: 'uncompleted', name:'Not completed'},

        ]}/>
        {tasks.length !== 0
        ? <TaskList tasks={tasks} title='Tasks' remove={removeTask}/>
        : <span className={'app__not-found'}>Tasks not found!</span>
        }

    </div>
  );
}

export default App;
