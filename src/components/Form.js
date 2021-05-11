import React from 'react';
import TodoList from './TodoList';

const Form = ({ input, setInput, todos, setTodos }) => {
  return (
    <div className='container'>
      <div className='form'>
        <div className='form-header'>
          <h3>My Plan for Today</h3>
        </div>
        <div className='form-body'>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            input={input}
            setInput={setInput}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
