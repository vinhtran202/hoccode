import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "./config/client";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [completed, setCompleted] = useState(false);
  const [email, setEmail] = useState("");
  const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey") || "");

  useEffect(() => {
    if (apiKey) {
      fetchTodos();
    }
  }, [apiKey]);

  const fetchTodos = async () => {
    const { response, data } = await client.get(`/api-key?email=${email}`);
    if (response.ok) {
      setTodos(data.todos);
    } else {
      toast.error("Failed to fetch todos");
    }
    console.log(apiKey);
  };

  const addTodo = async () => {
    const newTodo = { todo: input };
    const { response, data } = await client.post(
      `/api-key?email=${email}`,
      newTodo
    );
    if (response.ok) {
      setTodos([...todos, data.todo]);
      setInput("");
    } else {
      toast.error("Failed to add todo");
    }
  };

  const updateTodo = async () => {
    const updatedTodo = { todo: input, completed };
    const { response, data } = await client.put(
      `/api-key?email=${email}/${todos[editIndex].id}`,
      updatedTodo
    );
    if (response.ok) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? data.todo : todo
      );
      setTodos(updatedTodos);
      setInput("");
      setEditIndex(-1);
    } else {
      toast.error("Failed to update todo");
    }
  };

  const removeTodo = async (id) => {
    const { response } = await client.delete(`/api-key?email=${email}/${id}`);
    if (response.ok) {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);
    } else {
      toast.error("Failed to delete todo");
    }
  };

  const setEdit = (index) => {
    setInput(todos[index].todo);
    setCompleted(todos[index].completed);
    setEditIndex(index);
  };

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  const handleLogin = async () => {
    const url = `/api-key?email=${encodeURIComponent(email)}`;
    const { response, data } = await client.get(url);
    if (response.ok) {
      const { apiKey } = data;
      localStorage.setItem("apiKey", apiKey);
      client.setToken(apiKey);
      setApiKey(apiKey);
    } else {
      toast.error("Failed to obtain API key");
    }
  };

  return (
    <>
      {apiKey ? (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4 bg-custom-background bg-center bg-cover">
          <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/2">
            <h1 className="text-3xl font-bold text-center md-4">
              Welcome to Todo App!
            </h1>
            <TodoForm
              addTodo={addTodo}
              updateTodo={updateTodo}
              input={input}
              setInput={setInput}
              editIndex={editIndex}
              completed={completed}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>
          {todos.length > 0 && (
            <TodoList todos={todos} setEdit={setEdit} removeTodo={removeTodo} />
          )}
        </div>
      ) : (
        <Login email={email} setEmail={setEmail} handleLogin={handleLogin} />
      )}
      <ToastContainer />
    </>
  );
}

export default App;
