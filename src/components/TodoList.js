import React, { useState, useEffect } from 'react';
import TodoItems from './TodoItems';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('myLocalStorage'));
    if (todos) {
      setTodos(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myLocalStorage', JSON.stringify(todos));
  }, [todos]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitTodos = (e) => {
    e.preventDefault();
    const newTodos = [...todos, { text: input }];
    setTodos(newTodos);
    setInput('');
  };

  const removeTodo = (text) => {
    const removeArr = [...todos].filter((input) => input.text !== text);
    setTodos(removeArr);
  };

  return (
    <div>
      <form>
        <input
          className='form-input'
          type='text'
          placeholder='Add a todo'
          value={input}
          onChange={changeHandler}
        />
        <button type='submit' onClick={submitTodos} disabled={input.length < 1}>
          add
        </button>
      </form>
      <TodoItems todos={todos} setTodos={setTodos} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoList;
