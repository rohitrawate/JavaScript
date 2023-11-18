console.log("Hello")
var count = document.getElementById('countdown');

let countValue = count.innerHTML;
console.log(countValue);

var bgImage = document.getElementById('bg-img');

setInterval(() => {
    countValue = countValue >0 ? countValue - 1 : 0  ;
    if(countValue == 0 )
      countValue = 10;

      count.innerHTML = countValue;
   
      var BGimgPath = countValue % 2 ==0 ? document.getElementById('bg-img').style.backgroundImage="url('./selfie.jpg')" : 
      document.getElementById('bg-img').style.backgroundImage = "url('./Bros.jpg')";
      
      //   bgImage.src = BGimgPath;
        //    bgImage.className = 'newClass';
}, 1500);


