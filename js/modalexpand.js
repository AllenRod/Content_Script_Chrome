/**
 * Create a modal and display the page from URL with <IFRAME>.
 */
// Append modal to the page 
$('body').append('<div class="modal fade" id="modal-container"><div class="modal-dialog modal-lg" style="width:80%;"><div class="modal-content"><div class="modal-body" style="padding:0px;"><iframe src="#" frameborder="0" allowfullscreen="" id="display-container"></iframe></div></div><div class="modal-footer"><a id="open-window" href="" target="_blank"><button type="button" class="btn btn-primary" id="open-btn">Open</button></a><button type="button" class="btn btn-danger" data-dismiss="modal" style="margin-left:10px">Close</button></div></div></div>');

/**
 * Set the 'src' attribute of <IFRAME> to the url, and display the modal.
 * @param urlString		The url of the page to be displayed
 */
function expand(urlString) {
	var h = $(window).height();
	$("#display-container").height(h * 0.8);
	if ((urlString.search(/youtube.com/) >= 0) || 
	(urlString.search(/youtu.be/) >= 0)) {
		urlString = embed(urlString);
	}
	urlString = urlString.replace('http://', 'https://');
	console.log(urlString);
	$("#display-container").attr('src', urlString);
	$("#modal-container").modal('show');
}

/**
 * Set the 'src' attribute of <IFRAME> to an empty string.
 */
$("#modal-container").on('hide.bs.modal', function(e) {
	$("#display-container").attr('src', '');
});

/**
 * Open a new window(tab) for the <IFRAME> page.
 * Triggered by "Open" button.
 */
$("#open-btn").click( function() {
	var url = $("#display-container").attr('src');
	$("#open-window").attr('href', url);
});
