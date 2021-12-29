import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
{
id: 'e1',
title: 'Mortgage (Affinity CU)',
amount: 525 ,
date:  new Date("2021-12-27")
},
{
  id: 'e2',
  title: 'Car fuel (Cap 1 CC)',
  amount: 40,
  date: new Date("2021-12-24")
},
{
  id: 'e3',
  title: 'Food (Cap 1 CC)',
  amount: 50,
  date: new Date("2021-12-24")
},
{
  id: 'e4',
  title: 'Taxes (Cap one 360)',
  amount: 125,
  date:  new Date("2021-12-24")
},
{
  id: 'e5',
  title: 'Life Insurance (Affinity CU)',
  amount: 10,
  date:  new Date("2021-12-24")
},
{
  id: 'e6',
  title: 'Stocks ETF (TD Ameritrade)',
  amount: 50,
  date:  new Date("2021-12-24")
},
{
  id: 'e7',
  title: 'Crypto Investments (Cap one 360)',
  amount: 50,
  date:  new Date("2021-12-24")
},
{
  id: 'e8',
  title: 'Book Club Purchase (Cap one 360)',
  amount: 25,
  date:  new Date("2021-12-24")
},
{
  id: 'e9',
  title: 'Phone Bill (Cap one 360)',
  amount: 22,
  date:  new Date("2021-12-24")
},
{
  id: 'e10',
  title: 'Twins Formula (Cap one 360)',
  amount: 40,
  date:  new Date("2021-12-24") 
}
  ];

  const addExpenseHandler = expense  => {
    console.log('In app.js');
    console.log(expense);
  }

  return (
    <div>
      {/* <h2>$1000 Budget</h2>
      <p>$535 Affinity CU</p>
      <p>$402 Capital One 360</p> */}
      {/* <p>**$550 Capital One CC</p> */}
      
    <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses items={expenses} />
      
    </div>
  );
}

export default App;

// State was being passed from app as attributes to ExpenseItem (parent component) to ExpenseDate (child component) via props

