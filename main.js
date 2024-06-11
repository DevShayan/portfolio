var proj1Images = [
	"assets/images/proj1/login.png",
	"assets/images/proj1/register.png",
	"assets/images/proj1/dashboard.png",
	"assets/images/proj1/assignments.png",
	"assets/images/proj1/attn_total.png",
	"assets/images/proj1/attn_class.png",
	"assets/images/proj1/grades_total.png",
	"assets/images/proj1/grades_sem.png",
	"assets/images/proj1/schedule.png"
];
var index1 = 0;

var proj2Images = [
	"assets/images/proj2/1.png",
	"assets/images/proj2/2.png",
	"assets/images/proj2/3.png",
	"assets/images/proj2/4.png",
	"assets/images/proj2/5.png"
];
var index2 = 0;

var proj3Images = [
	"assets/images/proj1/login.png",
	"assets/images/proj1/register.png",
	"assets/images/proj1/dashboard.png",
	"assets/images/proj1/assignments.png",
	"assets/images/proj1/attn_total.png",
	"assets/images/proj1/attn_class.png",
	"assets/images/proj1/grades_total.png",
	"assets/images/proj1/grades_sem.png",
	"assets/images/proj1/schedule.png"
];
var index3 = 0;


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
	// initialize
	$("#proj1-img").attr("src", proj1Images[index1]);
	$("#proj2-img").attr("src", proj2Images[index2]);
	$("#proj3-img").attr("src", proj3Images[index3]);

	var timeMs = 5000;

	var proj1Timer = setInterval(changeProj1Images, timeMs);
	var proj2Timer = setInterval(changeProj2Images, timeMs);
	var proj3Timer = setInterval(changeProj3Images, timeMs);

	/////////////

	$("#proj1-img").click(function() {
		clearInterval(proj1Timer);
		proj1Timer = setInterval(changeProj1Images, timeMs);

		(index1+1 >= proj1Images.length) ? index1 = 0 : index1++;
		$("#proj1-img").attr("src", proj1Images[index1]);
	});

	$("#proj2-img").click(function() {
		clearInterval(proj2Timer);
		proj2Timer = setInterval(changeProj2Images, timeMs);

		(index2+1 >= proj2Images.length) ? index2 = 0 : index2++;
		$("#proj2-img").attr("src", proj2Images[index2]);
	});

	$("#proj3-img").click(function() {
		clearInterval(proj3Timer);
		proj3Timer = setInterval(changeProj3Images, timeMs);

		(index3+1 >= proj3Images.length) ? index3 = 0 : index3++;
		$("#proj3-img").attr("src", proj3Images[index3]);
	});
}


function changeProj1Images() {
	(index1+1 >= proj1Images.length) ? index1 = 0 : index1++;
	$("#proj1-img").attr("src", proj1Images[index1]);
}

function changeProj2Images() {
	(index2+1 >= proj2Images.length) ? index2 = 0 : index2++;
	$("#proj2-img").attr("src", proj2Images[index2]);
}

function changeProj3Images() {
	(index3+1 >= proj3Images.length) ? index3 = 0 : index3++;
	$("#proj3-img").attr("src", proj3Images[index3]);
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

