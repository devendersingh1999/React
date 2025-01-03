import React, { Component } from 'react'

export default class CompLifeCycle extends Component {

    constructor(){
        super();

        this.state={
            count: 0
        }
    }

    componentDidMount(){

        console.log("component inserted into dom")
    }

    componentDidUpdate(){

        console.log("count updated")
    }

    componentWillUnmount(){

        console.log("component removed from dom")
    }

    incremernt= () =>{

        this.setState({ count: this.state.count + 1})
    }

    decrement= () =>{

        this.setState({ count: this.state.count - 1})
    }

  render() {
    return (
      <div>
        <button onClick={this.decrement}> - </button>
        <span>{this.state.count}</span>
        <button onClick={this.incremernt}> + </button>
        
      </div>
    )
  }
}