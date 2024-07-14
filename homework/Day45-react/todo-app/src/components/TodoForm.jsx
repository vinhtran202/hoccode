import React from "react";

const TodoForm = ({
  addTodo,
  updateTodo,
  input,
  setInput,
  editIndex,
  completed,
  handleCheckboxChange,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === -1) {
      addTodo();
    } else {
      updateTodo();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        placeholder="Thêm một việc làm mới"
        className="py-2 px-4 border rounded w-full focus:outline-none mb-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {editIndex !== -1 && (
        <div className="flex items-center mb-2">
          <label className="mr-2">Not Completed</label>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleCheckboxChange}
          />
        </div>
      )}
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded mb-2"
      >
        {editIndex === -1 ? "Thêm Mới" : "Update"}
      </button>
      {editIndex !== -1 && (
        <button
          type="button"
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={() => setInput("")}
        >
          Thoát
        </button>
      )}
    </form>
  );
};

export default TodoForm;
