import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AccountBalance from '../AccountBalance';
import DebitCard from './debitCard';

class Debit extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      debit : {
        id: "",
        description: "",
        amount: "",
        date: "",
      },
    };
      this.handleChange = this.handleChange.bind(this);
  }


    handleChange = (e) => {
      const debitUpdate = {...this.state.debit};
      const input = e.target.name;
      const valueOfInput = e.target.value

      debitUpdate[input] = valueOfInput;
      if(input === "amount"){
        debitUpdate.amount = Number(valueOfInput);
      }
      this.setState({ debit: debitUpdate });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      console.log("Add button clicked");
      this.props.getDebit(this.state.debit);
    };

  render() {
    return (
      <div>
        <h1> Debits </h1>
        <fieldset>
            <legend> Options </legend>

            <Link to="/userProfile"> <button type="button"> My Profile </button> </Link>
            <Link to="Credit"> <button type="button"> My Credits </button> </Link>
            <Link to="/"> <button type="button"> Logout </button> </Link>
          </fieldset>


            <AccountBalance accountBalance={this.props.accountBalance} />


          <fieldset>
            <legend> Add new Debit </legend>
            <form
            onSubmit={ this.handleSubmit }
            >
              <label htmlFor="description"> Description: </label>
              <input type="text" name="description" placeholder="Name of item" value={this.state.debit.description}
              onChange={ this.handleChange }
              required />

              <label htmlFor="amout"> Amount: </label>
              <input type="number" name="amount" placeholder="0.00" value={this.state.debit.amount}
              onChange={ this.handleChange }
              required />
              <button type="submit"> Submit </button>
            </form>
          </fieldset>

          <section className="debit-grid">
              { this.debitGenerator(this.props.data) }
          </section>
      </div>

    );
}

debitGenerator(data)
{
  let cards = [];

  data.forEach((element, index) =>
  {
    const description = element.description;
    const amount = element.amount;
    const id = element.id;
    const date = element.date;

    cards.push(<DebitCard
      key={index.toString()}
      description={description}
      amount= {amount}
      id={id}
      date={date}
    />);
  })

  return cards;
  }

}

export default Debit;
