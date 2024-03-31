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

	// Animations
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(
			(entry) => {
				console.log(entry);
				if (entry.isIntersecting) {
					console.log(entry.target);
				}
			},
			{
				threshold: 1,
			}
		);
	});

	const fadeTexts = document.querySelectorAll(".hiddenText");
	fadeTexts.forEach((el) => observer.observe(el));
});
