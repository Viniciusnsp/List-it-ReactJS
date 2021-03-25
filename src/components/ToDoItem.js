import React from 'react';

function ToDoItem({ task, onDelete }) {
  

  return (
    <li>
      <button>°</button>
      {task}
      <button onClick={onDelete} type="button" className="delete" >X</button>
    </li>
  )
}

export default ToDoItem;