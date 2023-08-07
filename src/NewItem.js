import './App.css';
import {useState} from 'react'


function NewItem(props) {

const [newThing, setNewThing] = useState("")

const addItem = (event) => {
    console.log(newThing)
    console.log(props.toDoArray)
    props.setToDoArray([...props.toDoArray, newThing])
    console.log(props.toDoArray)
    document.getElementById("new-item").value = "";
    document.getElementById("new-item").focus()

}

document.onkeydown = (event) => {
    if(event.key === "Enter") {
        addItem()

}
}





    return (
        <div className="new-item-div">

            <input type="text" id="new-item" onChange={e => setNewThing(e.target.value)} />
        <button type="submit" className="new-item-button" onClick={addItem}>Add item</button>

        
        </div>
    )
}







export default NewItem;