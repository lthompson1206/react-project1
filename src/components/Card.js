import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className;
    //its Composition https://reactjs.org/docs/composition-vs-inheritance.html

    return <div className={classes}>{props.children}</div>
}
export default Card;