// Link to index.html
window.onload = function() {
	$("#goTo").click( function() {
		var url = chrome.extension.getURL("index.html");
		document.getElementById("link").setAttribute("href", url);
	});
}
