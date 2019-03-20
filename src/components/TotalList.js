import React from "react";
import {
  calcTotalIncome,
  calcTotalExpenses,
  calcIndividualExpenses
} from "../helpers";
import Total from "./Total";

const TotalList = props => {
  const totalIncome = calcTotalIncome(props.incomes);
  const totalExpenses = calcTotalExpenses(props.expenses);
  const totalIndividualExpenses = name => {
    return calcIndividualExpenses(props.expenses, name);
  };
  const colors = ["#2ad9c2", "#00a1a7"];

  return (
    <>
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
      <div id="rows">
        {props.incomes.map((item, index) => (
          <Total
            color={colors[index]}
            item={item}
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            totalIndividualExpenses={totalIndividualExpenses(item.name)}
            split={props.split}
            key={index}
          />
        ))}
        <Total
          item={{ name: "Total", amount: totalIncome }}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          show
        />
      </div>
    </>
  );
};

export default TotalList;
