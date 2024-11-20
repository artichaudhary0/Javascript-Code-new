document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Load task from local storage
  const loadTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.innerHTML = ""; // clear task list

    tasks.forEach((task) => {
      creatTaskElement(task);
    });
  };

  // save data to local storage
  const saveTask = (tasks) => {
    let data = localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(data);
    return "hello";
  };

  // create task element
  const creatTaskElement = (task) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    if (task.completed) {
      taskItem.classList.add("completed");
    }

    taskItem.innerHTML = `
      <span class="task-text">${task.text}</span>
      <div>
        <button class="editButton">Edit Button</button>
        <button class="deleteButton">Delete Button</button>
        <input type="checkbox" class = "completedCheckedBox" ${
          task.completed ? "checked" : ""
        }></div>
      `;

    // EDIT
    taskItem.querySelector(".editButton").addEventListener("click", () => {
      editTask(task, taskItem);
      console.log("hbfihdfb");
    });

    // delete
    taskItem.querySelector(".deleteButton").addEventListener("click", () => {
      deleteTask(task, taskItem);
    });

    // mark task as completed

    taskItem
      .querySelector(".completedCheckedBox")
      .addEventListener("click", () => {
        toggleTask(task, taskItem);
      });

    taskList.appendChild(taskItem);
  };

  addTaskBtn.addEventListener("click", () => {
    if (taskInput.value.trim() === "") {
      alert("Please enter task");
      return;
    }

    // new task
    const newTask = {
      text: taskInput.value.trim(),
      completed: false,
    };

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(newTask);
    saveTask(tasks);
    creatTaskElement(newTask);

    taskInput.value = ""; // clear input
  });

  const editTask = (task, taskElement) => {
    const newTask = prompt("Edit your task : ", task.text);
    if (newTask !== null) {
      task.text = newTask;
      taskElement.querySelector(".task-text").textContent = newTask;

      let data = saveTask(JSON.parse(localStorage.getItem("tasks")));
      console.log(data);
    }
  };

  const deleteTask = (task, taskElement) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updateTask = tasks.filter((taskValue) => taskValue !== task);
    saveTask(updateTask);
    taskElement.remove();
  };

  const toggleTask = (task, taskElement) => {
    task.completed = !task.completed;
    taskElement.classList.toggle("completed");
    saveTask(JSON.parse(localStorage.getItem("tasks")));
  };

  loadTask();
});
