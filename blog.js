$(document).ready(function() {
	$('#submit').click(function(e) {
		var email = $('#email').val();
		var email_regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

		 if (!email.match(email_regex) || email.length == 0) {
$('#p3').text("* Please enter a valid email address *"); // This Segment Displays The Validation Rule For Email
$("#email").focus();
return false;
}
else{
	$('#myModal').modal('show');
	$('#p3').text("");
	$("#email").val("");
	}

});
});