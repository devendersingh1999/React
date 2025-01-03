import React, { useEffect, useState } from 'react'

const Props = ({name}) => {

const [message , setMessage]= useState(' ');

useEffect(()=>{

                    let msg;

                    if(name)
                    {
                        msg=`Welcome ${name}`;
                    }

                    else
                    {
                        msg=`Welcome Guest`;
                    }

                    setMessage(msg);
                 },[name]);


  return (
    <div>
      {message}
    </div>
  )
}

export default Props
