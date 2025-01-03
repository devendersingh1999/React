import React from 'react'

const Condition = (props) => {
  return (
    <>
    { props.msg > 0 &&  <h1>You hava a {props.msg} unread Message </h1> }
    </>

  )
}

export default Condition;
