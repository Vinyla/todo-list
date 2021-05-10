import React from 'react';

const TodoList = () => {
  return (
    <form>
      <input
        className='form-input'
        type='text'
        placeholder='enter task'
      />
      <button>add</button>
    </form>
  );
};

export default TodoList;
