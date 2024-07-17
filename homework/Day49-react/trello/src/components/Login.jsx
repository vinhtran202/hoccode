import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { regexEmail } from "../helpers/regex";
import { client } from "../config/client";
import "../assets/style/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  const greetings = ["Hi!", "Hello!", "Welcome!"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        setFadeClass("fade-in");
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [greetings.length]);

  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    if (email === "") {
      toast.warn("Vui lòng nhập email");
    } else if (!regexEmail(email)) {
      toast.warn("Email không đúng định dạng");
    } else {
      try {
        const { response, data } = await client.get(`/api-key?email=${email}`);
        if (!response.ok) {
          toast.error("Lỗi: Email không tồn tại");
        } else {
          localStorage.setItem("apiKey", data.data.apiKey);
          toast.success("Đăng nhập thành công");
          setTimeout(() => {
            window.location.reload(); // Tải lại trang sau khi đăng nhập thành công
          }, 2000);
        }
      } catch (error) {
        toast.error("Đã có lỗi xảy ra");
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div className="login-container">
        <form id="loginForm" onSubmit={handleSubmit} className="w-96 mx-auto">
          <h2
            className={`mb-8 text-6xl font-bold text-center mt-28 ${fadeClass}`}
          >
            {greetings[greetingIndex]}
          </h2>
          <div className="form-group">
            <label htmlFor="username"></label>
            <input
              onChange={handleChange}
              type="text"
              id="username"
              name="username"
              placeholder="Email..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-96 mx-auto"
            />
          </div>
          <button
            type="submit"
            className="w-96 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
