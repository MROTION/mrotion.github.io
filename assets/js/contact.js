var q1Selected = [];
var q2Selected = [];
var q3Selected = [];
var q4Selected = [];

var cancelled = false;

var q1Completed = false;
var q2Completed = false;
var q3Completed = false;
var q4Completed = false;
var q5Completed = false;

/* Array for Q1 */
function arrayCreatorForQ1(selected) {
	var c = selected;
	var temp = c.attr("name");
	q1Selected.push(temp);
	b = new Set(q1Selected);
	c = Array.from(b);
	q1Selected = c;
	console.log(q1Selected);
	/* console.log($(".checked").length); */
	/* console.log(selected.attr("name")); */
}

function arrayDeletorForQ1(selected) {
	var c = selected.attr("name");
	for (var i = 0; i < q1Selected.length; i++) {
		if (c == q1Selected[i]) {
			q1Selected.splice(i, 1);
		}
	}
	console.log(q1Selected);
}

/* Arrays for Q2 */
function arrayCreatorForQ2(selected) {
	var c = selected;
	var temp = c.attr("name");
	q2Selected.push(temp);
	b = new Set(q2Selected);
	c = Array.from(b);
	q2Selected = c;
	console.log(q2Selected);
	/* console.log($(".checked").length); */
	/* console.log(selected.attr("name")); */
}

function arrayDeletorForQ2(selected) {
	var c = selected.attr("name");
	for (var i = 0; i < q2Selected.length; i++) {
		if (c == q2Selected[i]) {
			q2Selected.splice(i, 1);
		}
	}
	console.log(q2Selected);
}

/* Arrays for Q3 */
function arrayCreatorForQ3(selected) {
	var c = selected;
	var temp = c.attr("name");
	q3Selected.push(temp);
	b = new Set(q3Selected);
	c = Array.from(b);
	q3Selected = c;
	console.log(q3Selected);
	/* console.log($(".checked").length); */
	/* console.log(selected.attr("name")); */
}

function arrayDeletorForQ3(selected) {
	var c = selected.attr("name");
	for (var i = 0; i < q3Selected.length; i++) {
		if (c == q3Selected[i]) {
			q3Selected.splice(i, 1);
		}
	}
	console.log(q3Selected);
}

/* Arrays for Q4 */
function arrayCreatorForQ4(selected) {
	var c = selected;
	var temp = c.attr("name");
	q4Selected.push(temp);
	b = new Set(q4Selected);
	c = Array.from(b);
	q4Selected = c;
	console.log(q4Selected);
	/* console.log($(".checked").length); */
	/* console.log(selected.attr("name")); */
}

function arrayDeletorForQ4(selected) {
	var c = selected.attr("name");
	for (var i = 0; i < q4Selected.length; i++) {
		if (c == q4Selected[i]) {
			q4Selected.splice(i, 1);
		}
	}
	console.log(q4Selected);
}

function q1() {
	$(".prevQuesArrow").animate({ opacity: 0 });
	/* $(".prevQuesArrow").css({ display: none }); */
	$(
		".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4, .imgContainer5"
	).animate({ opacity: 0 });
	$(".optionsDiv p").animate({ opacity: 0 });
	$(".ques, .quesSub, .quesNo").animate({ opacity: 0 });

	console.log("q1");
	setTimeout(function () {
		$(".imgContainer .row").removeClass("justify-content-center");

		$(".quesNo").html("1.");
		$(".ques").html("What services are you looking for?");
		$(".quesSub").html(
			"Please select one or more options that will perfectly fit to your business needs. These options will help us to understand the current state of your business."
		);

		$(".ques, .quesSub, .quesNo").animate({ opacity: 1 });

		$(".imgContainer1").html(
			'<img src="../assets/media/contact/q1/identityImg.png" alt="" class="identityImg" name="brandIdentity"/><p>Brand Identity</p>'
		);

		$(".imgContainer2").html(
			'<img src="../assets/media/contact/q1/marketImg.png" alt="" class="identityImg" name="mediaMarketing"/><p>Media Marketing</p>'
		);

		$(".imgContainer3").html(
			'<img src="../assets/media/contact/q1/devImg.png" alt="" class="identityImg" name="webDev"/><p>Web Developement</p>'
		);

		$(".imgContainer4").html(
			'<img src="../assets/media/contact/q1/uxImg.png" alt="" class="identityImg" name="uiUx"/><p>UI UX</p>'
		);

		$(".imgContainer5").html(
			'<img src="../assets/media/contact/q1/consultImg.png" alt="" class="identityImg" name="brandConsultation"/><p>Brand Consultation</p>'
		);

		$(
			".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4, .imgContainer5"
		).animate({ opacity: 1 });

		$(
			".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4, .imgContainer5"
		).css({ display: "block" });

		$(".optionsDiv p").animate({ opacity: 1 });

		$(".identityImg").click(function () {
			if ($(this).hasClass("checked") == true) {
				$(this).css({ borderColor: "#f7f7f3" });
				$(this).removeClass("checked");
				var selected = $(this);
				arrayDeletorForQ1(selected);
			} else if ($(this).hasClass("checked") == false) {
				$(this).css({ borderColor: "#195194" });
				$(this).addClass("checked");
				var selected = $(this);
				arrayCreatorForQ1(selected);
			}
		});
	}, 500);

	return (q1Completed = true);
}

function q2() {
	console.log("q2");
	$(
		".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4, .imgContainer5"
	).animate({ opacity: 0 });
	$(".optionsDiv p").animate({ opacity: 0 });
	$(".ques, .quesSub, .quesNo").animate({ opacity: 0 });
	$(".prevQuesArrow").css({ display: "block" });
	$(".prevQuesArrow").animate({ opacity: 1 });
	setTimeout(function () {
		$(".imgContainer2, .imgContainer3, .imgContainer4").css({
			display: "block",
		});

		$(".imgContainer .row").addClass("justify-content-center");

		$(".quesNo").html("2.");
		$(".quesNo").animate({ opacity: 1 });
		$(".ques").html("Do you have a vision for your brand?");
		$(".ques").animate({ opacity: 1 });
		$(".quesSub").html(
			"Everybody must have a vision for their company becuse it is what drives you every morning to wake up and work. "
		);
		$(".ques, .quesSub, .quesNo").animate({ opacity: 1 });
		$(".imgContainer2").html(
			'<img src="../assets/media/contact/q2/millionsImg.png" alt="" class="identityImg" name="millions" /><p>Millions</p>'
		);
		$(".imgContainer3").html(
			'<img src="../assets/media/contact/q2/billionsImg.png" alt="" class="identityImg" name="billions" /><p>Billions</p>'
		);
		$(".imgContainer4").html(
			'<img src="../assets/media/contact/q2/trillionsImg.png" alt="" class="identityImg" name="trillions" /><p>Trillions</p>'
		);

		$(".imgContainer1, .imgContainer5").html("");
		$(".imgContainer1, .imgContainer5").css({ display: "none" });

		$(".imgContainer2, .imgContainer3, .imgContainer4").animate({
			opacity: 1,
		});

		$(".imgContainer2, .imgContainer3, .imgContainer4").css({
			display: "block",
		});

		$(".optionsDiv").animate({});
		$(".identityImg").click(function () {
			if ($(this).hasClass("checked") == true) {
				$(this).css({ borderColor: "#f7f7f3" });
				$(this).removeClass("checked");
				var selected = $(this);
				arrayDeletorForQ2(selected);
			} else if ($(this).hasClass("checked") == false) {
				$(this).css({ borderColor: "#195194" });
				$(this).addClass("checked");
				var selected = $(this);
				arrayCreatorForQ2(selected);
			}
		});
	}, 500);

	return (q2Completed = true);
}

function q3() {
	$(
		".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4, .imgContainer5"
	).animate({ opacity: 0 });
	$(".optionsDiv p").animate({ opacity: 0 });
	$(".ques, .quesSub, .quesNo").animate({ opacity: 0 });
	$(".prevQuesArrow").animate({ opacity: 1 });
	setTimeout(function () {
		$(".imgContainer .row").addClass("justify-content-center");

		$(".imgContainer1, .imgContainer3, .imgContainer5").css({
			display: "none",
		});

		$(".quesNo").html("3.");
		$(".quesNo").animate({ opacity: 1 });
		$(".ques").html("Do you love what you are doing?");
		$(".ques").animate({ opacity: 1 });
		$(".quesSub").html(
			"We love what we do and we dedicate ourselves 100% to every project we get involved in. We consider it to be the special ingredient that gives charm to our work and we want to have clients similar to us. "
		);
		$(".ques, .quesSub, .quesNo").animate({ opacity: 1 });
		$(".imgContainer2").html(
			'<img src="../assets/media/contact/q3/yesImg.png" alt="" class="identityImg yesImg" name="loveYes" /><p class="yesText" id="yes">Yes</p>'
		);
		$(".imgContainer4").html(
			'<img src="../assets/media/contact/q3/noImg.png" alt="" class="identityImg noImg" name="loveNo" /><p class="noText" id="yes">No</p>'
		);

		$(".imgContainer3, .imgContainer1, .imgContainer5").html("");

		$(".imgContainer2, .imgContainer4").animate({
			opacity: 1,
			display: "block",
		});
		$(".optionsDiv").animate({});
		$(".identityImg").click(function () {
			if ($(this).hasClass("checked") == true) {
				$(this).css({ borderColor: "#f7f7f3" });
				$(this).removeClass("checked");
				var selected = $(this);
				arrayDeletorForQ3(selected);
			} else if ($(this).hasClass("checked") == false) {
				$(this).css({ borderColor: "#195194" });
				$(this).addClass("checked");
				var selected = $(this);
				arrayCreatorForQ3(selected);
			}
		});
	}, 500);

	console.log("q3");
	return (q3Completed = true);
}

function q4() {
	$(
		".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4, .imgContainer5"
	).animate({ opacity: 0 });
	$(".optionsDiv p").animate({ opacity: 0 });
	$(".ques, .quesSub, .quesNo").animate({ opacity: 0 });
	$(".prevQuesArrow").animate({ opacity: 1 });
	$(".nextQuesArrow").animate({ opacity: 1 });

	setTimeout(function () {
		$(".imgContainer5").css({ display: "none" });

		$(
			".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4"
		).addClass("col-lg-2");
		$(
			".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4"
		).addClass("text-center");
		$(
			".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4"
		).addClass("my-sm-5");
		$(
			".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4"
		).removeClass("col-lg-6");
		$(
			".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4"
		).removeClass("my-sm-1");

		$(".quesNo").html("4.");
		$(".quesNo").animate({ opacity: 1 });
		$(".ques").html("How much would u like to invest?");
		$(".ques").animate({ opacity: 1 });
		$(".quesSub").html(
			"This is an important information, we ask about it because we want to know how commited you are with your project. "
		);
		$(".ques, .quesSub, .quesNo").animate({ opacity: 1 });

		$(".imgContainer1").html(
			'<img src="../assets/media/contact/q4/3kImg.png" alt="" class="identityImg" name="upto3K" /><p>$ 1,000 to $ 3,000</p>'
		);

		$(".imgContainer2").html(
			'<img src="../assets/media/contact/q4/5kImg.png" alt="" class="identityImg" name="upto5K" /><p>$ 3,000 to $ 5,000</p>'
		);
		$(".imgContainer3").html(
			'<img src="../assets/media/contact/q4/10kImg.png" alt="" class="identityImg" name="upto10K" /><p>$ 5,000 to $ 10,000</p>'
		);
		$(".imgContainer4").html(
			'<img src="../assets/media/contact/q4/25kImg.png" alt="" class="identityImg" name="upto25K" /><p>$ 10,000 - $ 25,000</p>'
		);
		$(".imgContainer5").html(
			'<img src="../assets/media/contact/q4/unlimitedImg.png" alt="" class="identityImg" name="Not an issue" /><p>Not an issue</p>'
		);

		/* $(".imgContainer5").css({ display: "block" }); */

		$(
			".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4, .imgContainer5"
		).animate({
			opacity: 1,
		});

		$(
			".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4, .imgContainer5"
		).css({ display: "block" });

		$(".optionsDiv").animate({});
		$(".identityImg").click(function () {
			if ($(this).hasClass("checked") == true) {
				$(this).css({ borderColor: "#f7f7f3" });
				$(this).removeClass("checked");
				var selected = $(this);
				arrayDeletorForQ4(selected);
			} else if ($(this).hasClass("checked") == false) {
				$(this).css({ borderColor: "#195194" });
				$(this).addClass("checked");
				var selected = $(this);
				arrayCreatorForQ4(selected);
			}
		});
	}, 500);

	console.log("q4");
	return (q4Completed = true);
}

function q5() {
	$(
		".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4, .imgContainer5"
	).animate({ opacity: 0 });
	$(".optionsDiv p").animate({ opacity: 0 });
	$(".ques, .quesSub, .quesNo").animate({ opacity: 0 });
	$(".prevQuesArrow").animate({ opacity: 1 });
	$(".nextQuesArrow").animate({ opacity: 0 });

	setTimeout(function () {
		$(".quesNo").html("5.");
		$(".quesNo").animate({ opacity: 1 });
		$(".ques").html("Can't wait to connect with you!");
		$(".ques").animate({ opacity: 1 });
		$(".quesSub").html(
			"Please fill in the details below so that we can get in contact with you."
		);
		$(".ques, .quesSub, .quesNo").animate({ opacity: 1 });
		$(".imgContainer5").css({ display: "none" });

		$(
			".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4"
		).removeClass("col-lg-2");
		$(
			".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4"
		).removeClass("text-center");
		$(
			".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4"
		).removeClass("my-sm-5");
		$(
			".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4"
		).addClass("col-lg-6");
		$(
			".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4"
		).addClass("my-sm-1");

		$(".imgContainer1").html(
			'<p class="inputText">Name</p><input type="text" class="nameInput inputs" name="fullName" required />'
		);

		$(".imgContainer2").html(
			'<p class="inputText">Phone number</p><input type="text" class="numberText inputs" name="phone" required />'
		);

		$(".imgContainer3").html(
			'<p class="inputText">Email address</p><input type="email" class="emailText inputs" name="email" required />'
		);

		$(".imgContainer4").html(
			'<p class="inputText">Link to your website(optional)</p><input type="url" class="websiteLink inputs" name ="webLink" required />'
		);

		$(".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4").animate(
			{
				opacity: 1,
			}
		);

		$(".imgContainer1, .imgContainer2, .imgContainer3, .imgContainer4").css({
			display: "block",
		});

		$(".submitBtnDiv").css({ display: "block" });

		$(".submitBtnDiv").animate({ opacity: 1 });

		$(".imgContainer5").css({ display: "none" });

		/* $(".imgContainer .row").append(
			'<div class="col-lg-12 submitBtn text-center">Submit</div>'
		); */
	}, 500);

	console.log("q5");
	return (q5Completed = true);
}

/* Responsiveness of Arrows */
var width = $(window).width();
if (width < 992) {
	$(".nextQuesArrowDiv").prepend(
		'<i class="bi bi-arrow-left prevQuesArrow"></i>'
	);
	$(".prevQuesArrowDiv").animate({ opacity: 0 });
}

$(".nextQuesArrow").click(function () {
	if (q1Completed == true) {
		q2();
		q1Completed = false;
		return;
	} else if (q2Completed == true) {
		q3();
		q2Completed = false;
		return;
	} else if (q3Completed == true) {
		q4();
		q3Completed = false;
		return;
	} else if (q4Completed == true) {
		q5();
		q4Completed = false;
		return;
	}
});

$(".prevQuesArrow").click(function () {
	if (q2Completed == true) {
		q1();
		q2Completed = false;
		return;
	} else if (q3Completed == true) {
		q2();
		q3Completed = false;
		return;
	} else if (q4Completed == true) {
		q3();
		q4Completed = false;
		return;
	} else if (q5Completed == true) {
		q4();
		q5Completed = false;
		return;
	}
});

$(document).ready(function () {
	q1();
});
