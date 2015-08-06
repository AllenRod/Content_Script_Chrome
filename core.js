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
var checkURL = chrome.extension.getURL("images/open.png");
check.attr( "src", checkURL);
check.height(10);
check.width(10);

// Mouse listener for hovering over hyper-link <A>.
$('a').hover( 
	// Mouse over
	function() {
		url = $(this).attr("href");
		// Pass url and the current element to callback function
		filter(url, $(this)); 
		// For image hover
		//imgProc(url, $(this));
	},
  
	// Mouse out
	function() {
		$(this).detach(".core");
		imgClear();
		newDiv.empty();
		newDiv.hide();
		// Destroy the popover
		$(this).popover('destroy');
		//hide($(this));
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

/**
 * Add popover overlay to the hovering <A> tag. 
 * @param arg		Argument to determine the data-content
 * @param ele 		The hovering <A> tag
 */
function addPopover(ele, arg) {
	if (arg == true) {
		ele.popover({
			content:check,
			placement:"bottom",
			html:"true",
		});
	} else {
		ele.popover({
			content: arg,
			placement: "bottom"
		});
	}
	ele.popover("show");
}

/**
 * Hide the popover after delay of 450 ms.
 * @param ele	The hovering <A> tag
 */
function hide(ele) {
	setTimeout( function() {
		ele.popover('hide');
	}, 450);
}

/**
 * Initiate popover on the page.
 */
$(function() {
	$('[data-toggle="popover"]').popover();
})
