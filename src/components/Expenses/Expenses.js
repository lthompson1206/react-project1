import React, { useState } from 'react';
import ExpenseItem from './ExpensesItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
      const [filteredYear, setFilteredYear] = useState('2022');
      const filterChangeHandler = selectedYear => {
            console.log('Expenses.js');
            setFilteredYear(selectedYear);
      };

      const filteredExpenses = props.items.filter(expense => {
            return expense.date.getFullYear().toString() === filteredYear; 
      });
      
return (
      <div>
<Card className='expenses'>
<ExpensesFilter 
selected={filteredYear} 
onChangeFilter={filterChangeHandler} 
/>
{filteredExpenses.map((expense) => (
<ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}
      />
      // attributes control features in expenseFilter as well
      ))}

</Card>
</div>
);
}
export default Expenses;

//you should always have a div in your return