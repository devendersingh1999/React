import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    const { username } = useParams();

  return (
    <div>
        <h1>User Component</h1>
        <p> Displaying info of user : {username} </p>
    </div>
  )
}

export default User;