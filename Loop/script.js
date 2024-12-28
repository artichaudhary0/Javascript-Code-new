/*

loop : 
    1 : Entry type :
        1 : for 
        2 : while
    2 : Exit type
        do-while

Working : 
1 : Initilization
2 : Condition
3 : Flow

*/
let number = 12345
let reverse = 0

do {
    reverse = reverse * 10 + number % 10
    number = Math.floor(number / 10)

} while (number != 0)

console.log(reverse)

let count = 0
do {
    count++
    number = Math.floor(number / 10)

} while (number != 0)

console.log(count)



// while(number != 0)
// {
//     reverse = reverse*10 + number % 10
//     number = Math.floor(number/10)
// }


// for : calculate total digit in number. 12345 => 5
// let number = 12345
// let count = 0
// // for( ; number != 0 ; )
// // {
// //     count++
// //     number = Math.floor(number / 10)
// // }

// console.log(count)


// while
// let number = 12345
// let reverse = 0
// let last_digit = number % 10
// let first_digit

// 12345
// 54321

// reverse number



// while(number > 10)
// {
//     number = Math.floor(number/10)
//     first_digit = number
// }

// let last_digit1 = reverse % 10

// console.log(first_digit + last_digit)


// while(number != 0)
// {
//     reverse = reverse*10 + number % 10
//     number = Math.floor(number/10)
// }

// console.log(reverse)


// while(number != 0)
// {
//     count++
//     number = Math.floor(number / 10)
// }

// console.log(count)








