/**
 * Create a modal and display the page from URL in simplified form using 
 * Embed.ly Cards API
 */
// Append modal to the page 
/*$('body').append('<div class="modal fade" id="modal-container"><div class="modal-dialog modal-lg" style="width:80%;"><div class="modal-content"><div class="modal-body" style="padding:0px;"><iframe src="#" frameborder="0" allowfullscreen="" id="display-container"></iframe></div></div><div class="modal-footer"><a id="open-window" href="" target="_blank"><button type="button" class="btn btn-primary" id="open-btn">Open</button></a><button type="button" class="btn btn-danger" data-dismiss="modal" style="margin-left:10px">Close</button></div></div></div>');*/
$('body').append('<div class="modal fade" id="modal-container"><div class="modal-dialog modal-lg" style="width:80%;"><div class="modal-content"><div class="modal-body" id="main-body" style="padding:0px;"></div></div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal" style="margin-left:10px">Close</button></div></div></div>');
// By replacing the href attribute, the API runs automatically to create embed page
var card = '<a class="embedly-card" id="display-container" href="#"></a><script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>';

/**
 * Set the 'src' attribute of <A> to the url, and display the modal.
 * @param urlString		The url of the page to be displayed
 */
function expandModal(urlString) {
	var h = $(window).height();
	$("#display-container").height(h * 0.8);
	urlString = urlString.replace('http://', 'https://');
	//console.log(urlString);
	//$("#display-container").attr('src', urlString);
	$("#main-body").append(card);
	$("#display-container").attr('href', urlString);
	$("#modal-container").modal('show');
}

/**
 * Set the 'src' attribute of <A> to an empty string.
 */
$("#modal-container").on('hide.bs.modal', function(e) {
	//$("#display-container").attr('src', '');
	$("#display-container").attr('href', '');
	//$("#display-container").empty();
	$("#main-body").empty();
});

/**
 * Open a new window(tab) for the <A> page.
 * Triggered by "Open" button.
 * Not needed since Embed.ly Cards API is used
 */
/*$("#open-btn").click( function() {
	//var url = $("#display-container").attr('src');
	var url = $("#display-container").attr('href');
	$("#open-window").attr('href', url);
});*/

/**
 * Check if the the iframe is successfully loaded.
 * Not needed since Embed.ly Cards API is used
 */
/*$(document).ready(function() {
	$("#display-container").load(function() {
		if ($("#display-container").attr('src') != '') {
			var frameURL = $("#display-container").attr('src');
			try {
				//console.log($("#display-container")[0].contentWindow);
			} catch (exception) {
				console.log(exception);
				//window.open(frameURL, "_blank");
				// close modal
			} finally {
				//console.log($("#display-container"));
				console.log(frameURL);
			}
		} else {
			console.log('clear');
		}
	});
});*/
