/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function ToDoList() {
    const [task, setTask] = useState("");
    const [newTask, setNewTask] = useState([]);

    function handleInputChange() {
        setTask(event.target.value);
    }

    function addTask() {
        setNewTask([...newTask, task]);
        setTask("");
    }

    function deleteTask(index) {
        setNewTask(newTask.filter((task, i) => i !== index));
    }

    return(
        <div className="todo-list">
            <h1>TO DO LIST</h1>
            
            <div>
                <input type="text" value={task} onChange={handleInputChange} placeholder="Enter a task"/>
                <button onClick={() => addTask()}>Add Task</button>
            </div>

            <ol>
                {newTask.map((newTask, index) => 
                    <li key={index}>
                        <span className="text">{newTask}</span>
                        <button onClick={() => deleteTask(newTask.indexOf(task))}>Delete Task</button>
                    </li>
                )}
            </ol>
            
        </div>
    );
}

export default ToDoList;