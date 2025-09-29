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