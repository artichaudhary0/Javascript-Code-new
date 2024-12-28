let h = document.getElementById("fatcs");

var fetchData = document.getElementById("btn");

let url = "https://cat-fact.herokuapp.com/facts";

// var getFacts = async () => {
//   let respose = await fetch(url);

//   let responseData = await respose.json(); // CONVERSION

//   responseData.forEach((element) => {
//     h.innerText = element["text"];
//   });

//   console.log(responseData);
// };

// getFacts();

function getFacts() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((element) => {
        h.innerText = element["text"];
      });
    });
}
fetchData.addEventListener("click", getFacts);
