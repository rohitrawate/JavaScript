console.log("Loops in JS");

const arr = [10,20,30,40,50,60,70];

let pointer = 1;
function myfunction(){
    let ele = document.getElementById('demo');
   if(pointer == 1){
     ele.innerHTML = "";
    const nums = arr.forEach(function(element) {
         console.log(element);
         ele.innerHTML = ele.innerHTML+"<br/>"+element;
    });
     ele.style="background-color: Yellow";
     pointer = 0;
   }

   else{
    // var ele = document.getElementById('demo');
    ele.innerHTML = "Trying Out The Loop Through";
    // ele.style.blockSize("12px");
    ele.style="background-color: LightGray; font-weight: bold;";
    pointer = 1;
   }
}

let num1 = [72,18,59,36,59]
let c =0;

//  ---- while() Loops
// while( c < num1.length)
// {
//   // document.write(num1[c]);
//   console.log(num1[c]);
//   c++;
// }
// let j=0;
// do{
//   console.log(j);
//   j++;
// }while( j< 7);

console.log("*******");
console.log(num1.length);
console.log(num1.pop()); // Removes Last Element
num1.push("Pradeep");
// num1.shift();  // removes ele from the Front
num1.unshift("Rohit");  // adds ele from 1st
const newLen = num1.unshift("Pramod");
console.log(newLen);   // 7
console.log(num1);