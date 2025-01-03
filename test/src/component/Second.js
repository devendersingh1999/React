import React from 'react'

function Second(props){

    return(
        <>
        <h1>This is function component</h1>
        <p>This name is : {props.username}</p>
        <p>This name is : {props.age}</p>
        </>
    );
}

export default Second;
