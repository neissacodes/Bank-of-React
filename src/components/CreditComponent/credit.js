import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import AccountBalance from '../AccountBalance';
import CreditCard from './creditCard';

class Credit extends Component {
constructor(props)
  {
    super(props);
    this.state = {
      credit : {
        id: "",
        description: "",
        amount: "",
        date: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const creditUpdate = {...this.state.credit};
    const input = e.target.name;
    const valueOfInput = e.target.value

    creditUpdate[input] = valueOfInput;
    if(input === "amount"){
      creditUpdate.amount = Number(valueOfInput);
    }
    this.setState({ credit: creditUpdate });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Add button clicked");
    this.props.getCredit(this.state.credit);
  };


  render() {
    return (
      <div>
        <h1> Credits </h1>
        <fieldset>
            <legend> Options </legend>

            <Link to="/userProfile"> <button type="button"> My Profile </button> </Link>
            <Link to="Debit"> <button type="button"> My Debits </button> </Link>
            <Link to="/"> <button type="button"> Logout </button> </Link>
          </fieldset>


            <AccountBalance accountBalance={this.props.accountBalance} />


          <fieldset>
            <legend> Add new Credit </legend>
            <form
            onSubmit={this.handleSubmit}
            >
              <label htmlFor="description"> Description: </label>
              <input type="text" name="description" placeholder="Name of item" value={this.state.credit.description}
              onChange={this.handleChange}
              required />

              <label htmlFor="amout"> Amount: </label>
              <input type="number" name="amount" placeholder="0.00" value={this.state.credit.amount}
              onChange={this.handleChange}
              required />
              <button type="submit"> Submit </button>
            </form>
          </fieldset>

          <section className="debit-grid">
              {this.creditGenerator(this.props.data)}
          </section>
        </div>
        );
      }

      creditGenerator(data)
      {
        let cards = [];

        data.forEach((element, index) =>
        {
          const description = element.description;
          const amount = element.amount;
          const id = element.id;
          const date = element.date;

          cards.push(<CreditCard
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

export default Credit;
