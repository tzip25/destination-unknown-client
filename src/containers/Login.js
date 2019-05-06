import React from "react";

class Login extends React.Component {

  state = {
    login: 
      {
        loginUsername: '',
        loginPassword: ''
      },
    signup: 
      {
      signupName: '',
      signupUsername: '',
      signupPassword: '',
      signupConfirmPassword: ''
      }
  }

  handleLoginChange = (e) => {
    this.setState({
      login: {
        ...this.state.login, 
        [e.target.name]: e.target.value
      }
    })
  }

  handleSignupChange = (e) => {
    this.setState({
      signup: {
        ...this.state.signup, 
        [e.target.name]: e.target.value
      }
    })
  }

  createUser = (e) => {
    e.preventDefault()
    console.log("hi")
    if (this.state.signupPassword === this.state.signupConfirmPassword) {
      fetch(`http://localhost:3000/signup`, {
        method: 'POST',
        body: JSON.stringify(this.state.signup),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then((response) => {
        // console.log(response)
        if (response.errors){
          alert(response.errors)
        } else {
          this.props.setCurrentUser(response)
        }
      })
    } else {
      alert("passwords don't match")
    } 
  }

  login = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      body: JSON.stringify(this.state.login),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((response) => {
      console.log(response)
      if (response.errors){
        alert(response.errors)
      } else {
        this.props.setCurrentUser(response)
      }
    })
  }

  render(){
    // console.log(this.state.signup)
    return(
      <div>
        <form onSubmit={this.login}>
          <label>Username</label>
          <input name="loginUsername" onChange={this.handleLoginChange} placeholder="username"/>
          <label>Password</label>
          <input type="password" name="loginPassword" onChange={this.handleLoginChange} placeholder="password"/>
          <button>Login</button>
        </form>
        <form onSubmit={this.createUser}>
          <label>Name</label>
          <input name="signupName" onChange={this.handleSignupChange} placeholder="name"/>
          <label>Username</label>
          <input  name="signupUsername" onChange={this.handleSignupChange} placeholder="username"/>
          <label>Password</label>
          <input type="password" name="signupPassword" onChange={this.handleSignupChange} placeholder="password"/>
          <label>Confirm Password</label>
          <input type="password" name="signupConfirmPassword" onChange={this.handleSignupChange} placeholder="password confirm"/>
          <button>Create User</button>
        </form>
      </div>
    )
  }
}

export default Login
