import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  console.log(expenses, "expenseee...");

  // Create function to add an expense


  // Create function to delete an expense
  function deleteExpense(id) {
    console.log(id, "iddd");
    setExpenses(expenses.filter((expense, index) => index != id));
  }

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm expenses={expenses} setExpenses={setExpenses}/>
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        </div>
      </div>
    </>
  );
}

export default App;
