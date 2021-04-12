import React, { useState } from 'react';

const Form = ({ inputText, setInputText, todos, setToDos, setStatus }) => {
  const [add, setAdd] = useState(true);
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value != '') {
      setAdd(false);
    } else {
      setAdd(true);
    }
    setInputText(e.target.value);
  };
  const submitToDoHandler = (e) => {
    e.preventDefault();
    setToDos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText('');
    setAdd(true);
  };
  const statusHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type='text'
        className='todo-input'
      />
      <button
        onClick={submitToDoHandler}
        className='todo-button'
        type='submit'
        disabled={add}
      >
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select onChange={statusHandler} name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
