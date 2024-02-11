$(document).ready(main);

function main() {
	var myEmail = $("#my-email").text();
	var myWhatsapp = $("#my-whatsapp").text();

	// Email
	$("#s3-email-card").click(function() {
		window.location.href = `mailto:${myEmail}`;
	});

	// Whatsapp
	$("#s3-whatsapp-card").click(function() {
		window.location.href = `https://api.whatsapp.com/send?phone${myWhatsapp}&text=%20msg`;
	});
}