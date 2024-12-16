import React from "react";
import { useState, useEffect } from "react";

export default function Formulario() {
  const [toDo, setToDo] = useState("");
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0)
  
  const inputChange = (e) => {
    setToDo(e.target.value);
  }
  
  const addToDo = (e) => {
    e.preventDefault();
    console.log("Adding", toDo)
    if (toDo.trim() !== '') {
      setList([
        ...list,
        { id: Date.now(), text: toDo }
      ]);
      console.log(toDo)
      setCount(count + 1);
      setToDo("");
    }
  }
  useEffect(() => {
    if (list.length === 0) {
      alert("There are no tasks!!");
    }
  }, [list]);

  const deleteToDo = (id) => {
    setList(list.filter(toDo => toDo.id !== id));
    setCount(count - 1);
  }
  
  return(
    <>
    <div>
      {list.length === 0 &&(
        <p className="noTask">Do not let your list empty!!</p>
      )}
        <form onSubmit={addToDo}>
          <input
            type="text"
            value={toDo}
            onChange={inputChange}
            placeholder='Add your task:'
          />
          <button id="save" type="submit">Add task</button>
        </form>        
          <span  id="counter">You have {count} tasks in your list!</span>
        <ul className='group-list'>
          {list.map((toDo) => {
            console.log("Rendering:", toDo.text)
            return(
              <li className='group-list-item' key={toDo.id}>
                {toDo.text}
                <button 
                className='delete-btn'
                onClick={() => deleteToDo(toDo.id)}>
                  <i className="fa fa-trash"></i>
                </button>
              </li>
            )}
          )}
        </ul>
      </div>
      </>
    )
  }
