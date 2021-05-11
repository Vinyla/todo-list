import React from 'react';

const TodoItems = ({ todos, removeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.text}
          className='list'
          onClick={() => removeTodo(todo.text)} >
          {todo.text}
        </div>
      ))}
    </div>
  );
};

export default TodoItems;