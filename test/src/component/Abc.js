import React, { Component } from 'react'

 class Abc extends Component {

    constructor(){
        super();

        this.state={
            username:'',
            email:'',
            password:'',
            errors:{},
            submitted: false
        };
    }

    submit=(event) => {

        event.preventDefault();
      
    let errors={};

    if(this.state.username === ''){

      errors.userNameError = "username should not be empty";
    }

    if(this.state.email === ''){
      errors.emailError = 'email should not be empty';
    }

    if(this.state.password.length < 8){
      errors.passwordError= 'password should contain atleast 8 characters';
    }

    this.setState({errors})
    if(Object.keys(errors).length===0){

      this.setState({submitted: true})

    }
    }


      
    render() {
      return (
        

<form onSubmit={this.submit}  className='container my-5 border border-secondary p-4 rounded shadow-lg'> 

<div className="mb-3">
    <label className='username'>User Name</label>
    <input type="text" className="form-control" id="username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />

    {this.state.errors.userNameError && <span className='text-danger fs-6'>{this.state.errors.userNameError}</span>}
  </div>


  <div className="mb-3">
    <label className="email" > Email address</label>
    <input type="email" className="form-control"  id="email"  value={this.state.email} onChange={(e) => this.setState({ email: e.target.value})} />

    {this.state.errors.emailError && <span className='text-danger fs-6'>{this.state.errors.emailError}</span>}

  </div>


  <div className="mb-3">
    <label className="password" >Password</label>
    <input type="password"  className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value})}/>

    {this.state.errors.passwordError && <span className='text-danger fs-6'>{this.state.errors.passwordError}</span>}

  </div>

 
  <div> 
  <button type="submit" className="btn btn-primary">Submit</button>
  {this.state.submitted && <div className='text-success py-2'>Form Submitted Successfully</div>}

  </div>

</form>

    )
  }
}
export default Abc;
