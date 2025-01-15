// class Car {
//     constructor(marka,model,year) {
//         this.marka = marka ; 
//         this.model = model ;
//         this.year = year ;

//     }
//     displayInfo() {
//         return ` ${this.marka} - ${this.model} - ${this.year} ` ;
//     }
// }
// let carl = new Car ("Toyota" , "Corolla" , 2024 ) ;
// document.getElementById("result").innerText = carl.displayInfo() ;




//  class Person {
//     constructor(name,age,city) {
//         this.name = name ; 
//         this.age= age ;
//          this.city = city ; 
//     } 
// }
// const person1 = new Person("ALPER" , 18 , "New York City") ;
// document.getElementById(
//     "output").innerText = `${person1.name} , ${person1.age} , ${person1.city}` ;


// class Employee {
//     constructor(name , salary) {
//         this.name = name ;
//         this.salary = salary ;
//     }
//     work() {
//         return`${this.name} çalışıyor `
//  ;    }
//  salaryy() {
//     return `${this.salary}`
//  }
// }
// class Manager extends Employee {
//     work() {
//         return `${this.name} , yönetici olarak çalışıyor.`
//     }
// }
// let emp1 = new Employee ("Alper" , 3000)
// let mgr1 = new Manager("Furkan" , 7000 ) ;

// console.log(emp1.work()) ;
// console.log(emp1.salaryy())
// console.log(mgr1.work())
// console.log(mgr1.salaryy())


// class BankAccount {
//     #balance = 0 ; //özel bir değişken
//     constructor(accountNumber) {
//         this.accountNumber = accountNumber ;

//     }
//     deposit(amount) {
//         this.#balance += amount ;
//     }
//     getBalance() {
//         return this.#balance ;
//     }
//     }
//     const account = new BankAccount("123456") ;
//     account.deposit(1000) ;
//     account.deposit(1444) ;
//     account.deposit(5552) ;
//     account.deposit(4580) ;
//     account.deposit(69750) ;
//     console.log(account.getBalance()) ;


// class Vehicle {
//     constructor(brand) {
//         this.brand = brand ;
//     }
//     showBrand() {
//         return `Marka : ${this.brand}` ;
//     }
// }
// class Car extends Vehicle {
//     constructor(brand , model ) {
//         super(brand) ;
//         this.model = model ;
//     }
//     showDetails() {
//         return ` ${this.showBrand()} Model: ${this.model}` ;
//     }
// }

// const car = new Car ("Mercedes" , "C200") ;
// console.log(car.showDetails()) ; // Marka : Mercedes Model : c200 



// class Animal {
//     speak() {
//         return "Bir ses çıkarıyor . " ;
//     }
// }
// class Lion extends Animal {
//     speak() {
//         return "Roaaarrr Rooooaarr!" ;
//     }
// }
// class Dog extends Animal {
//     speak() {
//         return "Hav Hav !" ;
//     }
// }
// const animals = [ new Dog(), new Lion() , new Animal() ] ;
// animals.forEach(animal => console.log(animal.speak())) ;


// class Fruit {}
// class Apple extends Fruit {}
// const apple = new Apple() ;
// console.log(apple instanceof Apple) ;
// console.log(apple instanceof Fruit) ;


class ExtendedArray extends Array {
    average() {
        const sum = this.reduce((acc , value) => acc + value , 0);
        return sum / this.length ;
    }
}

const numbers = new ExtendedArray(10,20,30) ;
console.log(numbers.average()) ;