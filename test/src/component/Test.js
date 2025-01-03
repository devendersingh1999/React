import React, { Component } from 'react'

  class Test  extends Component {

    constructor(){
        super();

        this.state={
            username: '',
            email:'',
            password: "",
            errors : {}, //Stores form validation errors
            submitted: false, // Indicates whether the form was submitted successfully
        }
    }

    submit= (event) => {

        event.preventDefault();

    let err={}; // Validation errors object

        if(this.state.username === ''){
            
            err.userNameError ="User Name cannot be empty";
        }

        if(this.state.email === ''){

            err.emailError ="email cannot be empty";
        }

        if(this.state.password.length < 8){

            err.passwordError= "password must include 8 character";
        }

        this.setState({errors : err})
        if(Object.keys(err).length === 0){
            this.setState({submitted : true})
        }
       else {
        this.setState({ submitted: false }); // Unsuccessful submission
      }
    }
   

  render() {
    return (
      
        <form onSubmit={this.submit} className='container my-5 border border-secondary p-4 rounded shadow-lg'>

<div className="mb-3">
    <label className="username" >User Name</label>
    <input type="text" className="form-control" id="username" value={this.state.username} onChange={(e) => this.setState({username : e.target.value})}/>
    
    {this.state.errors.userNameError &&  <span className='text-danger fs-6'>{this.state.errors.userNameError}</span>}


  </div>

  <div className="mb-3">
    <label className="email" >Email address</label>
    <input type="email" className="form-control" id="email"  value={this.state.email} onChange={(e) => this.setState({email : e.target.value})}/>

    {this.state.errors.emailError &&  <span className='text-danger fs-6'>{this.state.errors.emailError}</span>}
  </div>


  <div className="mb-3">
    <label className="password" >  Password</label>
    <input type="password" className="form-control" id="password" value={this.state.password} onChange={(e) => this.setState({ password : e.target.value})}/>

    {this.state.errors.passwordError &&  <span className='text-danger fs-6'>{this.state.errors.passwordError}</span>}
  </div>
  
  <div>
  <button type="submit" className="btn btn-primary"> Submit </button>
  {this.state.submitted && <div className='text-success py-2'>Form Submitted Successfully</div>}
  </div>


</form>
   
    )
  }

  }
export default Test;