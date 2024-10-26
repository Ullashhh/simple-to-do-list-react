const Item = ({ item, handleOnDelete, handleChecked, handleOnUpdate }) => {
  return (
    <div
      className={`${
        item.value ? "bg-gray-700" : "bg-blue-400"
      } mx-auto text-center mt-5 border w-2/4 flex items-center justify-between rounded shadow-lg`}
    >
      <div>
        {" "}
        <input
          className="mr-2"
          type="checkbox"
          value={item.value}
          onClick={() => handleChecked(item.id)}
        />
        {item.name}
      </div>
      <div>
        <button onClick={() => handleOnUpdate(item.id, item)} className="mr-2">Edit</button>
        <button onClick={() => handleOnDelete(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Item;
