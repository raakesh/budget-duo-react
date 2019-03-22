import React, { Component } from "react";
import sample from "../sample";
import Header from "./Header";
import Footer from "./Footer";
import IncomeList from "./IncomeList";
import ExpenseList from "./ExpenseList";
import Split from "./Split";
import Chart from "./Chart";
import TotalList from "./TotalList";
import base from "../base";

class App extends Component {
  state = {
    incomes: [],
    expenses: [],
    split: "income"
  };

  componentDidMount() {
    this.loadSampleData();

    this.refOne = base.syncState(`incomes`, {
      context: this,
      state: "incomes",
      asArray: true
    });
    this.refOne = base.syncState(`expenses`, {
      context: this,
      state: "expenses",
      asArray: true
    });
    this.refOne = base.syncState(`split`, {
      context: this,
      state: "split"
    });
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

  removeExpense = index => {
    this.setState(state => {
      const expenses = state.expenses.filter(
        (item, expense) => index !== expense
      );

      return {
        expenses
      };
    });
  };

  addExpense = expense => {
    this.setState(state => {
      const expenses = state.expenses.concat({
        item: "",
        cost: "0.00",
        payer: "You"
      });

      return {
        expenses
      };
    });
  };

  updateSplit = value => {
    this.setState({ split: value });
  };

  render() {
    return (
      <div className="flex flex-col min-h-screen bg-gradient bg-fixed bg-no-repeat font-sans font-normal leading-normal text-grey">
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
              <IncomeList
                incomes={this.state.incomes}
                updateIncome={this.updateIncome}
              />
              <ExpenseList
                expenses={this.state.expenses}
                updateExpense={this.updateExpense}
                removeExpense={this.removeExpense}
                addExpense={this.addExpense}
                incomes={this.state.incomes}
                split={this.state.split}
              />
            </div>
            <div className="w-full lg:w-1/2 px-8 mb-6 lg:mb-0">
              <div className="bg-white rounded-lg shadow p-4 lg:p-8 mb-8">
                <h2 className="mb-4 font-normal">Divide our expenses</h2>
                <div className="flex mb-8 -mx-2">
                  <div className="w-2/3 px-2">
                    <Split
                      value={this.state.split}
                      updateSplit={this.updateSplit}
                    />
                  </div>
                  <div className="w-1/3 px-2">
                    <Chart
                      incomes={this.state.incomes}
                      expenses={this.state.expenses}
                      split={this.state.split}
                    />
                  </div>
                </div>
                <TotalList
                  incomes={this.state.incomes}
                  expenses={this.state.expenses}
                  split={this.state.split}
                />
              </div>
              <div className="text-white">
                <h3 className="my-2">What now?</h3>
                <p className="mb-2">
                  Talk with your partner about which expense method works for
                  you. Once you've chosen a method, consider creating a shared
                  checking account, depositing contributions from each paycheck,
                  and paying bills using your new account for a worry-free,
                  streamlined financial solution.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
