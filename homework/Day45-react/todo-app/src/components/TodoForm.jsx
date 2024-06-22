import { useState, useEffect } from "react";
import { FaPlus, FaPencilAlt } from "react-icons/fa";

const TodoForm = ({ addTodo, updateTodo, input, setInput, editIndex }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === -1) {
      addTodo();
    } else {
      updateTodo();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Add a todo"
        className="py-2 px-4 border rounded w-full focus:outline-none mr-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded"
      >
        {editIndex === -1 ? <FaPlus /> : <FaPencilAlt />}
      </button>
    </form>
  );
};

export default TodoForm;
