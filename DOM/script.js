// manually walking over the whole html
let body = document.body.children[4].children[1];

let th = document.getElementsByTagName("th"); // HTML COLLECTION
let thByClass = document.getElementsByClassName("one"); // HTML COLLECTION
let thByID = document.getElementById("recordList"); // Element

let thByQuerySelectorTag = document.querySelector("h1"); // NodeElement first occurance of tag parameter you passed
let thByQuerySelectorId = document.querySelector("#recordList"); // NodeElement => first occurance of Id parameter you passed
// let thByQuerySelectorClass = document.querySelector(".one"); // NodeElement => first occurance of class parameter you passed
let thByQuerySelectorAttribute = document.querySelector("[hello]"); // NodeElement => first occurance of attributes parameter you passed

let thByQuerySelectorAllTag = document.querySelectorAll("h1"); // NodeList All the occurance of tag parameter you passed
let thByQuerySelectorAllId = document.querySelectorAll("#recordList"); // NodeList => All the occurance of Id parameter you passed
// let thByQuerySelectorAllClass = document.querySelectorAll(".one") // NodeList => All the occurance class parameter you passed
let thByQuerySelectorAllAttribute = document.querySelectorAll("[hello]"); // NodeList => All the occurance of attributes parameter you passed

// class = one
let thByQuerySelectorAllClass = document.querySelectorAll(".one");

let mainHeading = document.querySelector("h1");

let removeHelloArti = document.querySelectorAll("h1")[1];

removeHelloArti.style.display = "none";

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  mainHeading.style.backgroundColor = "teal";
  mainHeading.style.color = "white";
  mainHeading.style.borderRadius = "50px";
  mainHeading.style.padding = "12px";
  mainHeading.innerText = "Project made by Arti";
});

mainHeading.innerHTML = `<h1>INNER <span style = "color : red;">HTML</span></h1>`; // append this to mainHeading
mainHeading.innerText = `<h1>INNER <span style = "color : red;">HTML</span></h1>`; // treat this as a string
mainHeading.textContent = `<h1>INNER <span style = "color : red;">HTML</span></h1>`; // treat this as a string

let tr = document.getElementsByTagName("tr");

console.log(thByQuerySelectorAllClass);

for (let i = 0; i < thByQuerySelectorAllClass.length; i++) {
  thByQuerySelectorAllClass[i].innerHTML = `<h4>INNER <span style = "color : red;">HTML</span></h4>`;
}
