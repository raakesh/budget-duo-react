import React from "react";
import Expense from "./Expense";

const ExpenseList = props => (
  <>
    <h3 className="mb-4 font-normal text-white text-2xl">Monthly expenses</h3>
    <div id="expenses-wrapper">
      <div className="flex items-center -mx-1 mb-2">
        <div className="label flex-1 px-1" id="expense_description">
          Description
        </div>
        {props.split === "adhoc" && (
          <div className="label flex-none w-1/4 px-1" id="expense_payer">
            Payer
          </div>
        )}
        <div
          className="label flex-none w-2/5 lg:w-1/3 px-1 text-right mr-6"
          id="expense_cost"
        >
          Cost
        </div>
      </div>
      {props.expenses.map((item, index) => (
        <Expense
          key={index}
          index={index}
          item={item}
          updateExpense={props.updateExpense}
          removeExpense={props.removeExpense}
          addExpense={props.addExpense}
          incomes={props.incomes}
          split={props.split}
        />
      ))}
    </div>
    <button
      className="text-teal py-2 px-4 border-2 rounded flex items-center my-4 hover:border-teal-light hover:text-teal-light font-bold"
      onClick={() => props.addExpense()}
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
  </>
);

export default ExpenseList;
