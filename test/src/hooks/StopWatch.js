import React, {  useState } from 'react'

const StopWatch = () => {

    const [Seconds , setSeconds] = useState(0);
    const [running, setRunning]= useState(false);
    const [intervalId , setIntervalId]=useState(null);

    const startTimer= ()=>{

    if(!running){
        setRunning(true);
        const id= setInterval(() => setSeconds(Seconds => Seconds + 1) , 1000);
        setIntervalId(id);
    }
    }

    const stopTimer= ()=>{
        if(running){
            setRunning(false);
            clearInterval(intervalId);
        }
    }
  return (
    <div>
    
     <h1>{Seconds}</h1>
     
     {running ? <button onClick={stopTimer}>Stop</button> : <button onClick={startTimer}>Start</button> }
    </div>
  )
}

export default StopWatch;
