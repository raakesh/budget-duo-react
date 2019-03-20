import React from "react";
import Income from "./Income";

const IncomeList = props => (
  <>
    <h3 className="mb-6 mt-8 font-normal text-white text-2xl">Annual income</h3>
    <ul className="list-reset" id="incomes">
      {props.incomes.map((item, index) => (
        <Income
          key={index}
          index={index}
          item={item}
          updateIncome={props.updateIncome}
        />
      ))}
    </ul>
  </>
);

export default IncomeList;
