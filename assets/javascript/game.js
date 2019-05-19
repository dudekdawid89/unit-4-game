var lossCounter = 0;
var winCounter = 0;

function startGame(){
  var targetNumber = Math.floor(Math.random()*101)+19;
  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var numberOptions = [
    Math.floor(Math.random()*11)+1, 
    Math.floor(Math.random()*11)+1,
    Math.floor(Math.random()*11)+1, 
    Math.floor(Math.random()*11)+1
  ];

  var imageArray = [
    "./assets/images/diament1.png",
    "./assets/images/diament1.png",
    "./assets/images/diament1.png",
    "./assets/images/diament1.png"
  ];
  for (var i = 0; i < numberOptions.length; i++) {
    
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", imageArray[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  }
  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    $("#counter").text(counter);

  

    if (counter === targetNumber) {
      winCounter++;
      $('#win').text(winCounter);
      startGame();
    }

    else if (counter >= targetNumber) {
      lossCounter++;
      $('#loss').text(lossCounter);
      startGame();
    }

  });
};





 
