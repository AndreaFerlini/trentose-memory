/* your code should go here */

var tmp= '<li id="numb" class="done"> <h3>value</h3> </li> ' 
var tmp1;
var tmp2;


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

$(document).ready(function(){
    for (var i=0; i<10; i++){
        tmp1=tmp.replace("numb", i);
        tmp2=tmp1.replace("value", data[i]);
        $(".cards").append(tmp2);
    }
    
    $(".opt-start").click(function(){
            $(".done").addClass("hidden");
    });
    
    
  
});



/*
<li id="0" class="hidden">
          <h3>1</h3>         
        </li> 
        <li id="1" class="done">
          <h3>2</h3>
        </li>    
        <li id="2" class="done">
          <h3>3</h3>
        </li>               
        <li id="3" class="hidden">
          <h3>4</h3>
        </li> 
*/






