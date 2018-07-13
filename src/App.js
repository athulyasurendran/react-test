import React, { Component } from 'react';
import { Link, Route,Switch } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Header from './pages/Header';
import Footer from './pages/Footer';

class App extends Component {
  render() {
    
    return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Switch>
    );
  }
}


/*Home component */
const Home = (props) => (
  <div>
    <Header/>
    <Login/>
    <Footer/>
  </div>
)
export default App;
    