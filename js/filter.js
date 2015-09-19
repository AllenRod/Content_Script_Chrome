/**
 * Filter URL from the list stored in storage.
 */
 
/**
 * Filter URL based on the filter list in storage. 
 * @param matchString	URL from the hyper-link
 * @param ele 			The hovering <A> tag
 */
function filter(matchString, ele) {
	// Obtain list from local storage
	chrome.storage.local.get("filter", function(result) {
		var list;
		var bool = false;
		// Check if there is anything in the list
		if (result["filter"]) {
			list = result["filter"];
		} else {
			addPopover(ele, false);
			return;
		}
		// Split list into array
		list = list.split(";");
		for (var i = 0; i < list.length; i++) {
			// Check if there is a matched, if yes display modal button 
			// and exit the method
			if (matchString.search(list[i]) >= 0) {
				bool = true;
				addPopover(ele, true);
				return;
			}
		}
		if (matchString.search(/imgur.com/) >= 0) {
			// For image hover
			imgProc(matchString, ele);
			return;
		}
		// No match found, display the url
		if (bool == false) {
			addPopover(ele, false);
			return;
		}
	});
}
