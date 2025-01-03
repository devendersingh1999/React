import React, { useState } from 'react'

const Obj = () => {

    const [person, setPerson] = useState({

        name : "alex",
        age: 24,
        location: "india"
    })

    const updateDetails = () =>{

        setPerson((prev) =>{

            return{ ...prev, name: "Dev" }
        })
    }

  return (
    <div>
      <h1>Name: {person.name}</h1><br/>
      <p1>Age: {person.age}</p1><br/>
      <p1>location: {person.location}</p1><br/>

      <button onClick={updateDetails}>updateDetails</button>
    </div>
  )
}

export default Obj;
