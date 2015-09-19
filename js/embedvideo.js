/**
 * ALter youtube links to embed links for <IFRAME>.
 */
 
// Create new embed url 
var embedHolder = "https://www.youtube.com/embed/";
var videoID = "";

/**
 * Extract youtube video id and create embed links.
 * @param urlString		The url of the youtube link
 */
function embed(urlString) {
	var index = 0;
	// Extract video ID
	if (urlString.search(/youtube.com/) >=0) {
		index = urlString.lastIndexOf("v=") + 2;
		videoID = urlString.slice(index);
		index = videoID.indexOf("#");
		if (index >= 0) {
			videoID = videoID.slice(0, index);
		}
		index = videoID.indexOf("&");
		if (index >= 0) {
			videoID = videoID.slice(0, index);
		}
	} else if (urlString.search(/youtu.be/) >=0) {
		index = urlString.lastIndexOf("/") + 1;
		videoID = urlString.slice(index);
		index = videoID.indexOf("?");
		if (index >= 0) {
			videoID = videoID.slice(0, index);
		}
	}
	console.log(embedHolder + videoID);
	return (embedHolder + videoID);
}
