import React, { Component } from 'react';

class DebitCard  extends Component{

  render() {

    return (
      <section className="debit-card">
          <h2 className="debit-Description">{this.props.description}</h2>
          <ul className='debit-details'>
              <li> Amount: {this.props.amount.toLocaleString("en-US",{style: "currency", currency: "USD"})} </li>
              <li> Date: {this.props.date}</li>
          </ul>
      </section>
    );
  }
}

export default DebitCard;
