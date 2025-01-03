import React, { useState } from 'react'

const Counter = () => {

    const [Count, setCount] =useState(0);

   const increment=() =>{
        setCount (Count + 1);
    }

   const decrement = () => {
        setCount(Count -1);
    }
  return (
    <div className='btn-group '>
        <button type='button' className='btn btn-primary' onClick={decrement}>-</button>
        <span className='p-2'>{Count}</span>
        <button type='button' className='btn btn-primary' onClick={increment}>+</button>
      

    </div>
  )
}

export default Counter
