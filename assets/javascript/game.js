// initialize variables
let totalWins = 0;
let totalLosses = 0;
let userPoints = 0;
let goalPoints = null;
let lives = 9;

let goal_MAX = 99;
let goal_MIN = 19;
let kitten_MAX = 19;
let kitten_MIN = 1;


// Functions
  function initializeGame(){
    // 0) reset userPoints & update view
    userPoints= 0;
    lives = 9;

    // 1.) get a random number for goal Points
    goalPoints = Math.floor(Math.random() * (goal_MAX - goal_MIN) + goal_MIN);
      //1a) Display this goal points
      $("#goalPoints").html(goalPoints);

    // 2.) Select all the kittens
    let all_kittens = $(".kitten");

    // 3.) loop through each one kitten in the array
    // assigning a random data value to each one.
    for (var i=0; i < all_kittens.length; i++){
      let kittenPoints = Math.floor(Math.random() * (kitten_MAX - kitten_MIN) + kitten_MIN);
      $(all_kittens[i]).data("points", kittenPoints);
    }
    //4) updateView
    updateView();
  }

  function updateView(){
    $("#userPoints").html(userPoints);
    $("#totalWins").html(totalWins);
    $("#totalLosses").html(totalLosses);
    $("#lives").html(lives);
  }

  function displayMessage(message){
    $("#messages").html(message);
  }

// ---- Event listeners ----
$(document).ready(function(){
  initializeGame();
  displayMessage("Let's play!");
});

$(".kitten").on("click", function(){
  //0) subtract the lives
  lives --;
  // 1) get the points associated with the cat & add to the users points
  userPoints += $(this).data("points");
  //2) update the display
  updateView();
  //3) check if user won OR user lost OR game is not over ...
  if(userPoints < goalPoints && lives > 0){
    //3a) if game is not over, return!
    return false;
  } else if(userPoints === goalPoints && lives >0){
    //3b) if user won --> increment wins, display they won, & reset game
    displayMessage("You won");
    totalWins ++;
  } else{
    //3c) if user lost --> increment losses, display they lost & reset game
    displayMessage("You lost");
    totalLosses ++;
  }
 // 4) reset game
 initializeGame();
 displayMessage("New Game");
})


// ---- TESTING ----
// initializeGame();

