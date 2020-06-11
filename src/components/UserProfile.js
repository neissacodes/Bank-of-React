import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

/*
  This component shows the user that just logged in with an estimate how long they have been our customer
  It gives the user the option to view its credit, debit or to the home page
*/
class UserProfile extends Component {
  render() {
    return (
      <div className="page-header">
          <h1> User Profile </h1>

          <div type = "userprofile"> Username: {this.props.userName}</div>
          <div type = "userprofile"> Member Since: {this.props.memberSince}</div>
          <legend> Options </legend>
          <Link to="/"><button type="submit"> Home </button></Link>
          <Link to="/Debit"><button type="submit"> Debit </button></Link>
          <Link to="/Credit"><button type="submit"> Credit </button></Link>
      </div>
    );
  }
}

export default UserProfile;
