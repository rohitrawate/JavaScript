
let practise = "Practise";

function msg(){  
    alert(`Hello JavaScript ${ typeof Math} heheh`);  
    // let ans = typeof msg;
    // document.getElementById('funtype').innerHTML = `type of funtype() -> ${practise}`;
}

// setInterval(function() {
//     let ans = typeof practise;
//     document.getElementById('funtype').innerHTML = `type of funtype() -> ${ans}`;
//   }, 2000);

function typefun() {
    let base = document.getElementById("demo");
    // document.getElementById("body").innerHTML = 'New body ';
    // base.innerHTML =  "type of null " + typeof null ;   // object 
    // base.createElement("br");
    document.body.appendChild(document.createElement('h1'));
    base.innerHTML = "type of typefun : " + typeof (typefun);  // object
    // alert(`Hello this is ${practise} Session.`);

    let counter = 2;
    // counter++;
    alert( "Postfix var++ returns oldvalue \n: " + 2 * counter++ ); // 2, because counter++ returns the "old" value
    // alert( "  -9n  " - 5);  //NaN
    // alert( null === undefined );     // == -> true   === -> false ( diff  types)
    // alert( null > 0 );  // (1) false
    // alert( null == 0 ); // (2) false
    // alert( null >= 0 ); // (3) true
    // alert(  "2" > "15");    // Checks single charas first one by one -.- `2 > 1` = true
    alert(undefined && null && 8);   // AND(&&) Last vaule if all previous are true else first null(false) value
    alert( null || 4 || 1);   //  OR(||) First true value

}

function forLoop() {
let i = 0; // we have i already declared and assigned

    for (; i < 3; i++) { // no need for "begin"
    alert( i ); // 0, 1, 2
    }

    for (; i < 3;) {
        alert( i++ );
    }
}

function checkNum(){
    // let x = "2";
    // let  Num = +x;
    // alert(`Data Type of ${x} : `+  typeof x);
    // alert(`Data Type of ${Num} : `+ typeof (Num));

    let x = prompt("Enter n Number (String)");
    alert(typeof x);
    let num = +x;
    alert(`Changed to ${typeof(num)}`);

    var browserName = navigator.userAgent.match(/(Chrome|Firefox|Safari|Opera|Edge)/i);
    if(browserName[0] == 'Edge') {
        alert("You've got the Edge!");
      } else if (browserName[0] == 'Chrome'
       || browserName[0] == 'Firefox'
       || browserName[0] == 'Safari'
       || browserName[0] == 'Opera') {
        alert( `Okay we support these browsers too ${browserName[0]}` );
      } else {
        alert( 'We hope that this page looks ok!' );
      }

    // switch (browserName) {     // always checks for strict equality 
    //     case 'Edge':
    //       alert( "You've got the Edge!" );
    //       break;
      
    //     case 'Chrome':
    //     case 'Firefox':
    //     case 'Safari':
    //     case 'Opera':
    //       alert( 'Okay we support these browsers too' );
    //       break;
      
    //     default:
    //       alert( 'We hope that this page looks ok!' );
    //   }
}


// FunOuterVar(); // Hello, John
