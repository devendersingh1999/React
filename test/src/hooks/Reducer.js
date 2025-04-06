import React, { Fragment, useReducer } from 'react'
//intial value
const initialValue=0;

//calculate is reducer in useReducer
const Calculate = (count, action) =>{

    switch(action.type){
        case 'decrement' : return count - 1;
        case 'increment' : return count + 1;
        case 'reset' : return 0;
        default : return count;
    }
    
}


const Reducer = () => {

 // const [state, dispatch] = useReducer(Reducer, initial value);
    const [count , dispatch] = useReducer(Calculate, initialValue);



  return (
    
  <Fragment>
    <h1>Count: {count}</h1>
    <button onClick={() => dispatch({type : 'decrement'})}> - </button>

    <button onClick={() => dispatch({type : 'increment'})}> + </button>
    
    <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
  </Fragment>
  )
}

export default Reducer
