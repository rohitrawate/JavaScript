
console.clear();
console.log("Destructuring---");

// let person = "John Manuel Lark";

let name = "Rohit Sadashiv Rawate";  // string
const nameArr = name.split(" ");   // Object
const Array1 = [1,23,4,5,6];      //Object
console.log(typeof(nameArr));  
console.log(nameArr);
console.log(...Array1);

//  let personArr = personObj1.split(' ')
 console.log(`${typeof(personArr)} \n $$- Destruct -$$`);

// let firstname =  nameArr[0];
// let lastname  =  nameArr[1];

// console.log(firstname);
// console.log(lastname);
let [ myname , , sirname ] =  nameArr;

console.log(myname);
console.log(sirname);

let person  = {
    first : 'Pramod',
    clg   : 'VIT',
    age   : 25,
}

let {clg ,  age, first}  = person;   // *NOTE : use same names for variables as Keys in key:value pair
// console.log(person.first);
console.log(clg);
console.log(age)

console.log("Creating a new OBJECT ---")

let candidate = 'RohitR';
let Exam = 'Gate'
let date = 4.2

const person1 = 'Pradeep'
const nickname = 'King'
const code = 007

const personObj = {
    person1,
    nickname,
    code
}

console.log(personObj)
