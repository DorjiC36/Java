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