// Create new div
var newDiv = document.createElement('div');
newDiv.className = 'core';
var str = "";

// Get the path of the check image
var check = document.createElement("img");
check.src = chrome.extension.getURL("images/check.png");
check.height = "20";
check.width = "20";

// Create new image for imgur.com
var img = document.createElement("img");

// Mouse listener for move over event on the current document.
document.addEventListener('mouseover', function (event) {
  // Check if the underlying element is an <a>.
  if (event.target.nodeName == 'A') {
	str = event.target.href;
	// Check hostname
	if ((/reddit.com/.test(str)) || (/redd.it/.test(str)) 
	|| (/youtu.be/.test(str)) || (/youtube.com/.test(str))
	|| (/gfycat.com/.test(str))) {
		newDiv.appendChild(check);
	} else if (/imgur.com/.test(str)) {
		// The URL leads to imgur.com
		if ((/gallery/.test(str)) || (/.gifv\b/.test(str))
		|| (/.webm\b/.test(str))) {
			newDiv.appendChild(check);
		} else {
			if ((!(/.jpg\b/.test(str))) && (!(/.png\b/.test(str))) 
			&& (!(/.gif\b/.test(str)))) {
				str += ".jpg";
			}
			img.src = str;
			imageMod(img);
			newDiv.appendChild(img);
		}
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
	newDiv.innerHTML = "";
	newDiv.style.visibility = 'hidden';
	img.src = "";
  }
});

// Resize image 
function imageMod(image) {
	while ((image.height > 250) && (image.width > 250)) {
		image.height *= 0.8;
		image.width *= 0.8;
	}
}
