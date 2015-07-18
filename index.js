/**
 * Provide URL to index.html when require by popup.html.
 */
window.onload = function() {
	$("#goTo").click( function() {
		var url = chrome.extension.getURL("index.html");
		document.getElementById("link").setAttribute("href", url);
	});
}
