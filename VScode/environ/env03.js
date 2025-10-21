let title = "Lab4";
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


 $("#output").html("cat name: " + cat.name + ", age: " + cat.age + ", color: " + cat.color + "<br>");

 $("#change").click(function(){

    $("#cat").attr("src", "images/BlackCat.png");
    $("#change").css("background-color", "orange");
    $("#output").append("cat changed!");
    $("#output").html("cat name: " + blackCat.name + ", age: " + blackCat.age + ", color: " + blackCat.color + "<br>");
    
    
    
})