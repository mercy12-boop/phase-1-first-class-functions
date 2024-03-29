// CALLBACK FUNCTIONS
function receivesAFunction(sayHello) {
  sayHello();
}
function sayHello() {
  console.log("Hello!");
}
receivesAFunction(sayHello);

function returnsANamedFunction() {
  return sayHello;
}
function returnsAnAnonymousFunction() {
  return function () {
    console.log("So fun!");
  };
}
