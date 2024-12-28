let marks 

var grade // global 


function marksAndgrade() {
    if (marks >= 0 && marks <= 100) {
        if (marks <= 100 && marks >= 90) {
            return grade = "A"
        } else if (marks < 90 && marks >= 80) {
            return "B"
        } else if (marks < 80 && marks >= 70) {
            return "C"
        } else if (marks < 70 && marks >= 60) {
            return "D"
        } else if (marks < 60 && marks >= 50) {
            return "E"
        } else
            return "F"

    } else {
        return "Invalid marks"
    }
}

grade = marksAndgrade()

function comment(){
    switch (grade) {
        case "A":
            return "Excellent work!"
        case "B":
            return "Well done"
        case "C":
            return "Good job"
        case "D":
            return "You passed, but you could do better"
        case "E":
            return "Just passesd"
        case "F":
            return "Sorry, you failed"
        default: 
            return "Invalid choice"
    }
}

function eligibility(){
    if (grade == ("A" || "B" || "C" || "D" || "E"))
        return `Your grade is ${grade} ${comment()} Congratulations! You are eligible for the next level`
    else
        return `Your grade is ${grade} ${comment()} Please try again next time`
}

console.log(eligibility())

// normal fun
function add(){

}


// arrow fun

let fun = () => {
    console.log("arrow function")
}



