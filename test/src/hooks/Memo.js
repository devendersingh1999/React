import React, { useMemo, useState } from 'react'

const Memo = () => {

    const [number, setNumber] = useState(0);

    function findCube(num){
        console.log('calculating cube');
        
        return (Math.pow(num, 3));

    }
    //  const result = findCube(number);

    const result = useMemo(() => {

        return findCube (number)
      
      },[number]);
  return (
    <div>
      <h3>It will rerun cube</h3>
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
      <h1>Cube: {result}</h1>

</div>
  )
}

export default Memo
