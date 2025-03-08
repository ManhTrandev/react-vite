import TodoData from './components/learn2/TodoData';
import TodoNew from './components/learn2/TodoNew';
import './components/learn2/todo.css';
import ReactLogo from './assets/react.svg';
import { useState } from 'react';
const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: 'Learn React' },
    // { id: 2, name: 'Watch Youtude' },
  ]);

  const AddnewData = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew AddnewData={AddnewData} />
      {/* {todoList.length > 0 && <TodoData todoList={todoList} />}

      {todoList.length === 0 && (
        <div className="todo-image">
          <img className="logo" src={ReactLogo} />
        </div>
      )} */}
      {todoList.length > 0 ? (
        <TodoData todoList={todoList} />
      ) : (
        <div className="todo-image">
          <img className="logo" src={ReactLogo} />
        </div>
      )}
    </div>
  );
};

export default App;
