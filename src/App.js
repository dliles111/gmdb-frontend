import React from 'react';
import {Component} from 'react'
import './App.css';
import './App.test.js'
import './components/Navbar.js'

class App extends Component {
  state = {
    navbar: [],
    loginNavBar: false,
  }

  // navBarLoginBtn = () => {
  //   // this.setState({loginNavBar: !this.state.loginNavBar})
  // }




render(){
  return (
    <div className="App">
      <h1 className='navBar'>GMBD  
        <button id='navBarLogin'>Login</button>  
        <button id='navBarHome'>Home</button>
          <input type="text" value="Search" name="navBarSearchTextBox"></input>
        <button id='navBarSearch'>Search</button>
      </h1>
      <h2 className="App-header">Login</h2>
      <div className='label'>
        <form id="registrationForm">
          <label for="Email">Email</label><input type="text" name="label_email"></input>
          <label for="Password">Password</label><input type="text" name="label_password"></input>
          <button id='login-btn'>Login</button>
        </form>
      </div>
    </div>
    );
    }
  }

  
export default App;
