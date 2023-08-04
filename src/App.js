import React, {useMemo, useState} from "react";
import '../src/styles/App.scss';
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import MySelect from "./components/ui/MySelect";
import MyInput from "./components/ui/MyInput";
import TaskFilter from "./components/TaskFilter";

function App() {
        const [tasks, setTasks] = useState([
            {id: 1, userId: 1, title: 'lorem ipsum dolor sit', completed: false},
            {id: 2, userId: 1, title: 'asdasfcz', completed: true},
            {id: 3, userId: 2, title: '1231rq', completed: true},
            {id: 4, userId: 3, title: 'dasfsdfsfat', completed: false}
        ])
    const [filter, setFilter] = useState({sort: '', query: ''})


    const sortedTasks = useMemo( () => {
        switch (filter.sort) {
            case 'titleName' : {
                let value= 'title'
                return [...tasks].sort((a, b) => a[value].localeCompare(b[value]));
            }
            case 'id': {
                let value= 'id'
                return [...tasks].sort((a, b) => a[value] - b[value])
            }
            case 'userIdAsc': {
                let value= 'userId'
                return [...tasks].sort((a, b) => a[value] - b[value])
            }
            case 'userIdDesc': {
                let value= 'userId'
                return [...tasks].sort((a, b) => b[value] - a[value])
            }
            case 'completed': {
                let value = 'completed'
                return [...tasks].sort((a, b) => b[value] - a[value])
            }
            case 'uncompleted': {
                let value = 'completed'
                return [...tasks].sort((a, b) => a[value] - b[value])
            }
            default: return tasks;
        }
    }, [filter.sort, tasks]) ;

    const sortAndSearchPosts = useMemo(() => {
            return sortedTasks.filter(task => task.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedTasks])

    const createTask = (newTask) => {
            setTasks([...tasks, newTask])
    }
    const removeTask = (task) => {
            setTasks(tasks.filter(t => t.id !== task.id))
    }

  return (
    <div className="app container">
        <TaskForm tasks={tasks} create={createTask}/>
        <TaskFilter filter={filter} setFilter={setFilter} />
        {sortAndSearchPosts.length !== 0
        ? <TaskList tasks={sortAndSearchPosts} title='Tasks' remove={removeTask}/>
        : <span className={'app__not-found'}>Tasks not found!</span>
        }

    </div>
  );
}

export default App;
