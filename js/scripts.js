/* business logic starts*/

var pingPong = function(enter) {
	for (index = enter; index >= 0; index -= 1) {
		if ((index % 3 === 0) && (index % 5 === 0))  {
			$("#results").append("<li>" + "PINGPONG!" + "</li>");
	  } else if (index % 3 === 0){
	  	$("#results").append("<li>" + "PING" + "</li>");
		} else if (index % 5 === 0){
				$("#results").append("<li>" + "PONG" + "</li>");
		} else {
			$("#results").append("<li>" + index + "</li>");
	  }
	}
};
// business logic ends


/* User logic */
$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var userInput = parseInt($('#userInput').val());
		pingPong(userInput);
		// }else {
		// 	alert("enter a number")
		// // 	$('#userInput').addClass('has-error');

	});
});
