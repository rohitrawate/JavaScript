console.clear();

// Cannot read props of Undefined 
const printNameGreeting = (person) => {
    // console.log(person.name);
    console.log(person?.name);   // Invalid
}
// console.log(printNameGreeting( {  name : 'qWERTY'}));
console.log(printNameGreeting( ));
 //TypeError: Cannot read properties of undefined (reading 'name')


// const printNameGreeting1 = (person) => {
//     if(person){
//        return console.log(person.name);
//     }
//     else{
//         return console.log('Invalid Object passed')
//     }
// }

 const printNameGreeting2 = (actor) => {
    if(!actor)
     {
        return console.log('Invalid Actor name ');
     }
     console.log(actor?.name)
 }
// console.log(printNameGreeting1({  name :'Rohit' }));
console.log(printNameGreeting2( ));
console.log(printNameGreeting2( { name :"James" } ));

// -- Not Understanding Asynchronous Code --  //

// ******  Timing Might not be what you expect *******

console.log( 'Asynchronous Code');
//
console.log("1");
    setTimeout( () => {
     console.log("2");      // Delayed by 2 mili sec
     } , 3  )
    setTimeout(() => {
     console.log("3");     // Delayed by 0 mili Sec
    }, 0);
 console.log("4")
     //*/

// -- ***  Missing Error handling *** -- //
  /* // Error not handled without catch block
let samplePromise = new Promise(function(resolve, reject) {
    setTimeout( () => {
        // resolve("It worked");
        reject("It worked");
    } , 000);
});

  samplePromise.then(data => {
    console.log(data);
  })
      */
  // ********  Error Handling ********* //
  console.log('**** Error Handling ***');        
  let samplePromise1 = new Promise( function( resolve ,reject) {
    setTimeout( () => {
        resolve("It worked in handling"); 
    }, 1000);
  });

  samplePromise1.then( (data) =>  {
    console.log(data);        // promise Method to handle
           //// promise Method to handle
  }).catch( err => {
    console.log(err);
  })