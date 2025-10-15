let totalNumber = 0;

// add a button titled click me

$("#needy-button").click( function(){

    totalNumber = totalNumber + 1;

    let sentence = "I was clicked";
    let totalNumbers= sentence + totalNumber;

    $("#needy-button").html(totalNumbers);

    

});
// When its clicked

// add one to total number

// show how many times

// on the button

// show "clicked total number times"

// a top limit
