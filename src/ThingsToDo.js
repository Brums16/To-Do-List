import './App.css';
import { useState } from 'react';

function ThingsToDo(props) {

    const [completedItems, setCompletedItems] = useState([])
    
    

    const theToDoList = () => {
        const handleCheckBoxChange = (item) => {
            if (completedItems.includes(item)) {
                setCompletedItems(completedItems.filter((completedItem) => completedItem !== item))
            } else {
                setCompletedItems([...completedItems, item])
            }
        }
        return(
                props.toDoArray.map((item) => (
                <div className="toDoListItem-container">
                    <div className="toDoListItem">
                        <input type="checkbox" id="checkbox" checked={completedItems.includes(item)} onClick={() => handleCheckBoxChange(item)}/>
                         {item}
                         </div>
                         </div>))    
            )        
    }

    const clearCompletedItems = () => {
        const newToDoArray = props.toDoArray.filter((item) => !completedItems.includes(item))
        props.setToDoArray(newToDoArray);
        setCompletedItems([])
    }
   

    return (
        <div>
        <div>
        {props.toDoArray.length > 0 ? <ul>{theToDoList()}</ul> : <p className="nothing">Nothing to do</p>}
        </div>
        {props.toDoArray.length > 0 ? <button type="submit" onClick= {clearCompletedItems} className="clear-completed-button">Clear completed</button> : <p></p>}
        </div>
    )
}







export default ThingsToDo;