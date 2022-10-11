/* Loader */
/* $("header, main, footer").fadeOut(1000); */
$("header, main, footer").css({ display: "none" });

$(window).on("load", function () {
	$(".loaderDiv").fadeOut(1000);
	$("header, main, footer").css({ display: "block" });
	$("header, main, footer").fadeIn(1000);
});

gsap.registerPlugin(ScrollTrigger);

/* Create, Text */

gsap.to("#createText", {
	scrollTrigger: {
		trigger: "#Hero",
		start: "#Hero bottom",
		/* end: "#Hero bottom", */
		scrub: 1,
		/* markers: true, */
	},
	x: "0px",
});

/* Mrote. Text */
gsap.to("#mroteText", {
	scrollTrigger: {
		trigger: "#Hero",
		start: "#Hero bottom",
		/* end: "#Hero bottom", */
		scrub: 1,
		/* markers: true, */
	},
	x: "0px",
});

/* Arrow blue color change */
var a = document.querySelector(".connectPageLink");
a.addEventListener("mouseover", function () {
	var b = document.querySelector(".connectPageLink i");
	b.style.color = "#195194";
	b.style.transition = "all 0.3s";
});

/* Arrow back color change */
a.addEventListener("mouseout", function () {
	var b = document.querySelector(".connectPageLink i");
	b.style.color = "#000";
	b.style.transition = "all 0.3s";
});

/* Services headers */
var c = document.querySelector(".designText");
var d = document.querySelector(".devText");
var e = document.querySelector(".brandingText");
var f = document.querySelector(".marketingText");

/* Services section content */
var designTextContent =
	"<p class='designTextContent text-center'>We drive our projects thorugh a strategic design approach</p><p class='text-center designTextContentBars'>While creating:<br /><br />User experience that excites<br /><br />User interface that can interact<br />Websites<br /><br />Apps<br /><br />Graphics<br /><br />Visual content creation<br /><br />Advertising Design<br /><br />Design consultation</p>";

var devTextContent =
	"<p class='designTextContent text-center'>We put a big emphasis on the union of design and technology</p><p class='text-center designTextContentBars'>We Develop:<br /><br />Websites<br /><br />Apps<br /><br />Ecommerce Solutions<br /><br />Also, we provide technology consultations</p>";

var brandingTextContent =
	"<p class='designTextContent text-center'>We introduce our brand to create an emotional connection between your brand and your people</p><p class='text-center designTextContentBars'>We strategically create:<br /><br />Brand identity<br /><br />Brand Suites<br /><br />Interactive experiencial logos<br /><br />Company design rule-book<br /><br />Pitch-desk design and consultation<br /><br />Business brand consultation</p>";

var marketingTextContent =
	"<p class='designTextContent text-center'>Your image in the world is our way of saying, you are mroted.</p><p class='text-center designTextContentBars'>You present you in the form of:<br /><br />Market research<br /><br />Social media presence<br /><br />Digital media<br /><br />Google marketing</p>";

/* The content Comes Here on Services Options */
var tempContent = document.querySelector(".contentForServices");

document.querySelector(".designBar").style.width = "0%";

/* Design Bar Open*/
c.addEventListener("click", function () {
	var use = document.querySelector(".designBar");
	use.style.width = "50%";
	use.style.transition = "all 0.3s";
	var removed = [".brandingBar", ".devBar", ".marketingBar"];

	for (var i = 0; i < 3; i++) {
		var remove = document.querySelector(removed[i]);
		remove.style.width = "0%";
	}
	tempContent.innerHTML = designTextContent;
});

/* Design Bar Hover Open*/
/* if (document.querySelector(".designBar").style.width == "0%") {
	c.addEventListener("mouseover", function () {
		var use = document.querySelector(".designBar");
		use.style.width = "5%";
		use.style.transition = "all 0.3s";
	});

	c.addEventListener("mouseout", function () {
		var use = document.querySelector(".designBar");
		use.style.width = "0%";
		use.style.transition = "all 0.3s";
	});
} */
/* Design Bar Moue Out Close */
c.addEventListener("click", function () {
	var use = document.querySelector(".designBar");
	use.style.width = "50%";
	use.style.transition = "all 0.3s";
	var removed = [".brandingBar", ".devBar", ".marketingBar"];

	for (var i = 0; i < 3; i++) {
		var remove = document.querySelector(removed[i]);
		remove.style.width = "0%";
	}
	tempContent.innerHTML = designTextContent;
});

/* Dev Bar Open */
d.addEventListener("click", function () {
	var use = document.querySelector(".devBar");
	use.style.width = "30%";
	use.style.transition = "all 0.3s";
	var removed = [".brandingBar", ".designBar", ".marketingBar"];

	for (var i = 0; i < 3; i++) {
		var remove = document.querySelector(removed[i]);
		remove.style.width = "0%";
	}
	tempContent.innerHTML = devTextContent;
});

/* Branding Bar open */
e.addEventListener("click", function () {
	var use = document.querySelector(".brandingBar");
	use.style.width = "60%";
	use.style.transition = "all 0.3s";
	var removed = [".designBar", ".devBar", ".marketingBar"];
	for (var i = 0; i < 3; i++) {
		var remove = document.querySelector(removed[i]);
		remove.style.width = "0%";
	}
	tempContent.innerHTML = brandingTextContent;
});

/* Marketing Bar Open */
f.addEventListener("click", function () {
	var use = document.querySelector(".marketingBar");
	use.style.width = "65%";
	use.style.transition = "all 0.3s";
	var removed = [".designBar", ".devBar", ".brandingBar"];
	for (var i = 0; i < 3; i++) {
		var remove = document.querySelector(removed[i]);
		remove.style.width = "0%";
	}
	tempContent.innerHTML = marketingTextContent;
});

/* Text Colour changers in Integration Section */
gsap.to(".integrate", {
	scrollTrigger: {
		start: "top 450px",
		end: "top 200px",
		trigger: "#integration",
		scrub: 1,
	},
	color: "#2c2d2d",
});

gsap.to(".collab", {
	scrollTrigger: {
		start: "top 450px",
		end: "top 200px",
		trigger: "#integration",
		scrub: 1,
	},
	color: "#2c2d2d",
});

gsap.to(".pursue", {
	scrollTrigger: {
		start: "top 450px",
		end: "top 200px",
		trigger: ".collab",
		scrub: 1,
	},
	color: "#2c2d2d",
});

gsap.to(".charge", {
	scrollTrigger: {
		start: "top 450px",
		end: "top 200px",
		trigger: ".collab",
		scrub: 1,
		/* markers: true, */
	},
	color: "#2c2d2d",
});

gsap.to(".challenges", {
	scrollTrigger: {
		start: "top 450px",
		end: "top 150px",
		trigger: ".pursue",
		scrub: 1,
		/* markers: true, */
	},
	color: "#2c2d2d",
	transformDirection: "left",
});

gsap.to(".win", {
	scrollTrigger: {
		start: "top 450px",
		end: "top 150px",
		trigger: ".charge",
		scrub: 1,
		/* markers: true, */
	},
	color: "#2c2d2d",
});

gsap.to(".digital", {
	scrollTrigger: {
		start: "top 500px",
		end: "top 150px",
		trigger: ".digital",
		scrub: 1,
		/* markers: true, */
	},
	color: "#2c2d2d",
});

gsap.to(".embrace", {
	scrollTrigger: {
		start: "top 500px",
		end: "top 150px",
		trigger: ".digital",
		scrub: 1,
		/* markers: true, */
	},
	color: "#2c2d2d",
});

gsap.to(".freedom", {
	scrollTrigger: {
		start: "top 500px",
		end: "top 150px",
		trigger: ".digital",
		scrub: 1,
		/* markers: true, */
	},
	color: "#2c2d2d",
});

gsap.to(".produce", {
	scrollTrigger: {
		start: "top 500px",
		end: "top 150px",
		trigger: ".embrace",
		scrub: 1,
		/* markers: true, */
	},
	color: "#2c2d2d",
});

gsap.to(".impact", {
	scrollTrigger: {
		start: "top 500px",
		end: "top 150px",
		trigger: ".embrace",
		scrub: 1,
		/* markers: true, */
	},
	color: "#2c2d2d",
});

var size = [window.width, window.height]; //public variable.
$(window).resize(function () {
	window.resizeTo(size[0], size[1]);
});
