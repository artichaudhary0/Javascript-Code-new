const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", () => {
  loadTask();
});

const loadTask = () => {
  const tasks = JSON.parse(localStorage.getItem("task"));
  taskList.innerHTML = ""; // clear task list

  tasks.forEach((task) => {
    creatTaskElement(task);
  });
};
// create task list item
const creatTaskElement = (task) => {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  if (task.completed) {
    taskItem.classList.add("completed");
  } else {
    taskItem.innerHTML = `
    <span class="task-text">${task.dataTask}</span>
    <div>
      <button class="editButton">Edit Button</button>
      <button class="deleteButton">Delete Button</button>
      <input type="checkbox" class = "CompletedCheckedBox" ${
        task.completed ? "checked" : ""
      }></div>
    `;
  }
  taskList.appendChild(taskItem);
};

const saveTask = (tasks) => {
  localStorage.setItem("task", JSON.stringify(tasks));
};

addTaskBtn.addEventListener("click", () => {
  if (taskInput.value.trim() === "") {
    alert("Please enter task");
    return;
  }

  // new task
  const newTask = {
    dataTask: taskInput.value.trim(),
    completed: false,
  };

  const tasks = JSON.parse(localStorage.getItem("task")) || [];
  tasks.push(newTask);
  creatTaskElement(newTask);

  saveTask(tasks);

  taskInput.value = ""; // clear input
});
