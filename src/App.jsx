import TodoData from './components/learn2/TodoData';
import TodoNew from './components/learn2/TodoNew';
import './components/learn2/todo.css';
import ReactLogo from './assets/react.svg';
import { useState } from 'react';
const App = () => {
  const name = 'What your name';
  const age = 25;
  const data = {
    address: 'HaNoi',
    country: 'VietNam',
  };
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'Learn React' },
    { id: 2, name: 'Watch Youtude' },
  ]);
  const AddnewData = (name) => {
    alert(`Error 404 !!! ${name}`);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew AddnewData={AddnewData} />
      <TodoData name={name} age={age} data={data} todoList={todoList} />
      <div className="todo-image">
        <img className="logo" src={ReactLogo} />
      </div>
    </div>
  );
};

export default App;
