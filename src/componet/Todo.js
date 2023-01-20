import React from "react";
import CreateTask from "./CreateTask";
import Task from "./Task";

export default function Todo() {
  let [tasks, setTasks] = React.useState([]);
  function addTask(tas) {
    setTasks((tasks) => {
      return [...tasks, tas];
    });
  }

  function createCounter(){
    let ct =0;
    tasks.forEach(task =>{
      if(!task.completed){
        ct= ct+1
      }
    })
    return ct;
  }
// localStorage.clear()
    // React.useEffect(() => {
    //     let t = localStorage.getItem('tasks');
    //     t = JSON.parse(t);
    //     setTasks(() => t);
    //     // console.log(t)
    //     console.log('inside ')
    // },[]);

    // React.useEffect(() => {
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    //     console.log('dldd')
    // }, [tasks]);

    React.useEffect(() => {
      let t = localStorage.getItem('tasks');
      t = JSON.parse(t);
      setTasks(() => t);
  }, []);

  React.useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  function updateTask(index) {
    setTasks((tasks)=>{
      const newTask =[...tasks];
      newTask[index].completed =true;
      return newTask;
    })
  }

  function removeTask(index) {
    setTasks((tasks) => {
      const newTask = [...tasks];
      newTask.splice(index, 1);
      return newTask;
    });
  }
const styled={
  margin: "auto",
  border:'1px solid',
  width:"400px",
  padding: '10px'
}

  return (
    <div style={styled}>
      <h2>Pending To do {createCounter()}</h2>
      <CreateTask addTask={addTask} />
      <br></br>
      {tasks.map((t, index) => (
        <Task {...t} key={index}
         updateTask={updateTask} removeTask={removeTask } index={index} />
      ))}
      {/* <div>Todo</div> */}
    </div>
  );
}
