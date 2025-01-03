
import React from 'react'

const SwitchCase = (props) => {

    switch(true){

        case props.isLogged && props.isAdmin : return <h2>Welcome Admin</h2>

        case props.isLogged && ! props.isAdmin : return <h2>Welcome User</h2>

        default : return <h2>Please Login</h2>
    }
  
}

export default SwitchCase;
