// manually walking over the whole html 
let body  = document.body.children[4].children[1]

let th = document.getElementsByTagName("th") // HTML COLLECTION
let thByClass = document.getElementsByClassName("one") // HTML COLLECTION
let thByID = document.getElementById("recordList") // Element

let thByQuerySelectorTag = document.querySelector("h1") // NodeElement first occurance of tag parameter you passed
let thByQuerySelectorId = document.querySelector("#recordList") // NodeElement => first occurance of Id parameter you passed
let thByQuerySelectorClass = document.querySelector(".one") // NodeElement => first occurance of class parameter you passed
let thByQuerySelectorAttribute = document.querySelector("[hello]") // NodeElement => first occurance of attributes parameter you passed


let thByQuerySelectorAllTag = document.querySelectorAll("h1") // NodeList All the occurance of tag parameter you passed
let thByQuerySelectorAllId = document.querySelectorAll("#recordList") // NodeList => All the occurance of Id parameter you passed
// let thByQuerySelectorAllClass = document.querySelectorAll(".one") // NodeList => All the occurance class parameter you passed
let thByQuerySelectorAllAttribute = document.querySelectorAll("[hello]") // NodeList => All the occurance of attributes parameter you passed

// class = one 
let thByQuerySelectorAllClass = document.querySelectorAll(".one")

for(let i = 0 ; i < thByQuerySelectorAllClass.length ; i++)
{
    thByQuerySelectorAllClass[i].innerHTML = `<table>
      <thead>
        <tr>
          <th class="one" hello = "hello world">Name</th>
          <th class="one">Details</th>
          <th class="one">Date</th>
          <th class="one">Actions</th>
        </tr>
      </thead>
      <tbody id="recordList" class = "one" >Data</tbody>
    </table>`
}


