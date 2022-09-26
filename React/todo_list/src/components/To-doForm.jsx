import { useState } from "react";

const ToDoForm = (props) => {
    const [task, setTask] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        props.onNewTask(task);
    };

    return (
        <form onSubmit={submitHandler}>
            <h1>Create a Task:</h1>
            <textarea rows="4"
                cols="50"
                placeholder="Enter task here"
                onChange={ (e) => setTask (e.target.value)}
                value={task}></textarea>
            <input type="submit" value="Create task" />
        </form>
    )
}

export default ToDoForm