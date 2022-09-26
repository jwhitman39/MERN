// import logo from './logo.svg';
import { useState } from 'react';
import ToDoForm from './components/To-doForm';
import ToDoDisplay from './components/To-doDisplay';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const taskItem = {
    text: newTask,
    complete: false
  }


  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, taskItem]);
    setNewTask('')}
  const handleTaskDelete = (deleteIndex) => {
    const filteredTasks = tasks.filter((task, index) => {
      return index != deleteIndex;
    });
    setTasks(filteredTasks);
  }
  const checkTask = (idx) => {
    const updatedTasks = tasks.map((task, index) => {
      if (idx === index){
        task.complete = !task.complete;
        // To avoid mutating state:
        // const updatedTask = {...task, complete: !task.complete};
        // return updatedTask;
      }
      return task;
    });

    setTasks(updatedTasks);
  }
  // const taskCreated = ( newTask ) => {
  //   setCurrentTask (newTask);
  // }
  return (
    <>
    <form onSubmit={(e) => {
      handleNewTaskSubmit(e);
    }}>
      <input onChange={(e) => {
        setNewTask(e.target.value);
      }}
      type="text"
      value={newTask}
      />
      <div>
        <button>Add Task</button>
      </div>
    </form>

    {tasks.map((task, index) => {
      const taskClasses = [];
      if (task.complete) {
        taskClasses.push("strikethru")
      }
      return( 
        <div key={index}>
          <input onChange={(e) => {
            checkTask(index);
          }} checked={task.complete} type="checkbox"
          />
          <p className={taskClasses.join('')}>{task.text}</p>
          <button onClick={(e) =>{
            handleTaskDelete(index);
          }
          }>Delete Task</button>
        </div>
      );
    })}

      {/* <ToDoForm onNewTask={taskCreated} />
      <ToDoDisplay task={currentTask} /> */}
    </>
  );
}

export default App;
