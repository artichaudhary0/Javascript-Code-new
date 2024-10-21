// setInterval(()=>{
//     location.reload()  
//     console.log("hello") 
// },5000)

let clickedd = document.getElementById("button-click")

clickedd.textContent = "Click me"

clickedd.addEventListener("click",()=>{
    history.back()
    console.log(history.length)
})