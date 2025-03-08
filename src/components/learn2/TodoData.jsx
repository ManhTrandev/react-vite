import { useState } from 'react';

const TodoData = (props) => {
  const { todoList, DeleteData } = props;
  // const { DeleteData, setDeleteData } = useState();
  const HandleDelete = (id) => {
    DeleteData(id);
  };
  console.log('<<<CHeck', props);
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log('>>Check map', item, index);
        return (
          <div className={`todo-item`} key={item.id}>
            <div> {item.name}</div>

            <button
              onClick={() => HandleDelete(item.id)}
              style={{ cursor: 'pointer' }}
            >
              Delete
            </button>
          </div>
        );
      })}{' '}
    </div>
  );
};
export default TodoData;
