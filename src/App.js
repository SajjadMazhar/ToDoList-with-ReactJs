import React, { useState } from 'react';
import ToDo from './components/ToDo';

const App = () => {
  const [ToDos, setToDos] = useState([])
  const [inputVal, setInput] = useState('')

  const inputEvnt = (event) => {
    setInput(event.target.value);
  }

  const addToList = () => {
    setToDos((oldItems) => {
      return [...oldItems, inputVal];
    })
    setInput("");
  }

  const deleteItem = id => {
    console.log("delete");
    setToDos((oldItems) => {
      return oldItems.filter((elm, index) => {
        return index !== id;
      })
    })
  }


  return (
    <>
      <h1>ToDoList</h1>
      <div className="inputDiv">
        <input type="text" placeholder="Enter your ToDo" onChange={inputEvnt} value={inputVal} />
        <button onClick={addToList} className="addBtn">Add</button>
      </div>
      <hr/>
      <h3>Your ToDo(s):</h3>
      <div className = "todoDiv">
        <ol>
          {ToDos.map(((item, index) => {
            return <ToDo
              text={item}
              key={index}
              id={index}
              selected={deleteItem}
            />;
          }))}
        </ol>
      </div>
    </>
  )
}
export default App;