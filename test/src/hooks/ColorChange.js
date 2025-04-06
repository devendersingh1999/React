import React, { useState } from 'react'

const ColorChange = () => {

    const[color, setcolor]= useState("blue");

    const updateColor= () =>{
        setcolor((prev) => (prev === "blue" ? "red" : "blue"));
        //toggle the color between blue and red
    }
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={updateColor}>change color</button>
    </div>
  )
}

export default ColorChange;
