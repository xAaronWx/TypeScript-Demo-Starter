// function addNumbers(numOne: number, numTwo: number) {
//   return numOne + numTwo;
// }
// //1 - works
// addNumbers(1, 2);
// //2 - errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");
// function combineNames(first: string, last: string) {
//   return ` Welcome ${first} ${last}`;
// }
// combineNames("Todd", "Burns");
// combineNames("Dan", 4);
// function sayHello(name: string): string {
//   return name;
// }
// sayHello("Kenn");
// sayHello(1);
function threeParams(first, last, middle) {
    if (middle !== "") {
        return "Hello " + first + " " + middle + " " + last;
    }
    else {
        return "Hi " + first + " " + last;
    }
}
threeParams("Aaron", "White");
console.log(threeParams);
threeParams("Kyle", "Howard", "Tan");
console.log(threeParams);
//# sourceMappingURL=02-functions.js.map