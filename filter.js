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
			appendDiv(matchString);
			append(ele);
			return;
		}
		// Split list into array
		list = list.split(";");
		for (var i = 0; i < list.length; i++) {
			// Check if there is a matched, if yes display check image 
			// and break from loop
			if (matchString.search(list[i]) >= 0) {
				bool = true;
				appendDiv(true);;
				break;
			}
		}
		// No match found, display the url
		if (bool == false) {
			appendDiv(matchString);
		}
		// Append the DIV under the current hovered element
		append(ele);
	});
}
