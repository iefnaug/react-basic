// import { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
// import {useReducer} from "react";
import tasksReducer from "./tasksReducer";
import {useImmerReducer} from "use-immer";

let nextId = 3;
const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
];

export default function TaskApp() {
    // const [tasks, setTasks] = useState(initialTasks);

    // const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

    function handleAddTask(text) {
        // setTasks([
        //     ...tasks,
        //     {
        //         id: nextId++,
        //         text: text,
        //         done: false,
        //     }
        // ]);
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        // setTasks(
        //     tasks.map((each) => {
        //         if (each.id === task.id) {
        //             return task;
        //         }
        //         return each;
        //     })
        // );
        dispatch({
            type: 'changed',
            task: task,
        });
    }

    function handleDeleteTask(taskId) {
        // setTasks(tasks.filter((each) => each.id !== taskId));
        dispatch({
            type: 'deleted',
            id: taskId,
        });
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

