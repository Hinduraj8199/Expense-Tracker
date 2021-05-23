import React from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = ({ expensesList }) => {
  // console.log(expensesList);
  const [filterdYear, setFilterYear] = React.useState("2020");

  const handleYearChange = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = expensesList.filter(
    (expense) => expense.date.getFullYear().toString() === filterdYear
  );
  return (
    <div>
      Expenses
      <Card>
        <ExpenseFilter
          selectedYear={filterdYear}
          handleYearChange={handleYearChange}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
