// Toggle content to be editable
window.onload = function() {
	$("#toggle").click( function() {
		var bool = $("#lists").attr("contenteditable");
		if (bool == "true") {
			$("#lists").attr("contenteditable", "false");
		} else {
			$("#lists").attr("contenteditable", "true");
		}
	});
}
