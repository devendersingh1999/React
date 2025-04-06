import React, { useCallback, useState } from 'react'
import Task from './Task';

const CallBack = () => {

  
    // const [count, setCount] = useState(0);
    const [todo ,setTodo] = useState([]);

    const addTask = useCallback((task) => {
        setTodo(pre => [...pre , task])

    },[]
);


  return (
    <div>
      <Task todo={todo} addTask={addTask}/>

      </div>

      /* <h1>Count: {count}</h1>
      <button onClick={() => setCount(count +1)}>Increment</button> */
    
  )
}

export default CallBack
