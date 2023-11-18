console.clear();

const names = ['Jess' , 'James' , 'Sevi', 'Lily'];
const copiedNames = [...names, "PJP"];  // true copy of arrays
const sortedNames = names.sort();      // changing Original array
console.log(names);
//[ 'James', 'Jess', 'Lily', 'Sevi' ]
console.log(copiedNames);
console.log(sortedNames);
// console.log(...names , "RSR");

// const firstEle = names[0] //James
// const firstLetters = names.map( name =>  name.charAt(0) )
const firstLetters = names.map( (stud) =>  stud[0] )
console.log(firstLetters);

