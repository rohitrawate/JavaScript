// import "./styles.css";

document.getElementById("app").innerHTML = 
`
"<h1>Hello Vanilla!</h1><div>  We use the same configuration as Parcel to bundle this sandbox, you can find more  info about Parcel   <a href= "http://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.</div>"
`
;

var a = 1;
var b = "1";

var result1 = `${a == b}`;
var result2 = `${a === b}`;
var Nan = typeof NaN;

document.getElementById(
  "hey"
).innerHTML = ` <h1> Heyyy</h1>  <p>${result1} +"\n"+ ${result2}</p>  <p> ${Nan}</p>`;

var arr = [
  1,
  2,
  "hello",
  function hey() {
    document.getElementById("ele").innerHTML = "This is fun in Array";
    console.log("This is fun in Array");
    return console.log("Suuiii");
  }
];

// arr.forEach(function (e) {
//   console.log(e);
// });
document.getElementById(
  "array"
).innerHTML = `<h2> Noice</h2> <p> ${arr[3]()}</p>`;
// document.getElementsByClassName(".obj").innerHTML = `<h2> objj</h2>`;

var dog = {
  name: "Moti",
  breed: "desi",
  barks: function () {
    console.log("woof woof");
    return "done";
  }
};

console.log(typeof dog); // Object
console.log(797899);
console.log(dog.name);
console.log();

var dogs = ["Fido", "Buzo", "Oscar"];
dogs.length = 2;
console.log(dogs); // ["Fido" , "Buzo"]

console.log("------- Hoisting ---------");

function abc() {
  let x = 9010;
  // let a;
  console.log(x);
  var b = 20;
}
// console.log(x); // referenceError: x is not defined
abc();
let hit = document.getElementsByClassName(".obj");
 hit.innerHTML = "fffffff";
