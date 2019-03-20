export const calcTotalIncome = incomes => {
  return incomes.reduce((prev, current) => {
    return prev + +current.amount;
  }, 0);
};

export const calcTotalExpenses = expenses => {
  return expenses.reduce((prev, current) => {
    return prev + +current.cost;
  }, 0);
};

export const calcIndividualExpenses = (expenses, name) => {
  return expenses
    .filter(expense => expense.payer === name)
    .reduce((prev, current) => {
      return prev + +current.cost;
    }, 0);
};

export const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});
