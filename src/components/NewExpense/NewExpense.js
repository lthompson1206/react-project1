import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
}

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        {/* props to show what data has been entered in this child component and sent up to parent componen
        called saveExpenseDataHandlert*/}
    </div>
};

export default NewExpense;