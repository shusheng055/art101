let count = 0;
let colors = ["Orchid", "Coral", "Hotpink", "Plum"];

$("#needy-button").click(function(){
    $("#needy-button").html("Clicks: " + count + "Color: " + colors[count]);
    //new line to add

    count = count + 1;
})