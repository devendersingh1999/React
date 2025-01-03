import React, { Component } from 'react'

 class Timer extends Component {

    constructor(){
        super();

        this.state={
            seconds: 0
        }
    }

    tick= () =>{

        this.setState({ seconds: this.state.seconds + 1})
    }
// check the object is created in dom
    componentDidMount(){

        this.timerInterval = setInterval(this.tick, 2000);

    }

    //check the value is updated or not 
    componentDidUpdate(){

        console.log("timer updated")
    }

    stopTimer = () => {
        clearInterval(this.timerInterval);
        console.log("timer stopped");
        
    }
    // componentWillUnmount() {
    //   // Clean up the timer when the component unmounts
    //   clearInterval(this.timerInterval);
    //   console.log('Timer stopped');
    // }
  

  render() {
    return (
      <div>
      
        <span>{this.state.seconds}</span>
        <br />
        <button onClick={this.stopTimer}> Stop Timer </button>
        
        
      </div>
    )
  }
}
export default Timer;