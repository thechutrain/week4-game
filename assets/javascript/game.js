// initialize variables
let totalWins = 0;
let totalLosses = 0;
let userPoints = 0;
let goalPoints = null;
let lives = 9;

let goal_MAX = 67;
let goal_MIN = 19;
let kitten_MAX = 12;
let kitten_MIN = 1;

// cat audio files
var sadCat_audio = new Audio("./assets/sounds/Sad-cat.mp3");
var hissingCat_audio = new Audio("./assets/sounds/Cat-hissing.mp3");
var meowCat_1_audio = new Audio("./assets/sounds/Cat-meow.mp3");
var meowCat_2_audio = new Audio("./assets/sounds/Cat-meow-2.mp3");


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
  // sadCat_audio.play();

});

$(".kitten").on("click", function(){
  lives --;
  // 1) get the points associated with the cat & add to the users points
  userPoints += $(this).data("points");
  //2) update the display
  updateView();
  //3) check if user won OR user lost OR game is not over ...
  if(userPoints < goalPoints && lives >= 0){
    //3a) if game is not over, return!
    // normal meow:
    meowCat_1_audio.play();
    //3b) subtract a life
    return false;
  } else if(userPoints === goalPoints && lives >= 0){
    //3b) if user won --> increment wins, display they won, & reset game
    displayMessage("You won");
    meowCat_2_audio.play();
    totalWins ++;
  } else{
    //3c) if user lost --> increment losses, display they lost & reset game
    displayMessage("You lost");
    sadCat_audio.play();
    totalLosses ++;
  }
 // 4) reset game
 initializeGame();
 // displayMessage("New Game");
})


// ---- TESTING ----
// initializeGame();

