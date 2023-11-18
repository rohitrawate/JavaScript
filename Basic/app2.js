console.log("Showing App2.js");

var pointer = 0;
function myFunction(){
    var ele = document.getElementById('anchor');
    if(ele.innerHTML == "GitHub - RohitRawate")
    // if(pointer == 0)
    {
        ele.innerHTML = "LinkedIN";
        ele.href = "https://www.linkedin.com/in/rohitrawate/";
    
        // pointer = 1;
    }
    else{
        ele.innerHTML = "GitHub - RohitRawate";
        ele.href = "https://github.com/rohitrawate";
        // pointer = 0;
    }
}

// let generateBtn = document.getElementById('anchor');
