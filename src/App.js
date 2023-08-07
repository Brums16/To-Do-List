import './App.css';
import NewItem from './NewItem.js'
import ThingsToDo from './ThingsToDo.js'
import {useState} from 'react'



export default function App() {


const [toDoArray, setToDoArray] = useState([])


  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <NewItem toDoArray={toDoArray} setToDoArray={setToDoArray}/>
      <ThingsToDo toDoArray={toDoArray} setToDoArray={setToDoArray}/>
      <footer className="App-footer">
        There will also be a footer.
      </footer>

    </div>
  );
}


