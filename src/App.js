import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
{
id: 'e1',
title: 'Mortgage',
amount: 2100 ,
date:  new Date(2012, 11, 20, 3, 0, 0)
},
{
  id: 'e2',
  title: 'Car fuel',
  amount: 40,
  date: new Date(2012, 11, 20, 3, 0, 0)
},
{
  id: 'e3',
  title: 'food',
  amount: 50,
  date: new Date(2012, 11, 20, 3, 0, 0)
},
{
  id: 'e4',
  title: 'taxes',
  amount: 200,
  date:  new Date(2012, 11, 20, 3, 0, 0)
},
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      
      <ExpenseItem 
      title={expenses[0].title} 
      amount={expenses[0].amount}
      date={expenses[0].date}
      ></ExpenseItem>
       <ExpenseItem 
      title={expenses[1].title} 
      amount={expenses[1].amount}
      date={expenses[1].date}
      ></ExpenseItem>
       <ExpenseItem 
      title={expenses[2].title} 
      amount={expenses[2].amount}
      date={expenses[2].date}
      ></ExpenseItem>
       <ExpenseItem 
      title={expenses[3].title} 
      amount={expenses[3].amount}
      date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
