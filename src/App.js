import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const DUMMY_EXPENSES = [
  {
  id: 'e1',
  title: 'Mortgage (Affinity CU)',
  amount: 525 ,
  date:  new Date("2023-12-27")
  },
  {
    id: 'e2',
    title: 'Car fuel (Cap 1 CC)',
    amount: 40,
    date: new Date("2022-12-24")
  },
  {
    id: 'e3',
    title: 'Food (Cap 1 CC)',
    amount: 50,
    date: new Date("2022-12-24")
  },
  {
    id: 'e4',
    title: 'Taxes (Cap one 360)',
    amount: 125,
    date:  new Date("2023-12-24")
  },
  {
    id: 'e5',
    title: 'Life Insurance (Affinity CU)',
    amount: 10,
    date:  new Date("2023-12-24")
  },
  {
    id: 'e6',
    title: 'Stocks ETF (TD Ameritrade)',
    amount: 50,
    date:  new Date("2022-12-24")
  },
  {
    id: 'e7',
    title: 'Crypto Investments (Cap one 360)',
    amount: 50,
    date:  new Date("2023-12-24")
  },
  {
    id: 'e8',
    title: 'Book Club Purchase (Cap one 360)',
    amount: 25,
    date:  new Date("2023-12-24")
  },
  {
    id: 'e9',
    title: 'Phone Bill (Cap one 360)',
    amount: 22,
    date:  new Date("2023-12-24")
  },
  {
    id: 'e10',
    title: 'Twins Formula (Cap one 360)',
    amount: 40,
    date:  new Date("2023-12-24") 
  }
    ];
  
function App() {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense  => {
   setExpense((prevExpenses) => {
     return [expense, ...prevExpenses];
    //  added the new "expense" as a parameter, while updating "prevExpenses" as an array
   });
  }

  return (
    <div>
      {/* <h2>$1000 Budget</h2>
      <p>$535 Affinity CU</p>
      <p>$402 Capital One 360</p> */}
      {/* <p>**$550 Capital One CC</p> */}
      
    <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses items={expenses} />
      {/* these are the child components being utilized  */}
    </div>
  );
}

export default App;

// State was being passed from app as attributes to ExpenseItem (parent component) to ExpenseDate (child component) via props

