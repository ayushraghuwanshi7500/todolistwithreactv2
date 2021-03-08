import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, setToDos, filteredtodo }) => {
  console.log(filteredtodo);
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filteredtodo.map((todo) => (
          <ToDo
            setToDos={setToDos}
            todos={todos}
            key={todo.id}
            text={todo.text}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
