import React, { useState } from 'react'

const Task = ({todo, addTask}) => {

    const [text, setText] = useState('');

    console.log('rendering chind');


    const handleTask = () => {
      addTask(text);
  }

  

  return (
    <div>
          
          
          <input type='text' value={text} onChange={(e) => setText(e.target.value)}/> 

        <button onClick={handleTask}>Add Task</button>
        
      {todo.map((task, index) =>{  return  <p key ={index  }> {index + 1}. {task}</p> })}
       
    </div>
  )
}

export default React.memo(Task);


