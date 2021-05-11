import React, { useState } from 'react';
// import TodoItems from './TodoItems';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const addTodos = (e) => {
    e.preventDefault();
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    setTodo('');
  };

  return (
    <div>
      <form>
        <input
          className='form-input'
          type='text'
          placeholder='Add a todo'
          value={todo}
          onChange={changeHandler}
        />
        <button type='submit' onClick={addTodos}>
          add
        </button>
      </form>
      {todos.map((index) => (
        <div className='list' key={index}>
          {todos}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
