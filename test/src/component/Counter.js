import React from 'react'

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {count: 0};
    }

    componentDidMount() {
        console.log("Component Inserted into DOM");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Count updated");
    }

    componentWillUnmount() {
        console.log("Component removed from DOM");
    }

    increment = () => {
        this.setState({count: this.state.count+1})
    }

    decrement = () =>{
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={this.decrement}>-</button>
                <span className='p-2'>{this.state.count}</span>
                <button type="button" className="btn btn-primary" onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Counter;