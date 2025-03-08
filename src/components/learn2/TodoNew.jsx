const TodoNew = (props) => {
  console.log('>>>Check ', props);
  const { AddnewData } = props;
  // AddnewData('HIP');
  return (
    <div className="todo-new">
      <input type="index" />
      <button>Add</button>
    </div>
  );
};
export default TodoNew;
