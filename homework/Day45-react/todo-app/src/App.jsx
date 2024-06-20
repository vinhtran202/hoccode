import { useState, useEffect } from "react";
import { getApiKey } from "./utils/api";
import useTodoAPI from "./hooks/useTodoAPI";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [apiKey, setApiKey] = useState("");
  const { todos, loading, createTodo, updateTodo, deleteTodo } =
    useTodoAPI(apiKey);

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const key = await getApiKey("your-email@example.com");
        setApiKey(key);
      } catch (error) {
        console.error("Error getting API key:", error);
      }
    };
    fetchApiKey();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <TodoForm createTodo={createTodo} />
      {loading ? (
        <div className="flex justify-center">
          <div className="spinner border-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
        </div>
      ) : (
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      )}
    </div>
  );
}

export default App;
