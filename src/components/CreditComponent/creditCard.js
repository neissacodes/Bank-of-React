import React, { Component } from 'react';

class Creditcard extends Component{

  render(){

    return(
      <section className="credit-card">
          <h2 className="credit-Description">{this.props.description}</h2>
          <ul className='credit-details'>
              <li> Amount: {this.props.amount.toLocaleString("en-US",{style: "currency", currency: "USD"})} </li>
              <li> Date: {this.props.date}</li>
          </ul>
      </section>
    );
  }
}

export default Creditcard;
