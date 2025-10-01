import { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

let nextId = 3;
const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
];

export default function TaskApp() {
    const [tasks, setTasks] = useState(initialTasks);

    function handleAddTask(text) {
        setTasks([
            ...tasks,
            {
                id: nextId++,
                text: text,
                done: false,
            }
        ]);
    }

    function handleChangeTask(task) {
        setTasks(
            tasks.map((each) => {
                if (each.id === task.id) {
                    return task;
                }
                return each;
            })
        );
    }

    function handleDeleteTask(taskId) {
        setTasks(tasks.filter((each) => each.id !== taskId));
    }

    return (
        <>
            <h1>Prague itinerary</h1>
            <AddTask onAddTask={handleAddTask}/>
            <TaskList tasks={tasks}
                      onChangeTask={handleChangeTask}
                      onDeleteTask={handleDeleteTask}/>
        </>
    )
}

