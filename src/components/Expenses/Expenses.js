import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
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
<ExpensesList items={filteredExpenses} />

</Card>
</div>
);
}
export default Expenses;

//you should always have a div in your return