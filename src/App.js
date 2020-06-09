import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Login from './components/Login'

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 25000.00,
      currentUser: {
        userName: 'neissa_do',
        memberSince: '02/23/98',
      }
    }
  }

  mockLogin = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
    <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
);
    const LogInComponent = () => (<Login user={this.state.currentUser} mockLogin={this.mockLogin} {...this.props}/>);

    return (
        <Router>
          <Switch>
            <Route exact path="/" render= {HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent} />
            <Route exact path="/logIn" render={LogInComponent} />
          </Switch>
        </Router>
    );
  }
}

export default App;
