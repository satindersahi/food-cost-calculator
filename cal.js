

var input = document.getElementById('input').value;

// this function is to get food price of one unit from a box 
    var x; 
    var input2;
    var input3;
        
      function ans(){
          var input1 = document.getElementById('input1').value;
          input2 = document.getElementById('input2').value;
         input3 = document.getElementById('input3').value;
          
          {
               document.getElementById('result').value = ((input1/input2)*input3);
      }
      
      }
      var x;
      function addNumbers()
      {
              var val1 = parseInt(document.getElementById("value1").value);
              var val2 = parseInt(document.getElementById("value2").value);
              var val3 = parseInt(document.getElementById("value3").value);
              {
              x = document.getElementById("answer").value = val1 + val2 + val3;
              }
    }
     
    
    
      

      //this function helps to find the labour cost / by providing minutes and hourly wage.

      var y;     // var y outside imp if declaring y = something in function otherwise it wouldn't work 
      function labourAnswer(){
          var input4 = document.getElementById('input4').value;
          var input5 = document.getElementById('input5').value;
          {
              y = document.getElementById('labourcst').value = (input4*(input5/60));
          } 
           }


        //this function do the total calculation and profit in to describe the value of dish for selling.
var z;
      function price(){
        
          var input6 = document.getElementById('input6').value;
          
          {
             z = document.getElementById('sellingPrice').value = (x+y) ; 
            
              }
              /* the method below is too open a new window in small size like pop and give details of calculation.
              you can even save more fies in same new window without cancelling from top*/
             {
                var myWindow = window.open("", "MsgWindow", "width=400, height=300");
            myWindow.document.write ("<b>After calculating all the numbers, We think the best selling price for this Item is $" + z + " with " + input6 + "% profit.<br><br> ");
            
            }
            }
 
            
//             // just to maniuplate and add some text in file. 
// Creating a new div element 
var newDiv = document.createElement("div");
 
// Creating a text node 
var newContent = document.createTextNode("we can also use this  calculator for any type of unit pricing like floor one piece or tiles for one peice.");
 
// Adding the text node to the newly created div
newDiv.appendChild(newContent);
 
// Adding the newly created element and its content into the DOM 
var currentDiv = document.getElementById("h2"); 
document.body.insertBefore(newDiv, currentDiv);

// add contact form to html by javascript libraries.
window.onload = function() {
    Formio.createForm(document.getElementById('formio'), 'https://examples.form.io/example');
  };


  var x = document.body;
var color = ["lightblue", "cadetblue", "orange"];
setInterval(function() {
   for(let y = 0; y < 3; y++){
    x.style.backgroundColor = color[Math.floor(Math.random() * 3)];  
  }
}, 3000) 
