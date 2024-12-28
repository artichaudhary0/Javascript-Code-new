let employees = [];
let nextId = 1;

document
  .getElementById("employeeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const salary = Number(document.getElementById("salary").value);
    const performance = Number(document.getElementById("performance").value);
    const projects = document
      .getElementById("projects")
      .value.split(",")
      .map((p) => p.trim());

    addEmployee(name, department, salary, performance, projects);
    this.reset();
  });

function addEmployee(name, department, salary, performance, projects) {
  employees.push({
    id: nextId++,
    name,
    department,
    salary,
    performance,
    projects,
  });
  renderTable();
  console.log("sucess");
}

function renderTable() {
  const table = document.getElementById("employeTable");
  table.innerHTML = employees
    .map(
      (emp) => `
        <tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.department}</td>
        <td>${emp.salary}</td>
        <td>${emp.performance}</td>
        <td>${emp.projects.join(",")}</td>
        <td>
            <button onclick ="removeEmployee(${emp.id})">Remove</button>
        </td>
        </tr>
        
        `
    )
    .join("");
}

function removeEmployee(id) {
  employees = employees.filter((emp) => emp.id !== id);
  renderTable();
}

document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();

  const filtered = employees.filter((emp) => {
    emp.id.toString().includes(query) ||
      emp.name.toLowerCase().includes(query) ||
      emp.department.toLowerCase().includes(query);
  });
  renderFilterTable(filtered);
});

function renderFilterTable(data) {
  const table = document.getElementById("employeTable");
  table.innerHTML = employees
    .map(
      (emp) => `
        <tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.department}</td>
        <td>${emp.salary}</td>
        <td>${emp.performance}</td>
        <td>${emp.projects.join(",")}</td>
        <td>
            <button onclick ="removeEmployee(${emp.id})">Remove</button>
        </td>
        </tr>
        
        `
    )
    .join("");
}

function generateAnalytics() {
  if (employees.length === 0) {
    alert("No employee available");
    return;
  }
  const toatalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

  const topPerformer = employees.reduce((prev, curr) =>
    curr.performance > prev.performance ? curr : prev
  );

  document.getElementById("analyticsContent").innerHTML = `
  <p>Total Playroll : $${toatalSalary}</p>
  <p>Top Performer : ${topPerformer.name} (Performance : ${topPerformer.performance})</p>
  `;
}
