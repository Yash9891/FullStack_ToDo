// App.js
import ToDo from './components/Todo';
import './App.css';
import { useEffect, useState } from 'react';
import { getAllTodo, addtodo, updatetodo, deletetodo } from './utils/HandleApi';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState('');

  useEffect(() => {
    getAllTodo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <>
      <div className="container">
        <h1>Todo</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updatetodo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addtodo(text, setText, setToDo)
            }
          >
            {isUpdating ? 'Update' : 'Add'}
          </div>
        </div>

        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deletetodo={() => deletetodo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
