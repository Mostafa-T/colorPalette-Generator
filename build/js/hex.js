/*
  1.0) Color Generator Elements from HTML 
  2.0) creating the color generator function infinite colors
*/
const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,"A" ,"B", "C", "E", "F"];
const colorSpan = document.querySelector('.random-color');
const colorGeneratorBtn = document.getElementById('clickMe');
const copyColor = document.getElementById('copyMe');
const copyMesssage = document.querySelector('.copy-message');
  //add evenlistener for the click function

  colorGeneratorBtn.addEventListener('click', function() {
    //generates random color
    let hexSymbol = '#';

    for(let i = 0; i < 6; i++) {

      hexSymbol += hexCode[randomColorGenerator()];
    }
    //changes the background color
    document.body.style.backgroundColor = hexSymbol;
    //changes the text content
    colorSpan.textContent = hexSymbol;
  });
  function randomColorGenerator () {
    return Math.floor(Math.random() * hexCode.length);
  }
  
  //  Copy color function
  
  copyColor.addEventListener('click', function() {
    //select and copy the span text
    window.navigator.clipboard.writeText(colorSpan.textContent);
    
    //appear copy message
    copyMesssage.classList.add('message-active');
    
    // set timeOut for the message
    window.setTimeout(function() {
    copyMesssage.classList.remove('message-active');

    }, 1000)

  })