import React, { useState, useEffect } from 'react';
import TodoItems from './TodoItems';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('myLocalStorage'));
      if (data) {
        setTodos(data);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('myLocalStorage', JSON.stringify(todos));
    }, [todos]);

  const changeHandler = (e) => {
    setInput(e.target.value)
  };

  const submitTodos = (e) => {
    e.preventDefault();
    const newTodos = [...todos, input];
    setTodos(newTodos);
    setInput('');
  };

  const removeTodo = (index) => {
    const removeArr = [...todos].filter((input, ind) => ind !== index);
    setTodos(removeArr);
  };
  return (
    <div className='container'>
      <div className='form'>
        <div className='form-header'>
          <h3>My Plan for Today</h3>
        </div>
        <div className='form-body'>
          <form>
            <input required
              className='form-input'
              type='text'
              placeholder='Add a todo'
              value={input}
              onChange={changeHandler} />
            <button
              type='submit'
              onClick={submitTodos}
              disabled={input.length < 1} >
              add
            </button>
          </form>
          <TodoItems todos={todos} removeTodo={removeTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
