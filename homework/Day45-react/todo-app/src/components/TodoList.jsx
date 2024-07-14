import TodoItem from "./TodoItem";

const TodoList = ({ todos, setEdit, removeTodo }) => {
  return (
    <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/2">
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            setEdit={setEdit}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
