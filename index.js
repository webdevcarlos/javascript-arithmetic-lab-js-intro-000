var add = function add(){
}
var subtract = function subtract(){
}
var multiply = function multiply(){
}
var divide = function divide(){
}
var number = 10

function add5() {
  number += 5
}

function divideBy3() {
  number /= 3
}

divideBy3()

console.log(number)

add5()

console.log(number)





var increment = function increment(n){
  return n += 1;
}
increment();

var decrement = function decrement(n){
  return n -=1;
}
decrement();

var makeInt = function makeInt(string){
  return parseInt(string,10);
}
makeInt();

var preserveDecimal = function preserveDecimal(string){
  return parseFloat(string);
}
preserveDecimal();
