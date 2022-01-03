import React from "react";
import ExpenseDate from "./ExpensesDate";
import Card from "../UI/Card";
import "./ExpensesItem.css";

const ExpenseItem = (props) => {
// this is a stateless component aka dumb component which is here to just output some data
  return (
    <li>
<Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* ExpenseDate comes from lines 9-11 from ExpenseDate.js (component A to compenent B via props)*/}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
     
    </Card>
    </li>
    
  );
}

export default ExpenseItem;
