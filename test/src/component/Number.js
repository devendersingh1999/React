import React from 'react'

const Number = (props) => {

    const numb=props.number;
    const num=numb.map((i) =>{

        return <p  className='px-4 fs-2'>  {i}  </p>
    })

  return (
    <div className='px-4 fs-2'>
      {num}
    </div>
  )
}

export default Number;
