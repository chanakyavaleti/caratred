var buttonColours=["red", "blue", "green", "yellow"];

var gamePattern=[];
var userClickedPattern=[];

var level=0;

var started=true;

$(document).keypress(function(){
    if (started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started=false;
    }
});

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
    
    // console.log(userClickedpattern);

    playSound(userChosenColour);

    animatePress(userChosenColour)

    checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {

    
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      
      if (userClickedPattern.length === gamePattern.length){


        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");

      $("body").addClass("game-over");

      setTimeout(() => {
        $("body").removeClass("game-over");
      }, 200);

      $("h1").text("Game Over, Press Any Key to Restart");

      startOver();
    }

}


function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");

    setTimeout(() => {
        $("." + currentColour).removeClass("pressed");
    }, 100);
}

function nextSequence() {

    level++;

    $("#level-title").text("level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    
    var randomChosenColour=buttonColours[randomNumber];

     gamePattern.push(randomChosenColour);

      $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

      playSound(randomChosenColour);

      animatePress(randomChosenColour)
     

    
}

function playSound(name){
    var audio=new Audio("game_sounds/"+ name +".mp3");
     audio.play();
}


function startOver(){
    gamePattern=[];
    level=0;
    started=true;
    userClickedPattern=[];
}