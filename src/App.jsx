import TodoData from './components/learn2/TodoData';
import TodoNew from './components/learn2/TodoNew';
import './components/learn2/todo.css';
import ReactLogo from './assets/react.svg';
const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData />
      <div className="todo-image">
        <img className="logo" src={ReactLogo} />
      </div>
    </div>
  );
};

export default App;
