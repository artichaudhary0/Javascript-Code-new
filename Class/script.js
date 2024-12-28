/*
what is class ? 
It is a blueprint of object.
class is a collection of data members and member function.

what is object ?  
It is a real world entity.

syntax :
class   className {

}

What is constructor ? 
it is a special type of member function.
no return type. 
automatically envoke.

Types of constructor :
1 : Default
2 : Parameterized
3 : copy constructor ()

this keywork : Refers to the object that is currently executing the code.

new keyword : Used to create instance/object of a class or constructor.

Arguments : values passes to to the function or constructor

*/

class Car {
  // parametrized constructor
  constructor(brand, model, year) {
    this.brand = brand; // class mem = local/function/con value
    this.model = model;
    this.year = year;
  }

  startEngine() {
    return `${this.brand} ${this.model} ${this.year} engine started`;
  }
}

let obj = new Car("Toyota", "Corolla", 2020);

console.log(obj.startEngine());

// class ArtiJS4 {
//   // default constructor
//   constructor() {
//     let total_students = 5;
//     this.totalStudents = 5;
//   }
// }

// let obj = new ArtiJS4(); // instance of class :

// console.log(obj.total_students);
