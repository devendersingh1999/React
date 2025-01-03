
import React from 'react';

function BooleanValues (props) {

    if(props.status)
    {
        
        return( 
            <>
            <h1>Status : Active </h1>
            <h3>Brand: {props.prop.brand}</h3>
            <h3>Color: {props.prop.color}</h3>
            <h3>Price: ${props.prop.price}</h3>
            </>)
    }
    else
    {
        return <h1>Status : Inactive</h1>
    }
  
}

export default BooleanValues

