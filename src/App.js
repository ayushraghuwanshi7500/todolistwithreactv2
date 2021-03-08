import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
function App() {
  // State

  const [inputText, setInputText] = useState('');
  const [todos, setToDos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredtodo, setfilteredtodo] = useState([]);
  // useEffect(() => {
  //   getLocaltodos();
  // }, []);
  useEffect(() => {
    filterHandler();
    // saveLocalTodos();
  }, [todos, status]);
  // Function
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setfilteredtodo(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setfilteredtodo(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredtodo(todos);
    }
  };

  // const saveLocalTodos = () => {
  //   localStorage.setItem('todos', JSON.stringify([todos]));
  // };
  // const getLocaltodos = () => {
  //   if (localStorage.getItem('todos') === null) {
  //     localStorage.setItem('todos', JSON.stringify([]));
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem('todos'));
  //     setToDos(todoLocal);
  //   }
  // };
  return (
    <div className='App'>
      <header>
        <h1>Ayush Raghuwanshi's ToDoList</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setToDos={setToDos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList todos={todos} setToDos={setToDos} filteredtodo={filteredtodo} />
    </div>
  );
}

export default App;
