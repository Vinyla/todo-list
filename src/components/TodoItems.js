import React from 'react';

const TodoItems = ({ todos, removeTodo }) => {
  return (
    <div>
      {todos && todos.map((todo, index) => (
          <div
            key={index}
            className='list'
            onClick={() => removeTodo(todo)} >
            {todo}
          </div>
        ))}
    </div>
  );
};

export default TodoItems;