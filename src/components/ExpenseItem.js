import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
   
   

    return (
        <div className="expense-item">
           <ExpenseDate date={props.date} />
           {/* ExpenseDate comes from lines 9-11 from ExpenseDate.js (component A to compenent B via props)*/}
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        </div>
        
    );
}

export default ExpenseItem;