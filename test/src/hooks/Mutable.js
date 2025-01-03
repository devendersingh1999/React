import React, { useEffect, useRef, useState } from 'react'

const Mutable = () => {

    const [count, setCount] = useState(0);

const countRef= useRef(0);

const incrementRef= () => {

    countRef.current += 1;
}

useEffect( () =>{

    console.log("Re-render");
});

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>  

        <h1>countRef: {countRef.current}</h1>    
        <button onClick={incrementRef}>Increment</button>
    </div>
  )
}

export default Mutable;