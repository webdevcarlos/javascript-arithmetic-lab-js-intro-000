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
