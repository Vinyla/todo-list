import TodoItems from "./TodoItems";
import TodoList from "./TodoList";

const Form = () => {
  return (
    <div className='container'>
      <div className='form'>
        <div className='form-header'>
          <h3>My To Do List</h3>
        </div>
        <div className='form-body'>
          <TodoList />
          <TodoItems />
        </div>
      </div>
    </div>
  );
};

export default Form;
