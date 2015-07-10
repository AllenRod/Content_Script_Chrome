// Create new div as the holder
var newDiv = $(document.createElement('div'));
newDiv.addClass("core");
var url = "";
var urlTag = $(document.createElement('p'));


// Get the path of the check image
var check = $(document.createElement('img'));
var checkURL = chrome.extension.getURL("images/check.png");
check.attr( "src", checkURL);
check.height(20);
check.width(20);
			
// Create the image as the holder
var img = $(document.createElement("img"));

// Mouse listener for hovering over hyper-link <a>.
$('a').hover( 
	// Mouse over
	function() {
		url = $(this).attr("href");
		loadDone();
		// Check hostname
		if ((/reddit.com/.test(url)) || (/redd.it/.test(url)) 
		|| (/youtu.be/.test(url)) || (/youtube.com/.test(url))
		|| (/gfycat.com/.test(url)) || (/\/r\//.test(url))) {
			newDiv.append(check);
		} else if (/imgur.com/.test(url)) {
			// The URL leads to imgur.com
			if ((/gallery/.test(url)) || (/.webm\b/.test(url))) {
				newDiv.append(check);
			} else {
				if (/.gifv\b/.test(url)) {
					var n = url.indexOf(".gifv");
					url = url.substr(0, n);
					url += ".jpg";
				} else if ((!(/.jpg\b/.test(url))) && (!(/.png\b/.test(url))) 
				&& (!(/.gif\b/.test(url)))) {
					url += ".jpg";
				}
				img.attr("src", url);
				img.load(function() {
					resize(img);
				});
				newDiv.append(img);
			}
		} else {
			urlTag.text(url);
			newDiv.append(urlTag);
		}
		$(this).append(newDiv);
		newDiv.show();
	},
  
	// Mouse out
	function() {
		$(this).detach(".core");
		img.attr("src", "");
		img.css("height", "auto", "width", "auto");
		newDiv.empty();
		newDiv.hide();
		hoverImg = false;
	}
);

// Resize image 
function resize(image) {
	var h = image.height();
	var w = image.width();
	while ((h > 300) && (w > 300)) {
		h = Math.round(h * 0.7);
		w = Math.round(w * 0.7);
	}
	image.height(h);
	image.width(w);
}
