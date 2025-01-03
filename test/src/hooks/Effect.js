import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [count, setCount]= useState(0);
    const [color, setColor]= useState("blue");

    //without Dependency Array
    useEffect(() =>{

        console.log("compnent Render");
    });

    //Empty Dependency Array
    useEffect(() =>{

        console.log("component mounted")
    }, []);

    useEffect(() =>{

        console.log("component Updated")

        return()=>{
            console.log("cleanup function Executed")
        }
    }, [count, color]);

  // Toggle color function
  const toggleColor = () => {
    setColor(prevColor => (prevColor === "blue" ? "red" : "blue"));
  };

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>   

        <h1>Color : {color}</h1>
        <button onClick={toggleColor}>ChangeColor</button>   
    </div>
  )
}

export default Effect
