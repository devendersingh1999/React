import React  from 'react'

class StateExample extends React.Component{
    constructor(){
        super();

        this.state={
            name: "alex"
        }
    }

    ChangeName= () =>{
        this.setState({
            name: 'smith'
        })
    }

    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            <button onClick={this.ChangeName}>Change</button>
            </>
        )
    }
}

export default StateExample;