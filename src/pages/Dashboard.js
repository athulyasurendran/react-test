import React, { Component } from "react";
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  componentWillMount(){
    const getAPI = 'http://demo1206178.mockable.io/get-user-details';
    axios.get(getAPI)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
            console.log(error);
    });

    const listAPI = 'http://demo1206178.mockable.io/list-users';
    var this_ = this;
    axios.get(listAPI)
        .then(function (response) {
          this_.userList = response.data.map((user) => {
            return (
              <tr key={user.id}><td>{user.firstname}</td><td>{user.lastname}</td><td>{user.dob}</td><td>{user.country}</td></tr>
            )
        });
        })
        .catch(function (error) {
          console.log(error);
      });
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Dashboard">
        <table>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th> 
            <th>DOB</th>
            <th>Country</th>
          </tr>
          {this.userList}
        </table>
      </div>
    );
  }
}