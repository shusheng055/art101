let count = 0;
let click = 1;
let moodv = 0;
let mood = [", fresh and happy", ", keep pushing", ", so tired!"]
let colors = ["Orchid", "Coral", "Hotpink", "Plum"];
var audio = document.getElementById("sound");

$("#needy-button").click(function(){

    $("#needy-button").html("Clicks: " + click + " Color: " + colors[count] + mood[moodv]);
    //new line to add

    $("body").css("background-color", colors[count]);

    count = count + 1;

    click = click + 1;

    if (count == 4) {count = 0;}
    
    if (click < 5) {moodV = 0;}
    else if ((click >= 5) && (click < 10)) {moodv = 1;}
    else {moodv = 2;}
    
    audio.play();
    
})