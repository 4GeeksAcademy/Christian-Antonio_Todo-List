import { useState, useEffect } from "react";

export default function Formu() {
  const [toDo, setToDo] = useState("");
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0)
  
  
  const inputChange = (e) => {
    setToDo(e.target.value);
  }
  
  const addToDo = (e) => {
    e.preventDefault();
    
    if (toDo.trim() !== '') {
      setList([
        ...list,
        { id: Date.now(), text: toDo }
      ]);
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

  var input = document.getElementById('wordBox');

  function FirstLetterCapital() {
    let string = input.value;
    if (!input.value) return;
    let capitalLetter = string.substring(0, 1).toUpperCase();
    if (string.length > 0) {

      // En la variable de abajo no entiendo porque no funciona si se pone LET o CONST en vez de VAR //
      var lowerCase = string.substring(1).toLowerCase();

    }
    input.value = capitalLetter.concat(lowerCase);



  }
  return(
    <div className="container">
      {list.length === 0 &&(
        <p className="noTask">Do not let your list empty!!</p>
      )}
        <form onSubmit={addToDo}>
          <input
            id='wordBox'
            onKeyUp={FirstLetterCapital}
            type='text'
            value={toDo}
            onChange={inputChange}
            placeholder='Add your task:'
          />
          <button id="save" type="submit">Add task</button>
        </form>        
          <span id="counter">You have {count} tasks in your list!</span>
        <ul className='group-list shadow fade'>
          {list.map((toDo) => (
            <li className='group-list-item' key={toDo.id}>
              {toDo.text}
              <button 
              className='delete-btn'
              onClick={() => deleteToDo(toDo.id)}>
                <i className="fa fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }