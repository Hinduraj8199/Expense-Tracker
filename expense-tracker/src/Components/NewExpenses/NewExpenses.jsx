import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpenses = ({ addExpense }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>ADD-EXPENSE</button>
      )}

      {isEditing && (
        <ExpenseForm
          addExpense={addExpense}
          stopEditing={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default NewExpenses;
