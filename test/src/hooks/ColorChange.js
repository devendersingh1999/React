import React, { useState } from 'react'

const ColorChange = () => {

    const[color, setcolor]= useState("blue");

    const updateColor= () =>{
        setcolor("green");
    }
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={updateColor}>change color</button>
    </div>
  )
}

export default ColorChange;
