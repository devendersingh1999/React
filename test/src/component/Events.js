import React from 'react'

const Events = (props) => {

  return (
    // Turnary operator Condition ? true : false 
    <>    
    {props.isLogged ? <button onClick={props.logout}>Logout</button> : <button onClick={props.login}>Login</button>}
      
    </>
  )
}

export default Events
