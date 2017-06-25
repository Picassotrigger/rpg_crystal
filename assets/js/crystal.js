<!--------------------------              VARIABLES               --------------------------->

var wins = 0;

var losses = 0;

var targetNumber = 0;

var userNumber = 0;

var personValues = [0, 0, 0, 0];

var person1Value = personValues[0];

var person2Value = personValues[1];

var person3Value = personValues[2];

var person4Value = personValues[4];






$("div#wins").text(wins);

$("div#losses").text(losses);

$("div#targetNumber").text(targetNumber);

$("div#userNumber").text(userNumber);




<!--------------------------              FUNCTIONS               --------------------------->


function createPersonValues() {
    for(var i = 0; i < 4; i++) {
        personValues[i] = 1 + Math.floor(Math.random() * 9);
        
        person1Value = personValues[0];
        person2Value = personValues[1];
        person3Value = personValues[2];
        person4Value = personValues[3];
    }
}

function createTargetNumber() {
    targetNumber = 1 + Math.floor(Math.random() * 50);
    $("div#targetNumber").text(targetNumber);
}


function statusCheck() {
    if(userNumber === targetNumber) {
        $("div#targetNumber").text("You");
        $("div#userNumber").text("Win!");
        wins++;
        $("div#wins").text(wins);
        $("h1").on("click", newGame());

    }
    else if(userNumber > targetNumber) {
        $("div#targetNumber").text("You");
        $("div#userNumber").text("Lose!");
        losses++;
        $("div#losses").text(losses);
        $("h1").on("click", newGame());
    }
    return;
}

function newGame() {
    createPersonValues();
    createTargetNumber();
    userNumber = 0;
    $("div#userNumber").text(userNumber);
}







<!--------------------------              MAIN               --------------------------->


$(document).ready(function() {
    createPersonValues();
    createTargetNumber();
    
    
    $("img#person1").on("click", function() {
        userNumber = userNumber + person1Value;
        $("div#userNumber").text(userNumber);
        statusCheck();
    });
    
    $("img#person2").on("click", function() {
        userNumber = userNumber + person2Value;
        $("div#userNumber").text(userNumber);
        statusCheck();
    });
    
    $("img#person3").on("click", function() {
        userNumber = userNumber + person3Value;
        $("div#userNumber").text(userNumber);
        statusCheck();
    });
    
    $("img#person4").on("click", function() {
        userNumber = userNumber + person4Value;
        $("div#userNumber").text(userNumber);
        statusCheck();
    });
    
});