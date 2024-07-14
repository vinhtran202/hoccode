import { FaPencilAlt, FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, index, setEdit, removeTodo }) => {
  return (
    <li className="flex items-center justify-between bg-white p-3 rounded shadow-md mb-3">
      <input type="text" className="w-full" value={todo.todo} readOnly />
      <div className="flex items-center">
        <button
          onClick={() => setEdit(index)}
          className="bg-green-500 text-white py-2 px-4 rounded mr-2"
        >
          Sửa
        </button>
        <button
          onClick={() => removeTodo(todo.id)}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Xóa
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
