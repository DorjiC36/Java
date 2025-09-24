// 1. if-else //
const temp = 25; // You can change this value to test different outputs
// Check the temperature and respond accordingly
if (temp > 30) { // Hot if temperature is above 30
   console.log("It's hot.");
} else if (temp >= 20) { // Warm if temperature is between 20 and 30
   console.log("It's warm.");
} else { // Cold if temperature is below 20
   console.log("It's cold.");
}















//10.function expressions//
const sum = function (x,y)
{
    return x+y;
};
let z = sum(2,3);
console.log(z)

//11.arrow function//
const divide = (x,y) => {
    let res = x/y ;
    return res;
}
console.log(divide(10,5));

//12.callback function_window//

function showData(name,amt){
   alert ("Hello"+ name + "\n You are saving" + amt)
}
function getData(callback) {
   var name = promt ("Welcome! \n What is your name?");
   var amt = promt ("Enter the amount you wish to save.");
   callback(name,amt);
}
getData(showData);

//13.callback function_nodesjs//
function showData(name, amt){
   console.log("Hello"+ name+ "\n You are saving"+amt);

}
function getData (callback){
   const promt = require ("promt-sync")();
   var name = promt ("Welcome!\n What is your name?");
   var amt = promt("Enter the amount you wish to save");
   callback(name,amt);
}
getData (showData);

//14. nested function//
function outerFun(a){
   console.log("The value of a is:"+a);
   function innerFun(b){
      console.log("The value of b is:" + b);
      return a + b;
   }
   return innerFun;
}
const addTen = outerFun(10); //addTen is now innerFun with a =10
console.log(addTen(5)); //OUtput 15 (10 + 5)