/**
 * Handle the hovering over <A> tag and update content of the page.
 */

// Button to display the modal window for the page
var modalBtn = $('<button type="button" class="btn btn-primary" id="modal-btn">Expand</button>');

// Boolean to determine delay for hiding popover
var delay = false;

// Mouse listener for hovering over hyper-link <A>.
$('a').hover( 
	// Mouse over
	function() {
		url = $(this).attr("href");
		// Pass url and the current element to callback function
		filter(url, $(this));
	},
  
	// Mouse out
	function() {
		imgClear();
		$(this).detach("img");
		if (delay) {
			// Delay the destroy of popover
			hide($(this));
		} else {
			// Destroy the popover immediately
			$(this).popover('destroy');
		}
	}
);

/**
 * Append content to the hovered element.
 * @param arg	Content to be appended to ele
 * @param ele	The hovering <A> tag
 */
function append(arg, ele){
	ele.append(arg);
}

/**
 * Add popover overlay to the hovering <A> tag. 
 * @param ele 		The hovering <A> tag
 * @param bol		Boolean to determine if the url is filtered
 */
function addPopover(ele, bol) {
	if (bol == true) {
		// Display modal button, and add delay before popover disappears
		delay = true;
		ele.popover({
			content:modalBtn,
			placement:"bottom",
			html:"true",
		});
	} else {
		// Display url
		delay = false;
		if ((url == "javascript: void 0;") || 
		(url == "javascript:void(0)")) {
			return;
		}
		ele.popover({
			content: url,
			placement: "bottom"
		});
	}
	ele.popover("show");
}

/**
 * Hide the popover after delay.
 * @param ele	The hovering <A> tag
 */
function hide(ele) {
	setTimeout( function() {
		ele.popover('hide');
	}, 500);
}

/**
 * Initiate popover on the page.
 */
$(function() {
	$('[data-toggle="popover"]').popover();
})

/**
 * Display modal when the "Expand" button is clicked.
 */
modalBtn.click(function() {
	expand(url);
});
