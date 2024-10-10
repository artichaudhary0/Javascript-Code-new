// function , switch , ternary , if else(ladder)
/*
Step 1: Grade Calculation
Develop a program that takes a score out of 100 as input from the user and calculates the
corresponding grade using a ternary operator. Allocate grades from A to F for various ranges.
Example:
Input: Enter your score: 92
Output: Your grade is A

Step 2: Additional Comments

Extend the program to provide additional comments based on the grade using a switch-case
statement. For example, if the grade is ‘A’, then print ‘Excellent work!’. If the grade is ‘B’, then
print ‘Well done’. If the grade is ‘C’, then print ‘Good job’. If the grade is ‘D’, then print ‘You
passed, but you could do better’. And if the grade is ‘F’, then print ‘Sorry, you failed’.
Example:
Input: Enter your score: 92
Output: Your grade is A. Excellent work!


Step 3: Eligibility Check
Further, extend the program to check eligibility for the next level based on the grade using an
if-else statement. Print ‘Congratulations! You are eligible for the next level’ if the grade is from
‘A’ to ‘D’. Print ‘Please try again next time’ if the grade is ‘F’.
Example:
Input: Enter your score: 85
Output: Your grade is A. Excellent work! You are eligible for the next level.
*/


let marks = prompt("Enter your marks : ")


let grade
let comment
// ternary
marks >= 0 && marks <= 100 ?
    marks <= 100 && marks >= 90 ?
        console.log(`${comment = "Your grade is "}` +   `${grade = "A"}`)
        :
        marks < 90 && marks >= 80 ?
            console.log(`${comment = "Your grade is "}` +   `${grade = "B"}`)
            :
            marks < 80 && marks >= 70 ?
            console.log(`${comment = "Your grade is "}` +   `${grade = "C"}`)
                :
                marks < 70 && marks >= 60 ?
                    console.log(`${comment = "Your grade is "}` +   `${grade = "D"}`)
                    :
                    marks < 60 && marks >= 50 ?
                        console.log(`${comment = "Your grade is "}` +   `${grade = "E"}`)
                        :
                        console.log(`${comment = "Your grade is "}` +   `${grade = "F"}`)
    :
    console.log("Invalid marks")


switch (grade) {
    case "A":
        console.log(`${comment} ${grade} Excellent work!`)
        break;
    case "B":
        console.log(`${comment} ${grade} Well done`)
        break;
    case "C":
        console.log(`${comment} ${grade} Good job`)
        break;
    case "D":
        console.log(`${comment} ${grade} You passed, but you could do better`)
        break;
    case "E":
        console.log(`${comment} ${grade} Just Passed`)
        break;
    case "F":
        console.log(`${comment} ${grade} Sorry, you failed`)
        break;
    default:
        break;
}

if(grade == "A" || grade == "B" || grade == "C" || grade == "D" || grade == "E")
    console.log(`${comment} ${grade} Congratulations! You are eligible for the next level`)
else
    console.log(`${comment} ${grade} Sorry, you failed Please try again next time`)




// nested + ladder
// if (marks >= 0 && marks <= 100) {
//     if (marks <= 100 && marks >= 90)
//         console.log("Your grade is A.")
//     else if (marks < 90 && marks >= 80)
//         console.log("Your grade is B.")
//     else if (marks < 80 && marks >= 70)
//         console.log("Your grade is C.")
//     else if (marks < 70 && marks >= 60)
//         console.log("Your grade is D.")
//     else if (marks < 60 && marks >= 50)
//         console.log("Your grade is E.")
//     else
//         console.log("Your grade is F.")

// } else {
//     console.log("Invalid marks")
// }



console.log(aa)