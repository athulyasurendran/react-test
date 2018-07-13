import React, { Component } from "react";
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import axios from 'axios';
import Dashboard from './Dashboard';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      toDashboard: false,
    };
  }
  componentWillMount(){
      
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      toDashboard: true
    });
    let formData = this.state;
    const API = 'http://demo1206178.mockable.io/login';
    axios.post(API, formData)
        .then(function (response) {
            if( formData.username == response.data.username && formData.password == response.data.password){
              
            }else{
                alert("error")
            }
        })
        .catch(function (error) {
            console.log(error);
    });
   
  }

  render() {
    
    if (this.state.toDashboard === true) {
      return <Dashboard/>
    }

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}