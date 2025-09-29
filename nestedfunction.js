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