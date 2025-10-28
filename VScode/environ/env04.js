let title = "Lab5";
let elements = ["water", "fire", "earth", "air"];
let blackCat = {
    age: 3,
    color: "black",
    name: "Salem",
}

let cat = {
    age: 2,
    color: "orange",
    name: "Ginger",
}

let clickCount = 0;

 $("#output").html("cat name: " + cat.name + ", age: " + cat.age + ", color: " + cat.color + "<br>");

 $("#change").click(function(){

    $("#cat").attr("src", "images/BlackCat.png");
    $("#change").css("background-color", "orange");
    $("#output").html("cat name: " + blackCat.name + ", age: " + blackCat.age + ", color: " + blackCat.color + "<br>");
    $("#change").html("clicked: " + clickCount + " times");

    clickCount = clickCount + 1;

  if (clickCount == 1){
    $("#words").append("Cat changed!" + '<br>');
}

else if (clickCount == 2){
    $("#words").append("Cat already changed!" + '<br>');
    $("#words p:last").remove();

}

else if (clickCount == 3){
   $("#words").append("I’ve done my work!" + '<br>');
}

else if (clickCount == 4){
   $("#words").append("Your mouse ok?" + '<br>');
}

else if (clickCount == 5){
   $("#words").append("What do u want?" + '<br>');
}

else if (clickCount == 6){
   $("#words").append("Stop poking me!" + '<br>');
}

else if (clickCount == 7){
   $("#words").append("I’m just a button…" + '<br>');
}

else if (clickCount == 8){
   $("#words").append("Cats aren’t cheap, you know." + '<br>');
}

else if (clickCount == 9){
   $("#words").append("Running out of cats!" + '<br>');
}

else if (clickCount == 10){
   $("#words").append("Ever tried touching grass?" + '<br>');
}

else if (clickCount == 11){
   $("#words").append("Still clicking? Bold." + '<br>');
}

else if (clickCount == 12){
   $("#words").append("Bro, it’s the same cat." + '<br>');
}

else if (clickCount == 13){
   $("#words").append("Imagine if I crash now…" + '<br>');
}

else if (clickCount == 14){
   $("#words").append("You think I’m infinite?" + '<br>');
}

else if (clickCount == 15){
   $("#words").append("Meow quota exceeded!" + '<br>');
}

else if (clickCount == 16){
   $("#words").append("Okay, now you’re scaring me." + '<br>');
}

else if (clickCount == 17){
   $("#words").append("Achievement unlocked: Cat Maniac." + '<br>');
}

else if (clickCount == 18){
   $("#words").append("The cat union will hear about this." + '<br>');
}

else if (clickCount == 19){
   $("#words").append("Stop or I’ll call the dog." + '<br>');
}

else if (clickCount == 20){
   $("#words").append("…Fine, last cat. Happy?" + '<br>');
    $("#cat").attr("src", "images/AnJing.png");
}

else {
    $("#cat").attr("src", "images/AnJing.png");
    $("#words").append("Trust me, that's it." + '<br>');
}


    
    
    
})