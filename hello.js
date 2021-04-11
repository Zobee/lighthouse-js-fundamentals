// //Function declaration
// const sayHello = function(){
//   console.log("Hello, world");
// }

// //Function invocation (call)
// sayHello()

const sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

//Logs 'hello, <name> to the console, and returns undefined
const sayHelloToConsole = function(name){
  console.log("hello, "+name)
}
sayHelloToConsole('John');

//Returns a string "hello, <name>", but nothing is output to the console.
const returnSayHello = function(name){
  return "hello, "+name
}

//Stores the return value in a variable for use elsewhere
const greeting = returnSayHello('John');
console.log(greeting)