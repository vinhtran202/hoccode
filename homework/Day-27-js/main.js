const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const taskContainer = document.querySelector("#tasks");
const error = document.querySelector("#error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

const displayCount = (taskCount) => {
  countValue.innerText = taskCount;
};

const addTask = () => {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none";
  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 200);
    return;
  }

  const task = `<div class="task">
  <input type="checkbox" class="task-check">
  <span class="taskname">${taskName}</span>
  <button class="edit">
  <i class="fa-solid fa-pen-to-square"></i>
  </button>
  <button class="delete">
  <i class="fa-solid fa-trash"></i>
  </button>
  </div>`;
  taskContainer.insertAdjacentHTML("beforeend", task);

  const deleteButton = document.querySelectorAll(".delete");
  deleteButton.forEach((button) => {
    button.onclick = () => {
      button.parentNode.remove();
      taskCount -= 1;
      displayCount(taskCount);
    };
  });

  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((editBtn) => {
    editBtn.onclick = editTask;
  });

  const tasksCheck = document.querySelectorAll(".task-check");
  tasksCheck.forEach((checkBox) => {
    checkBox.onchange = () => {
      checkBox.nextElementSibling.classList.toggle("completed");
      if (checkBox.checked) {
        taskCount -= 1;
      } else {
        taskCount += 1;
      }
      displayCount(taskCount);
    };
  });
  taskCount += 1;
  displayCount(taskCount);
  newTaskInput.value = "";
};

const editTask = (e) => {
  const targetElement = e.target;
  if (!(targetElement.className === "edit")) {
    return;
  }

  const taskName = targetElement.previousElementSibling.innerText;
  const taskSpan = targetElement.previousElementSibling;

  // Tạo input mới
  const input = document.createElement("input");
  input.type = "text";
  input.value = taskName;

  // Thêm input vào trước taskSpan
  taskSpan.insertAdjacentElement("beforebegin", input);

  // Ẩn taskSpan
  taskSpan.style.display = "none";

  // Tạo sự kiện lắng nghe khi người dùng nhấn Enter để lưu chỉnh sửa
  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const newTaskName = input.value.trim();
      if (newTaskName) {
        taskSpan.innerText = newTaskName;
      }
      input.remove();
      taskSpan.style.display = "inline";
    }
  });

  // Tự động focus vào input
  input.focus();
};

addBtn.addEventListener("click", addTask);
window.onload = () => {
  taskCount = 0;
  displayCount(taskCount);
  newTaskInput.value = "";
};
