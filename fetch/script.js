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

  console.log("button clicked");

  xhr.onprogress = function () {
    console.log("progres");
  };

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      let response = this.responseText;
      return response;
    } else {
      console.log(this.status);
    }
  };

  console.log("end");

  xhr.send();
}

let data = buttonClickHandle();
console.log(data);
