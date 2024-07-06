import React, { useState } from "react";
import logospace from "../assets/logospace.png";
import { useForm } from "react-hook-form";
import { loginRequest } from "../utils/loginRequest";
import { useDispatch } from "../store/hook";

export default function Login() {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(null);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    setStatus("Pending...");
    const tokens = await loginRequest(email, password);
    setStatus(null);
    if (!tokens) {
      setMsg("Email hoặc mật khẩu không chính xác");
    } else {
      localStorage.setItem("login_token", JSON.stringify(tokens));
      dispatch({
        type: "auth/set_user",
      });
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-3 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-48 w-auto "
          src={logospace}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight  bg-white dark:bg-gray-900 text-black dark:text-white w-max ">
          Sign in to your account
        </h2>
      </div>
      {msg && (
        <div
          className="p-4 text-sm text-center text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 w-96 mx-auto mt-5"
          role="alert"
        >
          {msg}
        </div>
      )}

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6  bg-white dark:bg-gray-900 text-black dark:text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("email", {
                  required: { value: true, message: "Vui lòng nhập Email..." },
                  pattern: {
                    value:
                      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
                    message: "Email không đúng định dạng",
                  },
                })}
              />
              {errors.email && (
                <span className="p-4 mb-4 text-sm text-red-800 rounded-lg dark:bg-gray-800 dark:text-red-400">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900 bg-white dark:bg-gray-900 text-black dark:text-white"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Vui lòng nhập mật khẩu...",
                  },
                  minLength: {
                    value: 6,
                    message: "Vui lòng nhập mật khẩu ít nhất 6 ks ý tự",
                  },
                })}
              />
              {errors.password && (
                <span className="p-4 mb-4 text-sm text-red-800 rounded-lg dark:bg-gray-800 dark:text-red-400">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <button
              className="flex w-full h-16 justify-center rounded-md bg-indigo-600 px-3 py-4 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={status === "pending..."}
            >
              {status === "pending..." ? "PENDING..." : "LOGIN"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
