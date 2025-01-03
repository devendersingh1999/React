import React, { useRef } from 'react'


/*
key point
------------
1. useRef Object stored in the .current property
2. the change in .current value does not cause the whole page re-render*/

const Dom = () => {

const inputName= useRef(null);

    const addName= () => {

        inputName.current.value="Alex";
        inputName.current.style.color="red";
    }
  return (
    <div>
      
      <input type='text' ref={inputName}/>
      <button onClick={addName}>Apply Dom</button>

    </div>
  )
}

export default Dom
