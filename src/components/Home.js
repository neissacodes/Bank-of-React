import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

import AccountBalance from './AccountBalance';
import Login from './Login'

/*
  This component is the Home page of the bank. It displays the bank's logo and  gives acces to the user profile when you log in.
*/

class Home extends Component {
  render() {
    return (
      <div className ="home-header">
        <img src ="https://th.bing.com/th/id/OIP.y85AtMpGzVVfTmjc63ciAQHaD3?w=300&h=156&c=7&o=5&dpr=1.25&pid=1.7" alt="bank"/>
        <h1> Bank of React </h1>

        <Link to="/logIn">
          <button type = "submit"> Login </button>
        </Link>
      </div>

      );
    }
  }

export default Home;
