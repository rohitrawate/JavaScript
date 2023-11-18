'use strict';

// let john = 'John';
// function funOuterVar(){
//    alert(john);
//   let message = 'Hello, ' + userName;
//   alert(message);
// }
// function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable
  
//     alert( message );
//   }
  
//   showMessage(); // Hello, I'm JavaScript!
  
//   alert(message ); // <-- Error! The variable is local to the function
  
// --- Outer variables   --- //
let userName = 'John';

function showMessage() {
    let userName = "Bob"; // (1) changed the outer variable
    alert( userName ); // John before the function call

  let message = 'Hello, ' + userName;
  alert(message);
//   otherFunc();
    func();
//  console.log(message)     //** For Node Env */
}

const func = function otherFunc(){
// console.log(userName);
// showMessage();

alert( userName ); // Bob, the value was modified by the function
}
// console.log(userName)
// showMessage();


  function defaultParam(text) {
    // if text is undefined or otherwise falsy, set it to 'empty'
    // calling();
    text = text ?? 'empty coz null/undefined';
    alert(text);
  }

  function calling(){
    defaultParam("Let's Learn JavaScript !");
    // alert("Now empty ##");  // Flow of codes
    defaultParam(null);
    defaultParam();

    // showCount(0); // 0
    // showCount(null); // unknown
    // showCount(); // unknown
    
}
  function showCount(count) {
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
  }
  
  function Pow_ask(  ){
    // alert("Pow called");
    let base = +prompt("Enter a Integer Value (Base)");
    // alert(base);
    let pow = +prompt("Enter a Integer Value (Pow)");
    // alert(pow);
    if (base < 1) {
        alert(`Power ${n} is not supported, use a positive integer`);
      } else {
        alert( get_Pow( base, pow));
      }
  }

  function get_Pow( base, pow){
    // con
    let result = base;
    for(let i=1; i< pow; i++){
        result = result * base;
        console.log(result); 
    }
    alert(` Base : ${base}, Pow : ${pow}, \n result : ${result}`)
    return result;
  }

// Call Back Function

 function showOk(){
    alert(" You Agreed.");
 }

 function showCancel(){
   alert("You canceled the execution.");
 }

 function Callback(){ 
    let question = "Do you agree?";
    let yes = showOk;
    let no = showCancel;

    Fun_As_Arg( question, yes, no);
}

  function Fun_As_Arg( question, yes, no ){ 
    let input = confirm(question);
    if(input)
        yes();
    else 
       no();
  }

  
  


console.log("hihihih");