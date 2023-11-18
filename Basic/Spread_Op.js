console.clear()

console.log("Hello");

let Arr1 = [1,2,3,4,5];
// let new1 = Arr1;     // Reference changes Array On All Variables
// new1.push(99);
let newA = [...Arr1, 9,0,];
// let name = 'Rohit';
// let num = 909;
// console.log(typeof(name));
// console.log(typeof(num));

console.log(typeof(Arr1));

console.log(...Arr1);
console.log(...newA);
// console.log(...new1); 


// Concating Array
console.log("Concating Arrays ...");
let arr2 = [12, 13, 14, 15];
let arr3 = [99, 98 , 97];

let arr_con = arr3.concat(arr2,76, 44, 77);
let arr_dot =  [00 , ...arr3 , ...arr2 ,99]; 
console.log(arr_dot);
console.log(arr_con);

// ----  Concating Objects  ----//  
console.log("Concating Objects ...");

let  Obj1 = {
      name : 'Rohit',
      age : '22'
}

let Obj2 = {
     Course : 'JavaScript'
}

let Obj3  =  { ...Obj1, ...Obj2};

console.log(Obj3)

