console.log('Animation');

var count = document.getElementById('count');
var bg = document.getElementById('image');

let countValue = count.innerHTML;
// console.log(countValue);

// var bg = document.getElementsByClassName('body');


var interval = setInterval( () => {
    countValue = countValue > 0 ? countValue - 1 : 0 ;
    // if(countValue == 0)
    //   countValue = 10;
    
     count.innerHTML = countValue;
     console.log(count.innerHTML);

     count.style.fontSize  =  countValue * 100 + "px" ; 

     let BGcolor =  document.getElementsByClassName('body');
    //   BGcolor.style.{}
    //  bg.style.backgroundSize = countValue * 100 + 450 + 'px' ;
     bg.style.backgroundSize = countValue * 10 + "%" ;
    //  bg.style.background.length = '80%';

    if(countValue <= 0)
    clearInterval(interval);
      
}, 1000)