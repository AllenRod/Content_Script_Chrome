// Create new div
var newDiv = document.createElement('div');
newDiv.className = 'core';
var str = "";

// Get the absolute path of the image 
var img = document.createElement("img");
img.src = chrome.extension.getURL("images/check.png");
img.height = "20";
img.width = "20";

// Mouse listener for move over event on the current document.
document.addEventListener('mouseover', function (event) {
  // Check if the underlying element is a hyperlink
  if (event.target.nodeName == 'A') {
	str = event.target.href;
	// Check hostname
	if ((/reddit.com/.test(str)) || (/imgur.com/.test(str)) ||
	(/redd.it/.test(str)) || (/youtbe.com/.test(str)) || 
	(/youtube.com/.test(str))) {
		newDiv.innerHTML = "";
		newDiv.appendChild(img);
	} else {
		newDiv.innerHTML = str;
	}
	newDiv.style.visibility = "visible";
	event.target.appendChild(newDiv);
  }
});

// Mouse listener for move out event on the current document
document.addEventListener('mouseout', function(event) {
  if (event.target.nodeName == 'A') {
	newDiv.style.visibility = 'hidden';
  }
});
