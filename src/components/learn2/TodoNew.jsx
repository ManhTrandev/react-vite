const TodoNew = (props) => {
  console.log('>>>Check ', props);
  const { AddnewData } = props;
  // AddnewData('HIP');
  const HandleClick = () => {
    alert('Click me');
  };
  const HandleOnchange = (event) => {
    console.log('>>>Check change', event.target.value);
  };
  return (
    <div className="todo-new">
      <input type="index" onChange={HandleOnchange} />
      <button style={{ cursor: 'pointer' }} onClick={HandleClick}>
        Add
      </button>
    </div>
  );
};
export default TodoNew;
