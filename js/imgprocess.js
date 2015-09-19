/**
 * Display image when hovering over a link direct to http://imgur.com.
 * Process image with a <IMG> tag, and resize it to appropriate dimension.
 */
  
// Create the image as the holder
var img = $(document.createElement("img"));
img.addClass("img-rounded");
img.addClass("core");

/**
 * Get the image from the URL and display with a <IMG> tag.
 * @param matchString	URL of the image
 * @param ele			The hovering <A> tag
 */
function imgProc(matchString, ele) {
	if (/imgur.com/.test(matchString)) {
		// The URL leads to imgur.com
		if (/.gifv\b/.test(matchString)) {
			// Manipulate URL
			var n = matchString.indexOf(".gifv");
			matchString = matchString.substr(0, n);
			matchString += ".jpg";
		} else if ((!(/.jpg\b/.test(matchString))) 
		&& (!(/.png\b/.test(matchString))) 
		&& (!(/.gif\b/.test(matchString)))) {
			// Manipulate URL
			matchString += ".jpg";
		}
		img.attr("src", matchString);
		// Resize image
		img.load(function() {
			resize(img);
		});
		img.show();
		append(img, ele);
	}
}

/**
 * Resize the image.
 * @param image	Image to be resized
 */
function resize(image) {
	var h = image.height();
	var w = image.width();
	while ((h > 400) && (w > 400)) {
		h = Math.round(h * 0.7);
		w = Math.round(w * 0.7);
	}
	image.height(h);
	image.width(w);
}

/**
 * Change <IMG> tag back to default setting.
 */
function imgClear() {
	img.attr("src", "");
	img.css("height", "auto", "width", "auto");
	img.hide();
}
