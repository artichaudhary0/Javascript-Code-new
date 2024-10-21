/*
    Closure function : 
    It is a function which remember the environment in which it was created.
    It carries the outer/ parent enviroment with itself.


    outerfun () : defines the local variable outerVariable and an innerfunction()
    innerfunction() : has the access of outerVariable, formaring the closure
    when outer function is called it returns inner function, which still remeber in which environment it is created.
    even when outerfunction finish its exacution, inner function still have the access to outerVariable.
*/


function outerFun(){
    let outerVariable = "outer variable";
    console.log(outerVariable + "Arti") 

    function innerFun(){
        console.log(outerVariable)
    }

    return innerFun
}


const closure = outerFun()

closure()

