document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Load tasks from local storage
  const loadTask = () => {
    const tasks = JSON.parse(localStorage.getItem("task")) || [];
    taskList.innerHTML = ""; // Clear task list

    tasks.forEach((task) => {
      createTaskElement(task);
    });
  };

  // Save tasks to local storage
  const saveTask = (tasks) => {
    localStorage.setItem("task", JSON.stringify(tasks));
  };

  // Create task element
  const createTaskElement = (task) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    if (task.completed) {
      taskItem.classList.add("completed");
    }

    taskItem.innerHTML = `
      <span class="task-text">${task.text}</span>
      <div>
        <button class="editButton">Edit</button>
        <button class="deleteButton">Delete</button>
        <input type="checkbox" class="completedCheckbox" ${
          task.completed ? "checked" : ""
        }>
      </div>
    `;

    // Edit button functionality
    taskItem.querySelector(".editButton").addEventListener("click", () => {
      editTask(task);
    });

    // Delete button functionality
    taskItem.querySelector(".deleteButton").addEventListener("click", () => {
      deleteTask(task);
    });

    // Toggle completion checkbox functionality
    taskItem
      .querySelector(".completedCheckbox")
      .addEventListener("change", () => {
        toggleTask(task);
      });

    taskList.appendChild(taskItem);
  };

  // Add new task
  addTaskBtn.addEventListener("click", () => {
    if (taskInput.value.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    const newTask = {
      text: taskInput.value.trim(),
      completed: false,
    };

    const tasks = JSON.parse(localStorage.getItem("task")) || [];
    tasks.push(newTask);
    saveTask(tasks);
    createTaskElement(newTask);

    taskInput.value = ""; // Clear input field
  });

  // Edit task
  const editTask = (task) => {
    const tasks = JSON.parse(localStorage.getItem("task")) || [];
    const index = tasks.findIndex(
      (t) => t.text === task.text && t.completed === task.completed
    );

    if (index !== -1) {
      const newTaskText = prompt("Edit your task:", task.text);
      if (newTaskText !== null && newTaskText.trim() !== "") {
        tasks[index].text = newTaskText;
        saveTask(tasks);
        loadTask(); // Reload the tasks to reflect the changes
      }
    }
  };

  // Delete task
  const deleteTask = (task) => {
    const tasks = JSON.parse(localStorage.getItem("task")) || [];
    const updatedTasks = tasks.filter(
      (t) => t.text !== task.text || t.completed !== task.completed
    );

    saveTask(updatedTasks);
    loadTask(); // Reload the tasks to reflect the changes
  };

  // Toggle task completion
  const toggleTask = (task) => {
    const tasks = JSON.parse(localStorage.getItem("task")) || [];
    const index = tasks.findIndex(
      (t) => t.text === task.text && t.completed === task.completed
    );

    if (index !== -1) {
      tasks[index].completed = !tasks[index].completed;
      saveTask(tasks);
      loadTask(); // Reload the tasks to reflect the changes
    }
  };

  // Initial load of tasks
  loadTask();
});
