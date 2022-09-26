import { useState } from "react";

const ToDoDisplay = (props) => {
    const taskList = [];
    return (
        <>
            <h1>To-Do List:</h1>
            <pre>{props.task} </pre>
        {
            taskList.map( (item, index) =>
                <li key={index}>{item}</li>
            )
        }
        </>
    )
}

export default ToDoDisplay;