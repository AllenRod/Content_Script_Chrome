/**
 * Display image when hovering over a link direct to http://imgur.com.
 * Process image with a <IMG> tag, and resize it to appropriate dimension.
 */
 
/**
 * Get the image from the URL and display with a <IMG> tag.
 * @param matchString	URL of the image
 * @param imgHolder		<IMG> tag to hold the image
 * @param ele			The hovering <A> tag
 */
function imgProc(matchString, imgHolder, ele) {
	if (/imgur.com/.test(matchString)) {
		// The URL leads to imgur.com
		if ((/gallery/.test(matchString)) || (/.webm\b/.test(matchString))
		|| (/domain/.test(matchString)) || (/\/a\//.test(matchString))) {
			newDiv.append(check);
		} else {
			if (/.gifv\b/.test(matchString)) {
				var n = matchString.indexOf(".gifv");
				matchString = matchString.substr(0, n);
				matchString += ".jpg";
			} else if ((!(/.jpg\b/.test(matchString))) 
			&& (!(/.png\b/.test(matchString))) 
			&& (!(/.gif\b/.test(matchString)))) {
				matchString += ".jpg";
			}
			imgHolder.attr("src", matchString);
			imgHolder.load(function() {
				resize(imgHolder);
			});
			appendDiv(imgHolder);
		}
	}
	append(ele);
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
