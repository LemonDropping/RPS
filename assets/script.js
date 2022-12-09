var wins = 0;
var tie = 0;
var losses = 0;

var options = ["R", "P", "S"];

var playgame = function () {
    
    var userChoice = window.prompt("Enter R, P, or S");
    
    if (!userChoice) {
      return;
    }
    
    userChoice = userChoice.toUpperCase();
    
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert("The computer chose " + computerChoice);

    if (userChoice === computerChoice) {
        tie++;
        window.alert("It's a tie mothafuckas");
    } else if (
         (userChoice === "R" && computerChoice === "S") ||
         (userChoice === "P" && computerChoice === "R") ||
         (userChoice === "S" && computerChoice === "P") 
    )   {
        wins++;
        window.alert("You Win Bitch!");
    } else {
        losses++;
        window.alert("Shut The Fuck Up and Take The L Hoe");
    }    

    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTie: " + tie
    );

    var playAgain = window.confirm("Wanna Try Again Pussy?");
    
    if (playAgain) {
        playgame();
    }     
  };

playgame();