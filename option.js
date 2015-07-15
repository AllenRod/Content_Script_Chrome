window.onload = function() {
	// Get the list already saved in storage
	chrome.storage.local.get("filter", function(result) {
		if (result["filter"]) {
			$("#lists").val(result["filter"]);
		} else {
			$("#lists").val("The list is currently empty, please remove " + 
			"this line and enter your trusted web domains. Please separate " +
			"with semicolon.");
		}
	});
	
	// Save the list to local storage
	$("#save").click( function() {
		$("#lists").change( function() {
			return;
		})
		var newList = $("#lists").val();
		if (newList) {
			chrome.storage.local.set({"filter":newList}, function() {
				return;
			})
		}
	});
	
	// Clear the list
	$("#clear").click( function() {
		chrome.storage.local.clear( function() {
			$("#lists").val("");
		});
	});
}

