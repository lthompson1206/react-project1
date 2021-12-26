import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
return (
<Card className='expenses'>
<ExpenseItem 
      title={props.items[0].title} 
      amount={props.items[0].amount}
      date={props.items[0].date}
      ></ExpenseItem>
       <ExpenseItem 
      title={props.items[1].title} 
      amount={props.items[1].amount}
      date={props.items[1].date}
      ></ExpenseItem>
       <ExpenseItem 
      title={props.items[2].title} 
      amount={props.items[2].amount}
      date={props.items[2].date}
      ></ExpenseItem>
       <ExpenseItem 
      title={props.items[3].title} 
      amount={props.items[3].amount}
      date={props.items[3].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={props.items[4].title} 
      amount={props.items[4].amount}
      date={props.items[4].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={props.items[5].title} 
      amount={props.items[5].amount}
      date={props.items[5].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={props.items[6].title} 
      amount={props.items[6].amount}
      date={props.items[6].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={props.items[7].title} 
      amount={props.items[7].amount}
      date={props.items[7].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={props.items[8].title} 
      amount={props.items[8].amount}
      date={props.items[8].date}
      ></ExpenseItem>
       <ExpenseItem 
      title={props.items[9].title} 
      amount={props.items[9].amount}
      date={props.items[9].date}
      ></ExpenseItem>
</Card>
);
}
export default Expenses;

//you should always have a div in your return