import React from "react";
import styles from "./ExpenseForm.module.css";

export default class ExpenseForm extends React.Component {
  // Create state or ref for the inputs here
  constructor() {
    super();
    this.state = {
      text: "Sample Text",
      amount: 200,
    }
  }

  render() {
    return (
      <form className={styles.form} onSubmit={() => {}}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          required
          value={this.state.text}
        />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense,positive-income)</div>
        </div>
        <input
          className={styles.input}
          id="expenseAmount"
          type="number"
          placeholder="Enter amount..."
          required
          value={this.state.amount}
        />
        <button className={styles.submitBtn}>Add Transaction</button>
      </form>
    );
  }
}
