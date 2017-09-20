$(document).ready(function(){
  var Random=Math.floor(Math.random()*101+19)


// Select a random number at the start of the game

  $('#randomNumber').text(Random);

// Appending random number to the randomNumber id in the html doc

  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)

// Random numbers for each tile, random number between 1 - 12

  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

//  Decare variables for scores

$('#numberWins').text(wins);
$('#numberLosses').text(losses);

//Reset the game function

function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      }


//Add wins to the userTotal

function yay(){
alert("Woot! Woot! You won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}


//Add losses to the userTotal

function loser(){
alert ("Bummer! You lost!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}



//New tiles

  $('#grange').on('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
 
 //Win/Lose conditions

        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#grove').on('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#pivot').on('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

//Win/Lose conditions

          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#terrain').on('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 