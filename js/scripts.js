// business logic starts
var ping = "ping!";

var pingPong =function(enter) {
	for(index= enter; index >= 0; index-=1) {


		$("#results").append("<li>" + index + "</li>");
	}

 // if (enter % 3 === 0 ) {
 // 	// pingTrue = true;
 // 	alert("true");
 //
 // 	$("#results").text("ping");
 //
 // } else {
 // 	alert("enter a number")
 // // 	$('#userInput').addClass('has-error');
 // };
};

// business logic ends




/* User logic */
$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var userInput = parseInt($('#userInput').val());
		pingPong(userInput);

	});
});
