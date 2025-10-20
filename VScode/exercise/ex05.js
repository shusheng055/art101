let count = 0;
let colors = ["Orchid", "Coral", "Hotpink", "Plum"];

$("#needy-button").click(function(){

    let reminder = count % colors.length;

    $("#needy-button").html("Clicks: " + count + " Color: " + colors[reminder]);
    //new line to add

    $("body").css("background-color", colors[reminder]);

    count = count + 1;
})