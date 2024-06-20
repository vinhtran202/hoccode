import { useState, useEffect } from "react";
import axios from "axios";

const useTodoAPI = (apiKey) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api-todo-ebon.vercel.app/api/v1/todos",
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        setTodos(response.data.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, [apiKey]);

  const createTodo = async (title) => {
    try {
      setLoading(true);
      await axios.post(
        "https://api-todo-ebon.vercel.app/api/v1/todos",
        { title },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      // Gọi lại fetchTodos để cập nhật danh sách
      await fetchTodos();
    } catch (error) {
      console.error("Error creating todo:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateTodo = async (id, title, completed) => {
    try {
      setLoading(true);
      await axios.put(
        `https://api-todo-ebon.vercel.app/api/v1/todos/${id}`,
        { title, completed },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      // Gọi lại fetchTodos để cập nhật danh sách
      await fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    try {
      setLoading(true);
      await axios.delete(
        `https://api-todo-ebon.vercel.app/api/v1/todos/${id}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      // Gọi lại fetchTodos để cập nhật danh sách
      await fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    } finally {
      setLoading(false);
    }
  };

  return { todos, loading, createTodo, updateTodo, deleteTodo };
};

export default useTodoAPI;
