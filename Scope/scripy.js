/*
Scope : accessibilty of a variable.
Type : 
1 : Global scope
2 : Local scope
    1 : block scope {} 
    2 : function scope  
*/
let a = 10 // global
var b = 20 // global
const c = 30 // global


function add(){
    a = 50
    b = 60 
    console.log(d)
    var d = a + b // d local 
}

add()

console.log(a)
// console.log(b)
// console.log(d)

