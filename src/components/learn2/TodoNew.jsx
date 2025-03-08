import { useState } from 'react';

const TodoNew = (props) => {
  const [valueInput, setValueIpnput] = useState('HIP');
  const { AddnewData } = props;
  // AddnewData('HIP');
  const HandleClick = () => {
    AddnewData(valueInput);
    setValueIpnput('');
  };
  const HandleOnchange = (name) => {
    setValueIpnput(name);
  };
  return (
    <div className="todo-new">
      <input
        type="index"
        onChange={(event) => HandleOnchange(event.target.value)}
        value={valueInput}
      />
      <button style={{ cursor: 'pointer' }} onClick={HandleClick}>
        Add
      </button>
      <div>Value input is {valueInput}</div>
    </div>
  );
};
export default TodoNew;
