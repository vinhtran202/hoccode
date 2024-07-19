const urlApi = "https://xptr2r-8080.csb.app";
const root = document.querySelector(".root");

// Function to fetch todos from the server
const callApi = async () => {
  try {
    const response = await fetch(`${urlApi}/todos`);
    if (!response.ok) {
      throw new Error("Something went wrong with the server");
    }

    const data = await response.json();
    getTodoList(data);
  } catch (error) {
    console.log(error);
  }
};

// Function to display the todo list
const getTodoList = (data) => {
  const todoList = document.querySelector(".todo-list");
  const completedTodoList = document.querySelector(".completed-todos");

  const todos = data.filter((todo) => !todo.completed);
  const completedTodos = data.filter((todo) => todo.completed);

  todoList.innerHTML = todos
    .map(
      (todo) => `
        <div class="mt-2.5 flex w-full items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow" data-id="${todo.id}">
          <span class="font-normal text-gray-700">${todo.title}</span>
          <div class="flex gap-2">
            <button id="delete" type="button" class="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-300">
              <i class="fa-solid fa-trash" style="color: #ffffff"></i>
            </button>
            <button id="edit" type="button" class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <i class="fa-regular fa-pen-to-square" style="color: #ffffff"></i>
            </button>
            <button id="done" type="button" class="bg-gray-400 flex h-10 w-10 items-center justify-center rounded-lg hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300">
              <i class="fa-solid fa-check-to-slot" style="color: #ffffff"></i>
            </button>
          </div>
        </div>`
    )
    .join("");

  completedTodoList.innerHTML = completedTodos
    .map(
      (todo) => `
        <div class="mt-2.5 flex w-full items-center justify-between bg-green-200 p-4 rounded-lg border border-gray-200 shadow" data-id="${todo.id}">
          <span class="font-normal text-gray-700">${todo.title}</span>
          <div class="flex gap-2">
            <button id="delete" type="button" class="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-300">
              <i class="fa-solid fa-trash" style="color: #ffffff"></i>
            </button>
            <button id="edit" type="button" class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <i class="fa-regular fa-pen-to-square" style="color: #ffffff"></i>
            </button>
            <button id="done" type="button" class="bg-gray-400 flex h-10 w-10 items-center justify-center rounded-lg hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300">
              <i class="fa-solid fa-check-to-slot" style="color: #ffffff"></i>
            </button>
          </div>
        </div>`
    )
    .join("");

  // Add event listeners to delete buttons
  const delBtn = document.querySelectorAll("#delete");
  delBtn.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const todoElement = e.target.closest("[data-id]");
      const todoId = todoElement.getAttribute("data-id");
      await deleteTodo(todoId);
      callApi();
    });
  });

  // Add event listeners to edit buttons
  const editBtn = document.querySelectorAll("#edit");
  editBtn.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const todoElement = e.target.closest("[data-id]");
      const todoId = todoElement.getAttribute("data-id");
      const todo = await getTodo(todoId);
      const popup = createPopup(todo.title);
      root.appendChild(popup);

      // Handle form submission
      const form = popup.querySelector("form");
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const title = form.querySelector("input").value.trim();
        if (title !== "") {
          await updateTodo(todoId, { title });
          popup.remove(); // Close the popup after saving
          callApi(); // Refresh the todo list
        }
      });

      // Handle cancel button
      const cancelBtn = popup.querySelector("button[type='button']");
      cancelBtn.addEventListener("click", () => {
        popup.remove(); // Close the popup when cancel is clicked
      });
    });
  });

  // Add event listeners to done buttons
  const doneBtn = document.querySelectorAll("#done");
  doneBtn.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const todoElement = e.target.closest("[data-id]");
      const todoId = todoElement.getAttribute("data-id");
      const isCompleted = todoElement.classList.contains("bg-green-200");

      // Update the todo status
      await updateTodo(todoId, { completed: !isCompleted });

      callApi(); // Refresh the todo list
    });
  });
};

callApi();

// Create a new todo
const addTodo = async (data) => {
  try {
    const response = await fetch(`${urlApi}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error("Something went wrong with the server");
    }
    callApi(); // Refresh the todo list after adding a new todo
  } catch (error) {
    console.log(error);
  }
};

// Delete a todo
const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${urlApi}/todos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Something went wrong with the server");
    }
    console.log(`Todo with id ${id} deleted`);
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};

// Function to fetch a single todo by ID
const getTodo = async (id) => {
  try {
    const response = await fetch(`${urlApi}/todos/${id}`);
    if (!response.ok) {
      throw new Error("Something went wrong with the server");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

// Function to update a todo
const updateTodo = async (id, data) => {
  try {
    // Fetch the existing todo to get the current title
    const existingTodo = await getTodo(id);
    const updatedData = {
      ...existingTodo,
      ...data,
    };

    const response = await fetch(`${urlApi}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Something went wrong with the server");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

// Function to create a popup for editing todos
const createPopup = (title) => {
  const popup = document.createElement("div");
  popup.innerHTML = `
    <div class="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-gray-700/60 p-4">
      <div class="w-full max-w-md">
        <form class="rounded-lg bg-white shadow">
          <div class="p-6">
            <input required type="text" class="w-full bg-gray-50 p-4 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Edit Todo" value="${title}">
          </div>
          <div class="flex items-center justify-center space-x-8 p-4 rounded-b border-t border-gray-200">
            <button type="submit" class="rounded-lg bg-emerald-700 px-5 py-2.5 text-center font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300">Save</button>
            <button type="button" class="bg-white px-5 py-2.5 rounded-lg border border-gray-200 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200">Cancel</button>
          </div>
        </form>
      </div>
    </div>`;
  return popup;
};

// Handle form submission for adding new todos
const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = e.target[0].value.trim();
  if (title !== "") {
    await addTodo({
      title: title,
      completed: false,
    });
    e.target.reset();
  } else {
    console.log("Please enter a title");
  }
});

// Completed todos toggle
const completedTodosToggle = document.querySelector("#completedTodos");
completedTodosToggle.addEventListener("click", () => {
  const icon = completedTodosToggle.querySelector("i");
  const completedTodos = document.querySelector(".completed-todos");
  icon.classList.toggle("rotate-90");
  completedTodos.classList.toggle("hidden");
  if (icon.classList.contains("rotate-90")) {
    completedTodosToggle.style.backgroundColor = "green";
  } else {
    completedTodosToggle.removeAttribute("style");
  }
});
