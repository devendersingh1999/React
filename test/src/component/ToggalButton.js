import React, { Component } from 'react'

export default class ToggalButton extends Component {

    constructor() {
      super()
    
      this.state = {

        isON : true
         
      }
    }

      toggalbtn = () =>{

        this.setState({
             isON : !this.state.isON
        })
      }
    
    
  render() {
    return (
      <div>
        <button onClick={this.toggalbtn}>{this.state.isON ? 'ON' : 'OFF'}</button>
      </div>
    )
  }
}
