import React from "react";
import "./ExpensesFilter.css";

const ExpenseFilter = ({ selectedYear, handleYearChange }) => {
  const handlechange = (e) => {
    handleYearChange(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={selectedYear} onChange={handlechange}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
