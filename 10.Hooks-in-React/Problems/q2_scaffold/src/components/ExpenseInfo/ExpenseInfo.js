import React, { useState, useEffect } from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {

  const {expenses} = props;

  // Add logic here to calculate the grand total, profit and expense amount here
  const [total, setTotal] = useState(0);
  const [profit, setProfit] = useState(0);
  const [loss, setLoss] = useState(0);
  
  useEffect(() => {
    let calculatedTotal = 0;
    let calculatedProfit = 0;
    let calculatedLoss = 0;

    expenses.forEach(element => {
      const amount = Number(element.amount);
      if (amount > 0) {
        calculatedProfit += amount;
      } else {
        calculatedLoss -= amount; // Subtracting since amount is negative
      }
      calculatedTotal += amount;
    });

    setProfit(calculatedProfit);
    setLoss(calculatedLoss);
    setTotal(calculatedTotal);
  }, [expenses]);
  
  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${total}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${profit}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${loss}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
