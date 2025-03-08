const TodoData = (props) => {
  console.log('>>>Check prop', props);
  const { todoList } = props;
  console.log('<<<CHeck', props);
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log('>>Check map', item, index);
        return (
          <div className="todo-item">
            <div> {item.name}</div>

            <button>Delete</button>
          </div>
        );
      })}{' '}
      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};
export default TodoData;
