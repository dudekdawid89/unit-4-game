var lossCounter = 0;
var winCounter = 0;

var counter = 0;
  var targetNumber = Math.floor(Math.random()*101)+19;
  $("#number-to-guess").text(targetNumber);
  $('#counter').text('0');
  $('#win').text('0');
  $('#loss').text('0');
 
  var numberOptions = [
    Math.floor(Math.random()*11)+1, 
    Math.floor(Math.random()*11)+1,
    Math.floor(Math.random()*11)+1, 
    Math.floor(Math.random()*11)+1
  ];

  var imageArray = [
    "./assets/images/diament1.png",
    "./assets/images/diament2.png",
    "./assets/images/diament3.png",
    "./assets/images/diament4.png"
  ];
  for (var i = 0; i < numberOptions.length; i++) {
    
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", imageArray[i]);
    imageCrystal.attr("id", "image"+i);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  }
  function startGame(){
    targetNumber = Math.floor(Math.random()*101)+19;

    numberOptions = [
      Math.floor(Math.random()*11)+1, 
      Math.floor(Math.random()*11)+1,
      Math.floor(Math.random()*11)+1, 
      Math.floor(Math.random()*11)+1
    ];

    $("#number-to-guess").text(targetNumber);
    counter = 0;
    $('#counter').text('0');
    for (var i = 0; i < numberOptions.length; i++){ 
 //here is where you reference the dynamic class called crystal-image to store the random numbers
    $("#image"+i).attr("data-crystalvalue", numberOptions[i]);
    }
  }
  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    $("#counter").text(counter);

  

    if (counter === targetNumber) {
      winCounter++;
      alert("WINNER")
      $('#win').text(winCounter);
      startGame();
    }

    else if (counter >= targetNumber) {
      lossCounter++;
      alert("I'm sorry you lost")
      $('#loss').text(lossCounter);
      startGame();
    }

  });

  function welcome(){
    alert("IS NICE TO SEE YOU, Click OK to start the game ")
  };





 
