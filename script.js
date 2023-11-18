console.log("JS  loaded");

function createParagraph() {
    const para = document.createElement('p');
    para.textContent = "You clicked the button!\n <p> Element created";
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll('button');
  // const buttons = document.getElementById('button');
  
  // for (const button of buttons) {
  //   button.addEventListener('click', createParagraph);
  // }

  myName = 'Chris';
  myAge = '22';

  var countdownEle = document.getElementById('countdown');
  console.log(countdownEle);

   var initialCountdownVale = countdownEle.innerHTML;
   console.log(initialCountdownVale);

   var bgImageEle = document.getElementById('bg-img');
  //  console.log(bgImageEle.src);

   setInterval(() => {
     initialCountdownVale = 
          initialCountdownVale >0 ? 
          initialCountdownVale-1 : 0;
      // if(initialCountdownVale == 0)
        // initialCountdownVale = 10;    

     countdownEle.innerHTML = initialCountdownVale;

      var BGimgPath = initialCountdownVale % 2 === 0 ? document.getElementById('bg-imag').style.backgroundImage="url('./Bros.jpg')" : 
       document.getElementById('bg-imag').style.backgroundImage = "url('./selfie.jpg')";

      //  bgImageEle.src =  BGimgPath;
      //  console.log(bgImageEle);
   }, 1000);