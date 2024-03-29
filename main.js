$(document).ready(main);


function main() {
	section2();
	section5();
	section4();
	section3();
}


function section2() {
	$("#projects-card").click(function() {
		window.location = "#section-4";
	});
}


function section3() {
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
}


function section4() {
	$("#s4-gpa-calc-card").click(function() {
		window.open("https://devshayan.github.io/gpa_calculator/", "_blank");
	});

	$("#s4-snake-card").click(function() {
		window.open("https://devshayan.github.io/snake_game/", "_blank");
	});
}


function section5() {
	$("#s5-fiverr-card").click(function() {
		window.open(" https://www.fiverr.com/shayanthedev", "_blank");
	});

	$("#s5-github-card").click(function() {
		window.open("https://github.com/DevShayan/", "_blank");
	});

	$("#s5-guru-card").click(function() {
		window.open("https://www.guru.com/freelancers/devshayan", "_blank");
	});

	$("#s5-kwork-card").click(function() {
		window.open("https://kwork.com/user/devshayan", "_blank");
	});
}

