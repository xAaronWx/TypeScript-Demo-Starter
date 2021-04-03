// class Person {
//   firstName: string;
//   lastName: string;
// }

// let phil: Person = new Person();

// phil.firstName = "Phil";
// phil.lastName = "Donahue";

// let someVariableName: Person = new Person();

class Person {
  firstName: string;
  lastName: string;

  sayHello() {
    console.log("Hello", this.firstName);
  }

  sayHelloToFullname() {
    console.log("Hello", this.firstName, this.lastName);
  }
}

let kenn: Person = new Person();
kenn.firstName = "Kenn";
kenn.sayHello();

let holler: Person = new Person();
holler.firstName = "Sheriff";
holler.lastName = "Holler";
holler.sayHelloToFullname();

// Method with constructor
class Game {
  constructor(name: string, maker: string) {
    this.gameMaker = maker;
  }
  gameName: string;
  gameMaker: string;
}

let battleship: Game = new Game("Battleship", "Hasbro");

//Method without constructor
class GameWithoutConstructor {
  gameName: string;
  gameMaker: string;
}

let monopoly: GameWithoutConstructor = new GameWithoutConstructor();

monopoly.gameName = "Monopoly";
monopoly.gameMaker = "Hasbro";

class Vehicle {
  type: string;
  make: string;
  model: string;
  manufactureYear: number;
  runs: boolean;
  topSpeed: number;
}

class Automobile extends Vehicle {
  isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";

class Motorcycle extends Vehicle {
  easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

class Animal {
  legNum: number;
  carnivore: boolean;
  speed: number;
}

class Bear extends Animal {
  hibernates: boolean;
}

class Tiger extends Animal {
  doesKungFu: boolean;
}

let myBear: Bear = new Bear();
myBear.hibernates = true;
myBear.legNum = 4;

let myTiger: Tiger = new Tiger();
myTiger.doesKungFu = true;
myTiger.speed = 60;

// class Store {
//   constructor(name: string, city: string) {
//     this.name = name;
//     this.city = city;
//   }
//   name: string;
//   city: string;
// }

// let ikea: Store = new Store("Ikea", "Fishers");

class Store {
  constructor(public name: string, public city: string) {}
}

let ikea: Store = new Store("Ikea", "Fishers");

class Employee extends Person {
  private _salary: number;
  getSalary(): string {
    return this._salary.toString();
  }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
let salaryResult: string = newEmployee.getSalary();
console.log("This salary is", salaryResult);
