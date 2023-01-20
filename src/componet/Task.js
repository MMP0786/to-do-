import React from 'react'

export default function Task(props) {
  function handleMarkComletedClick(){
    props.updateTask(props.index)

  }

  function handleRemoveTask(){
    props.removeTask(props.index);
  }
const Styled={
  background: props.completed ? "#f5f2eb":"#bfbbb2",
 display:"flex",
 width:"350px",
//  justifyContent:"end"
justifyContent: 'space-between',
// background:"#9c9994",
margin:"10px"

}

  return (
    <div style={Styled}>
      <div>{props.title}</div>
      <div>
       {props.completed && <button style={{background:"green", border:"none", height:"100%"}}> Completed </button>} 
       {!props.completed && <button onClick={handleMarkComletedClick}>Mark Completed</button>}
       <button onClick={handleRemoveTask} style={{background:"red"}}> Remove</button>

      </div>
    </div>
  )
}
