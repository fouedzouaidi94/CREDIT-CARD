import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./Card.css";

class Card extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: ""
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focus={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form className="cardInputs">
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="expiry"
            placeholder="expiration date"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        </form>
      </div>
    );
  }
}
export default Card;
