import React, { useState } from "react";
import { toast } from "react-toastify";
import { regexEmail } from "../helpers/regex";
import { client } from "../config/client";

export default function Login() {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = async (e) => {
    console.log(email);
    e.preventDefault();
    if (email === "") {
      toast.warn("Vui lòng nhập email");
    } else if (!regexEmail(email)) {
      toast.warn("Email không đúng định dạng");
    } else {
      const response = await client.get(`/api-key?email=${email}`);
      if (!response.response.ok) {
        toast.error("lỗi Email không tồn tại");
      } else {
        localStorage.setItem("apiKey", response.data.data.apiKey);
        toast.success("Đăng nhập thành công");
      }
    }
  };
  return (
    <div>
      <div className="login-container">
        <form
          id="loginForm"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Login
          </h2>
          <div className="form-group">
            <label htmlFor="username"></label>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              type="text"
              id="username"
              name="username"
              placeholder="Email..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />{" "}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
