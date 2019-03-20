import React, { Component } from "react";
import CurrencyInput from "react-currency-input";

class Income extends Component {
  handleChange = event => {
    const updatedIncome = {
      ...this.props.item,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateIncome(this.props.index, updatedIncome);
  };

  handleCurrencyChange = (event, maskedvalue, floatvalue) => {
    const updatedIncome = {
      ...this.props.item,
      amount: floatvalue
    };
    this.props.updateIncome(this.props.index, updatedIncome);
  };

  render() {
    const { name, amount } = this.props.item;

    return (
      <div className="mb-8">
        <div className="flex items-center -mx-1">
          <div
            className="flex-1 px-1 uppercase text-white"
            id={`name_label_${this.props.index}`}
          >
            {name}
          </div>
          <div className="flex-none px-1 mb-1 w-2/5 lg:w-1/3 mr-6 flex justify-end">
            <span
              className="cursor-pointer hint--top hint--medium hint--rounded"
              aria-label="The sum of wages and salaries before any taxes or deductions."
            >
              <span
                id={`amount_label_${this.props.index}`}
                className="label border-b border-dotted no-underline leading-none text-right block"
              >
                Total income
              </span>
            </span>
          </div>
        </div>
        <div className="flex items-center -mx-1">
          <div className="flex-1 px-1" aria-hidden="true">
            <input
              type="range"
              name="amount"
              value={amount}
              min="0.00"
              max="250000.00"
              step="500.00"
              className="input-range text-white w-full"
              onChange={this.handleChange}
            />
          </div>
          <div className="flex-none items-center w-2/5 lg:w-1/3 mr-6 px-1 flex items-center">
            <div className="bg-grey-light p-3 rounded-tl rounded-bl shadow leading-tight">
              $
            </div>
            <CurrencyInput
              className="input flex-1 rounded-l-none rounded-r leading-tight text-right"
              type="tel"
              name="amount"
              value={amount}
              data-type="currency"
              maxLength="20"
              aria-labelledby={`amount_label_${this.props.index} name_label_${
                this.props.index
              }`}
              onChangeEvent={this.handleCurrencyChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Income;
