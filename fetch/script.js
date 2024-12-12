var button = document.getElementById("fetch");

button.addEventListener("click", buttonClickHandle);

//  "data": {
//   "name": "test",
//   "salary": "123",
//   "age": "23",
//   "id": 25
// }

// function buttonClickHandle() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);

//   xhr.getResponseHeader("Content-type", "application-json");

//   params = {
//     name: "Arti",
//     salary: "123",
//     age: "24",
//   };

//   xhr.send(params);
// }

function buttonClickHandle() {
  // instance of XMLHTTPREQUEST
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onprogress = function () {};

  xhr.onload = function () {
    if (this.status === 200) {
      let response = JSON.parse(this.responseText); // JSON
      displayData(response);
      // conver
      return response;
    } else {
      console.log(this.status);
    }
  };

  xhr.send();
}

function displayData(response) {
  const container = document.getElementById("data-container");
  container.innerHTML = "";
  response.forEach((user) => {
    const userDiv = document.createElement("div");

    userDiv.className = "arti";

    userDiv.innerHTML = `
      <h3>${user.id}</h3>
      <h4>${user["address"]["street"]}</h4>
      <h4>${user["company"]["name"]}</h4>
    `;

    container.appendChild(userDiv);
  });
}

console.log(document.querySelector(".arti"));

// let data = buttonClickHandle();
