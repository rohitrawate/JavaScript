'use strict';

const arr = [1,2,3,4,5]; 

let fun = ( args) => {
    args.forEach(element => {
        console.log( element * 2);
    });
}

let  triple = (... args) => {
    for (const key in args) {
        // if (Object.hasOwnProperty.call(args, key)) {
            const element = args[key];
            // console.log(key);  // Returns Index
            console.log(element);
        // }
    }
    // console.log( );
}

fun(arr);
triple(19,27,31,47,91);

// Clone Object 

let user = {
    name : "Rohit",
    age  : 23,
    Life : "Nope",
}

let clone = {};
Object.assign( clone , user );             // ***--- Asign Object  ---***

for( let props in user){
    console.log( user[props] + '\\' + clone[props]);
}
console.log(Object.getOwnPropertyDescriptors(clone));  // All Flags by Default - `True`

Object.defineProperty( clone , "age" ,{ 
    value : 24
});

console.warn(Object.getOwnPropertyDescriptor( clone, 'age'));

Object.defineProperties( clone, {
    name : {value :"Pramod", writable : true},
    age : {value : 26},
    Life : { value : "Ok"},
} )
console.warn(Object.getOwnPropertyDescriptors( clone));

