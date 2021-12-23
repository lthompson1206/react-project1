import './ExpenseItem.css';

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.toLocaleString('en-US', {year: '2-digit'});
    const day = props.date.getFullYear();
    // added javascript up here lines 4-6 to output in lines 13-15
   

    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
                </div>
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        </div>
        
    );
}

export default ExpenseItem;