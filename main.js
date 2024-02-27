$(document).ready(main);

function main() {
	var myEmail = $("#my-email").text();
	var myWhatsapp = $("#my-whatsapp").text();

	$("#s3-email-card").click(function() {
		window.open(`mailto:${myEmail}`, "_blank");
	});

	$("#s3-whatsapp-card").click(function() {
		window.open(`https://api.whatsapp.com/send?phone=${myWhatsapp}&text=%20`, "_blank");
	});

	$("#s3-send-msg-btn").click(function() {
		var name = "PORTFOLIO MESSAGE: "+$("#s3-contact-name-input").val();
		var message = $("#s3-msg-text").val();
		window.open(`mailto:${myEmail}?subject=${name}&body=${message}`, "_blank");
	});

	$("#s4-gpa-calc-card").click(function() {
		window.open("https://devshayan.github.io/gpa_calculator/", "_blank");
	});

	$("#s4-snake-card").click(function() {
		window.open("https://devshayan.github.io/snake_game/", "_blank");
	});

	$(".menu-icons").click(function(){
		$(".menu-icons").removeClass("menu-icon-selected");
		$(this).addClass("menu-icon-selected");
	});
}
