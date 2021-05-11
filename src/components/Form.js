import TodoList from "./TodoList";

const Form = () => {
  return (
    <div className='container'>
      <div className='form'>
        <div className='form-header'>
          <h3>My Plan for Today</h3>
        </div>
        <div className='form-body'>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Form;
