/*
  1.0) Color Generator Elements from HTML 
  2.0) creating the color generator function
*/
const colorList = ['red', 'blue' , 'green', 'gold', 'purple'];
const colorSpan = document.querySelector('.random-color');
const colorGeneratorBtn = document.getElementById('clickMe');

  //add evenlistener for the click function

  colorGeneratorBtn.addEventListener('click', function() {
    //generates random color
    const colorRandom = Math.floor(Math.random() * colorList.length);
    //changes the background color
    document.body.style.backgroundColor = colorList[colorRandom];
    //changes the text content
    colorSpan.textContent = colorList[colorRandom];
  });
 