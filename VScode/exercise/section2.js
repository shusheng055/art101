let color = ["red", "yellow", "blue"]
function checkMood(score) {
    
    if(score > 7){moodWords = "Haapy!", number = 0}
    else if (score > 4) {moodWords = "Ok...", number = 1}
    else {moodWords = "Sad!", number = 2}

  }

  function showMood() {
    let randomScore = Math.floor(Math.random() * 10) + 1;
    let moodResult = checkMood(randomScore);
    $("body").css("background-color", color[number]);


    $("#mood-display").html(
      "Score: " + randomScore + "<br>Your mood is: <b>" + moodWords + "</b>"
    );
  }

  $("#mood-button").click(function () {
    showMood();
  });