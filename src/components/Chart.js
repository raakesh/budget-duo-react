import React from "react";
import PieChart from "react-minimal-pie-chart";
import {
  calcTotalIncome,
  calcTotalExpenses,
  calcIndividualExpenses
} from "../helpers";

const Chart = props => {
  const totalIncome = calcTotalIncome(props.incomes);
  const totalExpenses = calcTotalExpenses(props.expenses);
  const totalIndividualExpenses = name => {
    return calcIndividualExpenses(props.expenses, name);
  };
  const colors = ["#2ad9c2", "#00a1a7"];

  return (
    <PieChart
      data={props.incomes.map((income, index) => {
        let percentage;
        switch (props.split) {
          case "half":
            percentage = 0.5;
            break;
          case "adhoc":
            percentage =
              totalIndividualExpenses(income.name) / totalExpenses || 0;
            break;
          default:
            percentage = income.amount / totalIncome;
        }

        return {
          title: income.name,
          value: percentage,
          color: colors[index]
        };
      })}
      lineWidth={45}
      paddingAngle={1}
      startAngle={-90}
    />
  );
};

export default Chart;
