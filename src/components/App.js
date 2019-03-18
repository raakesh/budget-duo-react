import React, { Component } from "react";
import sample from "../sample";
import Header from "./Header";
import Footer from "./Footer";
import Income from "./Income";
import Expense from "./Expense";

class App extends Component {
  state = {
    incomes: [],
    expenses: []
  };

  componentDidMount() {
    this.loadSampleData();
  }

  loadSampleData = () => {
    this.setState({ ...sample });
  };

  updateIncome = (key, updatedIncome) => {
    this.setState(state => {
      const incomes = state.incomes.map((item, income) => {
        return income === key ? updatedIncome : item;
      });

      return {
        incomes
      };
    });
  };

  updateExpense = (key, updatedExpense) => {
    this.setState(state => {
      const expenses = state.expenses.map((item, expense) => {
        return expense === key ? updatedExpense : item;
      });

      return {
        expenses
      };
    });
  };

  removeExpense = i => {
    console.log("remove", i);
    this.setState(state => {
      const expenses = state.expenses.filter((item, expense) => i !== expense);

      return {
        expenses
      };
    });
  };

  addExpense = expense => {
    this.setState(state => {
      const expenses = state.expenses.concat({ item: "", cost: 0 });

      return {
        expenses
      };
    });
  };

  render() {
    return (
      <div className="bg-gradient bg-fixed bg-no-repeat font-sans font-normal leading-normal text-grey h-full">
        <div className="page" id="main">
          <div className="flex flex-col h-full">
            <Header />
            <main className="container mx-auto p-4 lg:p-8 overflow-hidden flex-grow flex-no-shrink flex-auto">
              <div className="flex flex-wrap -mx-8">
                <div className="w-full lg:w-1/2 px-8 mb-8 lg:mb-0">
                  <div className="text-white mt-8">
                    <h2 className="text-3xl">What's your share?</h2>
                    <p className="text-xl font-light mr-6">
                      Calculate how much you and your partner should contribute
                      towards shared expenses.
                    </p>
                  </div>
                  <h3 className="mb-6 mt-8 font-normal text-white text-2xl">
                    Annual income
                  </h3>
                  <div id="incomes">
                    {this.state.incomes.map((item, index) => (
                      <Income
                        key={index}
                        index={index}
                        item={item}
                        updateIncome={this.updateIncome}
                      />
                    ))}
                  </div>
                  <h3 className="mb-4 font-normal text-white text-2xl">
                    Monthly expenses
                  </h3>
                  <div id="expenses-wrapper">
                    <div className="flex items-center -mx-1 mb-2">
                      <div
                        className="label flex-1 px-1"
                        id="expense_description"
                      >
                        Description
                      </div>
                      <div
                        className="split-adhoc-label label flex-none w-1/4 px-1"
                        id="expense_payer"
                      >
                        Payer
                      </div>
                      <div
                        className="label flex-none w-2/5 lg:w-1/3 px-1 text-right mr-6"
                        id="expense_cost"
                      >
                        Cost
                      </div>
                    </div>
                    <div id="expenses">
                      {this.state.expenses.map((item, index) => (
                        <Expense
                          key={index}
                          index={index}
                          item={item}
                          updateExpense={this.updateExpense}
                          removeExpense={this.removeExpense}
                          addExpense={this.addExpense}
                        />
                      ))}
                    </div>
                  </div>
                  <button
                    className="add text-teal py-2 px-4 border-2 rounded flex items-center my-4 hover:border-teal-light hover:text-teal-light font-bold"
                    onClick={() => this.addExpense()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal mr-1 icon"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Add expense
                  </button>
                </div>
                <div className="w-full lg:w-1/2 px-8 mb-6 lg:mb-0">
                  <div className="bg-white rounded-lg shadow p-4 lg:p-8 mb-8">
                    <h2 className="mb-4 font-normal">Divide our expenses</h2>
                    <div className="flex mb-8 -mx-2">
                      <div className="w-2/3 px-2">
                        <ul id="split" className="list-reset">
                          <li className="block mb-3 flex">
                            <input
                              type="radio"
                              name="split"
                              value="income"
                              className="radio mr-2 flex-none"
                              id="split-income"
                            />
                            <label
                              htmlFor="split-income"
                              className="cursor-pointer"
                            >
                              <span className="font-bold">Based on income</span>
                              <p className="text-sm">
                                The amount you and your partner owe for shared
                                expenses is proportional to the total income you
                                each contribute to your shared household.
                              </p>
                            </label>
                          </li>
                          <li className="block mb-3 flex">
                            <input
                              type="radio"
                              name="split"
                              value="half"
                              className="radio mr-2 flex-none"
                              id="split-half"
                            />
                            <label
                              htmlFor="split-half"
                              className="cursor-pointer"
                            >
                              <span className="font-bold">50/50 split</span>
                              <p className="text-sm">
                                Your shared expenses are split in half for you
                                and your partner.{" "}
                                <span className="italic">
                                  When using this method, your income is
                                  irrelevant.
                                </span>
                              </p>
                            </label>
                          </li>
                          <li className="block flex">
                            <input
                              type="radio"
                              name="split"
                              value="adhoc"
                              className="radio mr-2 flex-none"
                              id="split-adhoc"
                            />
                            <label
                              htmlFor="split-adhoc"
                              className="cursor-pointer"
                            >
                              <span className="font-bold">Grab bag method</span>
                              <p className="text-sm">
                                Designate who will be responsible for each bill
                                using the dropdown menu next to each expense.{" "}
                                <span className="italic">
                                  When using this method, your income is
                                  irrelevant.
                                </span>
                              </p>
                            </label>
                          </li>
                        </ul>
                      </div>
                      <div className="w-1/3 px-2">
                        <canvas id="chart" width="100%" height="100%" />
                      </div>
                    </div>
                    <h3 className="mb-4 font-normal">
                      Great! Here's your expense breakdown:
                    </h3>
                    <div className="border-b">
                      <div className="row justify-end pt-0 pb-2">
                        <div className="col flex-1">
                          <span className="label">Individual</span>
                        </div>
                        <div className="col w-1/5 text-right">
                          <span className="label">% of total</span>
                        </div>
                        <div className="col w-1/2 text-right">
                          <span className="label mr-6">Amount due</span>
                        </div>
                      </div>
                    </div>
                    <div id="rows" />
                    <button
                      className="row flex-wrap no-underline text-grey border-b-0 pb-2 lg:pb-0 expanded"
                      id="row-total"
                    >
                      <div className="col flex-1 font-bold">Total:</div>
                      <div className="col w-1/5 text-right font-bold">100%</div>
                      <div className="col w-1/2 flex items-center justify-end text-right">
                        <div className="truncate">
                          <span className="report-total font-bold" />
                          /mo
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="open ml-2 text-teal icon"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="close ml-2 text-teal stroke-current h-4 w-4 pointer-events-none"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                      <ul className="details col list-reset mt-2 mr-6 w-full text-right text-sm">
                        <li className="py-1">
                          <span className="report-total-biweekly" /> / bi-weekly
                        </li>
                        <li className="py-1">
                          <span className="report-total-bimonthly" /> /
                          bi-monthly
                        </li>
                        <li className="py-1">
                          <span className="report-total-annually" /> / annually
                        </li>
                      </ul>
                    </button>
                  </div>
                  <div className="text-white">
                    <h3 className="my-2">What now?</h3>
                    <p className="mb-2">
                      Talk with your partner about which expense method works
                      for you. Once you've chosen a method, consider creating a
                      shared checking account, depositing contributions from
                      each paycheck, and paying bills using your new account for
                      a worry-free, streamlined financial solution.
                    </p>
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
