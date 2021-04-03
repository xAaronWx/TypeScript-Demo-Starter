// class Person {
//   firstName: string;
//   lastName: string;
// }
// let phil: Person = new Person();
// phil.firstName = "Phil";
// phil.lastName = "Donahue";
// let someVariableName: Person = new Person();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName);
    };
    Person.prototype.sayHelloToFullname = function () {
        console.log("Hello", this.firstName, this.lastName);
    };
    return Person;
}());
var kenn = new Person();
kenn.firstName = "Kenn";
kenn.sayHello();
var holler = new Person();
holler.firstName = "Sheriff";
holler.lastName = "Holler";
holler.sayHelloToFullname();
//# sourceMappingURL=03-classes.js.map