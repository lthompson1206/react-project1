import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className;
    //its Composition https://reactjs.org/docs/composition-vs-inheritance.html the combinations of multiple components

    return <div className={classes}>{props.children}</div>
    //{props.children} = lines 8-13 in ExpenseItem.js
    //commonly used for modals and alerts
}
export default Card;