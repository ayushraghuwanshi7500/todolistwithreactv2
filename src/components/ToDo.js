import React from 'react';

const ToDo = ({ text, todo, setToDos, todos }) => {
  // Events
  const deleteHandler = () => {
    console.log(todo);
    setToDos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setToDos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed
          };
        }
        return el;
      })
    );
  };
  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button onClick={completeHandler} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={deleteHandler} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default ToDo;
