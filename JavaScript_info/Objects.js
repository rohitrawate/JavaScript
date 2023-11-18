"use strict";

let myFunc = () => {
    // alert(`Hello welcome to the site`);

    let user = { 
        name: "Rohit",
        age: 23,
        key : "Little birds",
        "likes birds" : true,
    };
    // alert( `Hello, ${user} `); // : Type of ${typeof user}`);
    let type = typeof(user);
    // delete user.age;

    let bool = "likes birds";
    alert( user.age +"\n" + user[bool] +"\n" + user.name)  // age -> undefined
}

let IterationOrder = () => {

    // let codes = {
    //     "49": "Germany",
    //     "41": "Switzerland",
    //     "44": "Great Britain",
    //     // ..,
    //     "1": "USA"
    // };
    let codes = {
        "+49": "Germany",
        "+41": "Switzerland",
        "+44": "Great Britain",
        // ..,
        "+1": "USA"
      };

    let user = {
        name: "John",
        surname: "Smith"
      };
      user.age = 25; // add one more
        
    for (let code in codes) {
      alert(+code); // 1, 41, 44, 49   with '+' added both to keys n in for loop it iterates in as added  sequence
    }

    user.name = "Pete";
    // delete user.surname;
    for (const prop in user) {
        alert( prop + " : "+ user[prop] ); // name, surname, age
    };
    let x = 'sss' in user;   // false 
    let y = 'name' in user;    // true
    alert(' x : '+x + " y: "+y)
}

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };

let ObjIteration = () => {
    let ans =prompt("This Obj Itera Function Works" , "Yes");

    for( let prop in user){
        alert( prop +" : "+ user[prop]);
        // alert( );
    }
     let num = 90;
     alert(" typeof check : "+typeof(num));  // small case number
}

let cloneObj = () => {
    alert("Hello + ");
    let obj = {
        name : "Rohit",
        age : 23,
        life : "nope"
    }
    alert( JSON.stringify(Object.getOwnPropertyDescriptor( user, "name" )))
    let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

    const clone_props = Object.getOwnPropertyDescriptors(clone )
    for( let props in clone) {
        alert(  JSON.stringify(clone_props[props]));
    }
    // alert( JSON.stringify(clone_props["age"], null, 2 ) );
}

