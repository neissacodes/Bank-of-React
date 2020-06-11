import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import axios from 'axios';


import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Login from './components/Login'
import Debit from './components/DebitComponent/debit'
import Credit from './components/CreditComponent/credit'

/*
  This component will manage all the routings between the pages
*/


class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'neissa_do',
        memberSince: '02/23/98',
      },
      debitData: [],
      totalDebit: -1,
      creditData: [],
      totalCredit: -1
    }
  }

  componentDidMount()
  {
    this.fetchDebitData();
    this.fetchCreditData();
  }

  fetchDebitData()
  {
    const debitUrl = "https://moj-api.herokuapp.com/debits";

    axios.get(debitUrl)
    .then((response) => {
      let data = response.data;

      this.setState({
        debitData: data,
      });

      let totalDebit = 0;

      for(let object of data) {
        totalDebit +=object.amount;
      }

      this.setState({
        totalDebit,
      });
    })//Handle Errors
     .catch((error) => {
      console.log(error);
    });
  }

  fetchCreditData()
  {
    const creditUrl = "https://moj-api.herokuapp.com/credits";

    axios.get(creditUrl)
        .then((response) => {
          let data = response.data;

          this.setState({
            creditData: data,
          });

          let totalCredit = 0;

          for(let object of data) {
            totalCredit +=object.amount;
          }

          this.setState({
            totalCredit,
          });
       })//Handle Errors
      .catch((error) =>{
      console.log(error);
    });
  }

  //Update state when credit changes to be continued
  compononentDidUpdate(prevProps, prevState){
    if(prevState.creditData !== this.state.creditData){
      let totalCredit = 0;
      for(let object of this.state.creditData){
        totalCredit += object.amount;
      }
      totalCredit = totalCredit.toFixed(2);

      this.setState({
        totalCredit,
      });
    }
    //Update state when debit changes
    if(prevState.debitData !== this.state.debitData){
      let totalDebit = 0;
      for(let object of this.state.debitData){
        totalDebit += object.amount;
      }
      totalDebit = totalDebit.toFixed(2);

      this.setState({
        totalDebit,
      });
    }
  }


  mockLogin = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
        />
      );
    const LogInComponent = () => (<Login user={this.state.currentUser} mockLogin={this.mockLogin} {...this.props}/>);
    const CreditComponent = () => (
      <Credit
          data={this.state.creditData}
          accountBalance={ this.state.totalCredit - this.state.totalDebit }
          //creditHandle = {this.addCredit}
      />
    );

    const DebitComponent = () => (
      <Debit
          data={this.state.debitData}
          accountBalance={ this.state.totalCredit - this.state.totalDebit }
          //debitHandle = {this.addDebitHandler}
      />
    );

    return (
        <Router>
          <div className="App">
            <header className="class-header">
              <Switch>
                <Route exact path="/" render= {HomeComponent}/>
                <Route exact path="/userProfile" render={UserProfileComponent} />
                <Route exact path="/logIn" render={LogInComponent} />
                <Route exact path="/Credit" render={CreditComponent} />
                <Route exact path="/Debit" render={DebitComponent} />
                </Switch>
              </header>
            </div>
        </Router>
    );
  }
}

export default App;
