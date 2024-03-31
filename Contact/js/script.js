"use strict";

document.addEventListener("DOMContentLoaded", function (e) {
	const nav = document.querySelector(".navMenu");
	const burgerMenu = document.querySelector(".burgerMenuLink");
	const body = document.querySelector("body");
	let resized = window.innerWidth;
	window.addEventListener("resize", () => {
		console.log(resized);
		if (resized > 960) {
			console.log("yes");
			body.classList.remove("noMove");
			nav.classList.remove("open");
			burgerMenu.classList.remove("open");
		}
		resized = window.innerWidth;
	});

	// Function
	const mobileMenu = function () {
		nav.addEventListener("click", (e) => {
			if (e.target.tagName.toLowerCase() === "a" && resized < 960) {
				body.classList.toggle("noMove");
				nav.classList.toggle("open");
				burgerMenu.classList.toggle("open");
			}
		});
		console.log("test");
		burgerMenu.addEventListener("click", () => {
			if (resized < 960) {
				body.classList.toggle("noMove");
				nav.classList.toggle("open");
				burgerMenu.classList.toggle("open");
			}
		});
	};

	mobileMenu();

	// Form Subject
	const subject = document.getElementById("subject");
	const option = subject.querySelector(".default");

	subject.addEventListener("change", (e) => {
		console.log(subject.value);
		if (subject.value >= 1) {
			subject.classList.add("subjectColored");
		} else {
			subject.classList.remove("subjectColored");
		}
	});
	console.log(subject.value);
});
