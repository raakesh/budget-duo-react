import React, { Component } from "react";
import CurrencyInput from "react-currency-input";

class Expense extends Component {
  handleChange = event => {
    const updatedItem = {
      ...this.props.item,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateExpense(this.props.index, updatedItem);
  };

  handleCurrencyChange = (event, maskedvalue, floatvalue) => {
    const updatedExpense = {
      ...this.props.item,
      cost: floatvalue
    };
    this.props.updateExpense(this.props.index, updatedExpense);
  };

  render() {
    const { item, cost, payer } = this.props.item;

    return (
      <div className="flex items-center -mx-1 mb-4">
        <div className="flex-1 px-1">
          <input
            className="input rounded"
            type="text"
            name="item"
            value={item}
            maxLength="100"
            aria-labelledby="expense_description"
            onChange={this.handleChange}
          />
        </div>
        {this.props.split === "adhoc" && (
          <div className="select relative flex-none w-1/4 px-1">
            <select
              className="input rounded pr-8"
              name="payer"
              value={payer}
              aria-labelledby="expense_payer"
              onChange={this.handleChange}
            >
              {this.props.incomes.map((income, index) => (
                <option key={index}>{income.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        )}
        <div className="flex-none items-center w-2/5 lg:w-1/3 px-1 flex">
          <div className="bg-grey-light p-3 rounded-tl rounded-bl shadow leading-tight">
            $
          </div>
          <CurrencyInput
            className="input flex-1 rounded-l-none rounded-r leading-tight text-right"
            name="cost"
            value={cost}
            aria-labelledby="expense_cost"
            onChangeEvent={this.handleCurrencyChange}
          />
        </div>
        <button
          className="flex-none px-1"
          title="Delete expense"
          onClick={() => this.props.removeExpense(this.props.index)}
        >
          <svg
            className="inline-block text-teal icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </button>
      </div>
    );
  }
}

export default Expense;
