// Get the path of html file
var listURL = chrome.extension.getURL("index.html");

// Create XmlHttpRequest object
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = loadDone;
xmlhttp.open("GET", listURL, true);
xmlhttp.send();

function loadDone() {
	// Obtain data from the requested file
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var lists = xmlhttp.responseText;
		var head = lists.lastIndexOf("lists");
		head += 8;
		var end = lists.lastIndexOf("div");
		end -= 3;
		lists = lists.slice(head, end);
	}
}
