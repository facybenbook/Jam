/*
Copyright (C) 2015 Electronic Arts Inc.  All rights reserved.
 
This software is solely licensed pursuant to the Hackathon License Agreement,
Available at:  www.eapathfinders.com/license
All other use is strictly prohibited. 
*/

$(document).ready(function () {

	console.log("Document Loaded");

	// INIT..
	conn = new Connection();
	conn.sendMessage({"type": "connect"});
	
	// Process incoming game messages
	$(document).on("game_message", function (e, message) {
		console.log("Received Message: " + JSON.stringify(message));
		var payload = message.payload;
		switch (payload.type) {
			//process message
			case "check_connection": //make sure connection doesent time out
				var msg = {"type": "ackConnection"};
				conn.sendMessage(msg, 0);
				break;
		}
	});
	
	$(".button").on("touchend", function(e) {
		var msg = {
			"type": "click",
			"button": $(this).attr("id")
        };
        conn.sendMessage(msg, 0);
	});
	
});

