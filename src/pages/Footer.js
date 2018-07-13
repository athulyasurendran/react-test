import React, { Component } from "react";
import { Grid } from 'react-bootstrap';

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
      <footer className="footer">
                <Grid>
                    <p className="copyright pull-right">
                        &copy; {(new Date()).getFullYear()} <a href="#">Test demo</a>
                    </p>
                </Grid>
        </footer>
    );
  }
}