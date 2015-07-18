/**
 * Handle the hovering over <A> tag and update content of the page.
 */
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

// Mouse listener for hovering over hyper-link <A>.
$('a').hover( 
	// Mouse over
	function() {
		url = $(this).attr("href");
		// Pass url and the current element to callback function
		filter(url, $(this)); 
		// For image hover
		imgProc(url, img, $(this));
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

/**
 * Append content to newDiv depends on parameter.
 * @param arg	Content to be appended to newDiv
 */
function appendDiv(arg){
	if (arg == true) {
		newDiv.append(check);
	} else if ((typeof arg) == "string") {
		urlTag.text(arg);
		newDiv.append(arg);
	} else {
		newDiv.append(arg);
		newDiv.append("</br>");
	}
}

/**
 * Append newDiv to the hovered element.
 * @param ele	The hovering <A> tag
 */
function append(ele) {
	ele.append(newDiv);
	newDiv.show();

}
