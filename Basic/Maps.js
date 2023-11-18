//  Array Maps()
console.clear();

const Arr = [1,2,3,4,5];
let newArr  = [];

// for(i=0 ; i<Arr.length; i++)
// {
//     newArr.push(Arr[i]*2);
// }
//  Arrow Functions
const  arrowFun = () => {
     console.log('This Is Arrow Function');
}
// arrowFun()
// console.log(arrowFun());
const doubleValues = (item) => {
     return item*2;
}

for(i=0 ; i< Arr.length; i++)
{
    newArr.push(doubleValues(Arr[i]));
    //  console.log(`Iterator : ${ans}`);    
    //  return ans; 
}

console.log(Arr)
console.log(newArr)

const maparr = Arr.map( (ele) => {
    return ele+10;
});
console.log(maparr)
console.log(`"Add 10+ ${maparr}" `)

// ----------
const characters = [
    {
        name   : 'Rohit Sadashiv Rawate',
        hobby  : 'Music, Sketch',
        height :  183, 
        genfer : 'male'

    },
    {
        name   : 'Albert Einstein',
        hobby  : 'Cooking',
        height : 175,
        gender : 'male'
    },
    {
        name  : 'John Parker',
        hobby : 'Cricket , Football',
        height : 180,
        gender : 'male'
    } 
];

console.log(characters)

const names =  characters.map(
    (actor) =>   actor.name,      // `${actor.name} `   
    //  console.log( actor.name ),
    //   return actor.name
)
    console.log(`Actors : ${names} `);  // Actors : Rohit Rawate,Albert Einstein,John Parker 
 
      const heights = characters.map( (actors) => actors.height)  // ONE liner
    // const heights = characters.map(
    //     (actor) => {
    //         // console.log( actor.height );
    //         return actor.height;
    //     }
    // )
    console.log(...heights);

    const minifiedRecords = characters.map(
        (character) => (
           {  name :character.name ,
                height : character.height 
            })
    )
    console.log(minifiedRecords)
   // Get all the First names of all Charaters

   const Fname = characters.map( 
    actors =>  actors.name.split(" ")[0]  );

    const Fname1 = characters.map(
        (actors) => 
            (actors.hobby.split(" ")[0])
        
    );

    const afun = () => 
        console.log( `-> () called :  ${hey}`)
        // console.log( `-> () called : s`)
        
    
    let hey ='Hey Rohit';
     afun();
   console.log(Fname);
   console.log(Fname1);