const leftAds = document.querySelector("#section--1");
const jokeSection = document.querySelector("#section--2");
const rightAds = document.querySelector("#section--3");
const Categories = document.querySelectorAll(".buttons-decor");
const jokeScreenData = document.getElementById("jokeScreen");
const refershJoke = document.getElementById("referseJoke");

let selectedCategory = "Any";

const getJoke = async (category) => {
	let jokeDataFromAPI = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
	let jokeData = await jokeDataFromAPI.json();
	console.log(jokeData);
	const { setup = "", joke = "" } = jokeData;
	console.log(setup, joke);
	jokeScreenData.innerText = setup || joke;
};

addClassToButton = (selBtn) => {
	Categories.forEach((btn) => btn.classList.remove("buttonsSelected"));
	selBtn.classList.add("buttonsSelected");
};

getJoke(selectedCategory);
Categories.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		addClassToButton(btn);
		selectedCategory = btn.value;
		getJoke(selectedCategory);
		e.preventDefault();
	});
});

refershJoke.addEventListener("click", () => getJoke(selectedCategory));
window.addEventListener("keypress", (e) => {
	if (e.key === "f") getJoke(selectedCategory);
});

// ["click", "keypress"].forEach((evt) => {
// 	refershJoke.addEventListener(evt, (e) => {
// 		if (evt === "keypress" && e.key === "f") getJoke(selectedCategory);
// 		getJoke(selectedCategory);
// 	});
// });
