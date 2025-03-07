const TodoData = (props) => {
  console.log('>>>Check prop', props);
  const { name, age, data } = props;
  return (
    <div className="todo-data">
      <div>See {name}</div>
      <div>Learn React</div>
      <div>Watch Youtude</div>
    </div>
  );
};
export default TodoData;
