import TodoData from './components/learn2/TodoData';
import TodoNew from './components/learn2/TodoNew';
import './components/learn2/todo.css';
import ReactLogo from './assets/react.svg';
import { useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
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
  const DeleteData = (id) => {
    const NewTodo = todoList.filter((item) => item.id !== id);
    setTodoList(NewTodo);
  };
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <>
      <Header />
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
          <TodoData todoList={todoList} DeleteData={DeleteData} />
        ) : (
          <div className="todo-image">
            <img className="logo" src={ReactLogo} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
