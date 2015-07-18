/**
 * Manage loading, displaying, saving and clearing the list from storage.
 */
window.onload = function() {
	/**
	 * Get the saved object from storage, and display in "#list" textarea.
	 * If storage is empty, display the text instead.
	 */
	chrome.storage.local.get("filter", function(result) {
		if (result["filter"]) {
			$("#lists").val(result["filter"]);
		} else {
			$("#lists").val("The list is currently empty, please remove " + 
			"this line and enter your trusted web domains.");
		}
	});
	
	/**
	 * Save the content in "#list" textarea in local storage.
	 * Triggered by "#save" button.
	 */
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
	
	/**
	 * Clear all local storage. 
	 * Triggered by "#clear" button.
	 */
	$("#clear").click( function() {
		chrome.storage.local.clear( function() {
			$("#lists").val("");
		});
	});
}

