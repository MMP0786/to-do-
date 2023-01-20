// import React from "react";
// import Task from "./Task";

// export default function CreateTask(props) {
//   let [value, setValue] = React.useState("");

//   function handleSubmit(even) {
//     even.preventDefault();
//     props.addTask({
//         title: value,
//         completed: false
//     }
//     )

//     setValue('')
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>

//       <input
//         type="text"
//         value={value}
//         placeholder={"enter your to do"}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <input type="submit" />
//       </form>
//     </div>
//   );
// }

import React from 'react'

export default function CreateTask(props) {

  const [value, setValue] = React.useState('');

  function handleSubmit(e){
    e.preventDefault();
    props.addTask(
      {
        title:value,
        completed: false
      }
    )
    setValue('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"  placeholder='Add to Do' value={value} onChange={(e)=>setValue(e.target.value)} />
        <input type="submit" />
        
      </form>
    </div>
    
  )
}

