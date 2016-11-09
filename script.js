/*
      Project Name:  Recipe Display Application
      
      Author: Rose Pennington
      
      Date:   November 2016 

      Filename: script.js 
*/

// displays the next element after teh current target
function display (event) {
    $(event.currentTarget).next().fadeIn("slow");
}// end of display

// attach event listener to h3 elements to invoke display 
    $("h3").click(display); 