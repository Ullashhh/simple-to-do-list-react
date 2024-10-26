import { useState } from "react";
import Item from "../../Item/Item";
const AddTask = () => {
  const [task, setTask] = useState([]);
  const [taskComplete, setTaskComplete] = useState(false);
  const [complete, setComplete] = useState(0);
  let todo;
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const todoName = e.target.task.value;
    if (!todoName) return;
    todo = { name: todoName, value: taskComplete, id: Date.now() };
    setTask([...task, todo]);
    e.target.task.value = "";
  };
  console.log(todo);
  const handleOnDelete = (id) => {
    const filteredItem = task.filter((r) => r.id !== id);
    setTask(filteredItem);
  };

  const handleAllClear = () => {
    setTask([]);
  };
  console.log(task);

  const handleOnUpdate = (id, item) => {
    task.map((r) => {
      if(r.id === id){
        console.log(r.name)
        
      }
    })
  }

  // const handleChecked = (id) => {
  //   setTaskComplete(
  //     task.filter((r) => r.id === id).map((r) => (r.value = !r.value))
  //   );
  //   setComplete(
  //     task.filter((r) => r.id === id).map((r) => {
  //       if(r.value){
  //           complete + 1;
  //       }else{
  //           complete - 1;
  //       }
  //     })
  //   );
  // };
  console.log(complete);
  return (
    <div>
      <form onSubmit={handleOnSubmit} className="text-center mt-5">
        <input
          className=""
          type="text"
          name="task"
          placeholder="Enter Task Name"
        />
        <button>Add Todo</button>
      </form>
      <div>
        {task.length !== 0 ? (
          task.map((r) => (
            <Item
              item={r}
              key={r.id}
              handleOnDelete={handleOnDelete}
              value={taskComplete}
              handleOnUpdate={handleOnUpdate}
              // handleChecked={handleChecked}
              //   taskComplete={taskComplete}
            ></Item>
          ))
        ) : (
          <p className="text-center mt-10 text-red-700">
            Type a task to add it!
          </p>
        )}
      </div>
      {task.length !== 0 && (
        <button onClick={handleAllClear} className="ml-60 mt-5">
          Clear All
        </button>
      )}
      <div className="mt-5 text-center">
        <p>
          Statistics: Total Todos :{" "}
          {task.length !== 0 ? task.length : "No tasks yet"}
        </p>
        <p>Completed Todos : {complete}</p>
        <p>Todos Remaining Todos : No Remaining Todos</p>
      </div>
    </div>
  );
};

export default AddTask;
