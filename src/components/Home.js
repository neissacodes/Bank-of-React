import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

import AccountBalance from './AccountBalance';
import Login from './Login'

class Home extends Component {
  render() {
    return (
      <div className ="bankImg">
        <img src ="https://th.bing.com/th/id/OIP.y05Xx4nx-P-xRdDJFxHhcwHaEL?w=240&h=160&c=7&o=5&dpr=1.25&pid=1.7" alt="bank"/>
        <h1> Bank of React </h1>
        <Link to="/userProfile"> User Profile </Link>
        <AccountBalance accountBalance={this.props.accountBalance}/>
        <Link to="/logIn"> Log In </Link>
      </div>

      );
    }
  }

export default Home;
