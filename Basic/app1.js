
console.log("Rohit")
console.warn("THIS is a Warning")
console.error("Manual error")

function change() {
    // alert("sdxsdxswx")
document.getElementById("firstcontainer").innerHTML = "Hello World";
}

function msg(){  
    alert("Hello JavaScript");  
   }  

function myFunction() {
    document.getElementById("demo").innerHTML = "";
  }

function NaNfun() {
  const collection = document.getElementsByTagName("h3");
  for (let i = 0; i < collection.length; i++) {
    // collection[i].style.backgroundColor = "red";
    const modify = document.getElementById("NaN");
    modify.innerHTML = "NaN ** 0 = "+ NaN ** 0 ;
    modify.style.border = "7px solid #0F0";
  }
  //   let apples = "2";
  //   let oranges = "3";
  // alert( +apples + +oranges ); // 5 alert( Number(apples) + Number(oranges) ); // 5

  let counter = 2;
  let a = counter++;
  alert(a);
}  

//    document.write("Doc . Write");
//    document.getElementsByTagName('h1')[0].style.fontSize = "990px";




// const scriptHTML = `<script>alert("Alert from innerHTML");</script>`;
// const main = document.getElementById('main');

// main.innerHTML = scriptHTML;
