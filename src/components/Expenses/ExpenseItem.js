import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const clickHandler = () => {
console.log('Clicked!!!')
    };

    return (
        <Card className="expense-item">
           <ExpenseDate date={props.date} />
           {/* ExpenseDate comes from lines 9-11 from ExpenseDate.js (component A to compenent B via props)*/}
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        </Card>
        
    );
}

export default ExpenseItem;