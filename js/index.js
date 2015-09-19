/**
 * Provide URL to index.html when require by popup.html.
 */
window.onload = function() {
	$("button").click( function() {
		var url = chrome.extension.getURL("html/index.html");
		document.getElementById("link").setAttribute("href", url);
	});
}
