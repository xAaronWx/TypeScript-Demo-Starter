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
