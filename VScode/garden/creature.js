$("#add-creature").click(
    function(){
        let crName = $("#crName").val();
       

        $("#crName").val("");

        if (crName == ""){
            //do nothing
            }

        else if (crName.length > 12){
            alert("Name Too Long")
        }
        
        else { 
            $("#creature-list").append(crName + "<br>");
        }
    }
);