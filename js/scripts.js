/* business logic starts*/
var ping = "ping!";
var pong = "pong!";
var pingPongArray = [];

var pingPong = function(enter) {
	for (index = enter; index >= 0; index -= 1) {
		if ((index % 3 === 0) && (index % 5 === 0))  {
		pingPongArray.push(ping + pong);
		} else if (index % 3 === 0){
	  	pingPongArray.push(ping);
		} else if (index % 5 === 0){
				pingPongArray.push(pong);
		} else {
			pingPongArray.push(index);
	  }
		console.log(pingPongArray);

	}
};

// business logic ends


/* User logic */
$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var userInput = parseInt($('#userInput').val());
		pingPong(userInput);
		pingPongArray.forEach(function(pingy) {
			$("#results").append("<p>" + pingy + "</p>");
		});

	});
});


// var pingPong = function(enter) {
// 	for (index = enter; index >= 0; index -= 1) {
// 		if ((index % 3 === 0) && (index % 5 === 0))  {
// 			$("#results").append("<p>" + "PING PONG!" + "</p>");
// 	  } else if (index % 3 === 0){
// 	  	$("#results").append("<p>" + "PING" + "</p>");
// 		} else if (index % 5 === 0){
// 				$("#results").append("<p>" + "PONG" + "</p>");
// 		} else {
// 			$("#results").append("<p>" + index + "</p>");
// 	  }
// 	}
// };
