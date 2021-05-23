import React from "react";
import "./ExpenseForm.css";

const initState = {
  enteredTitle: "",
  enteredAmount: "",
  enteredDate: "",
};
const ExpenseForm = ({ addExpense, stopEditing }) => {
  const [expense, setExpense] = React.useState(initState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...expense, [name]: value };
    setExpense(updated);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const ExpenseItem = {
      title: expense.enteredTitle,
      amount: +expense.enteredAmount,
      date: new Date(expense.enteredDate),
      id: Math.random().toString(),
    };
    addExpense(ExpenseItem);
    setExpense(initState);
    stopEditing();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="enteredTitle"
            value={expense.enteredTitle}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="enteredAmount"
            min="0.01"
            step="0.01"
            value={expense.enteredAmount}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="enteredDate"
            min="2019-01-01"
            max="2022-12-31"
            value={expense.enteredDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={stopEditing}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
