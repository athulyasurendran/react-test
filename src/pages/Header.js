import React, { Component } from "react";
import { Button, FormGroup, ControlLabel, FormControl, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import axios from 'axios';
import Dashboard from './Dashboard';
import { NavLink } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  componentWillMount(){
      
  }

  render() {
    
    return (
      <section id="header">
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                      Logo
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse className="text-center">
                    <NavDropdown eventKey={2} title={
                            <span>Ben cline</span>
                        } id="basic-nav-dropdown-right">
                        <MenuItem eventKey={2.3}>Logout</MenuItem>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar></section>
    );
  }
}