const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/* arrows */
let baliseBanner = document.getElementById("banner");
// console.log(baliseBanner);

let leftArrowSrc = "./assets/images/arrow_left.png";
let rightArrowSrc = "./assets/images/arrow_right.png";

let newLeftArrow = document.createElement("img");
let newRightArrow = document.createElement("img");

newLeftArrow.className += "arrow arrow_left";
newRightArrow.className += "arrow arrow_right";
newLeftArrow.src = leftArrowSrc;
newRightArrow.src = rightArrowSrc;
newLeftArrow.setAttribute("alt", "image flèche gauche");
newRightArrow.setAttribute("alt", "image flèche droite")
// console.log(newLeftArrow);
// console.log(newRightArrow);

baliseBanner.appendChild(newLeftArrow);
baliseBanner.appendChild(newRightArrow);

newLeftArrow.addEventListener("click", () => {
	// console.log("Vous avez cliqué sur la flèche de gauche")
	if (activeDot > 0) {
		allDots[activeDot - 1].classList.add("dot_selected");
		allDots[activeDot].classList.remove("dot_selected");
		
		let activeSlide = document.querySelector(".banner-img");
		activeSlide.src = `${slides[activeDot - 1].image}`;

		let activeTagline = document.querySelector("#banner p");
		activeTagline.innerHTML = slides[activeDot - 1].tagLine;
		
		// console.log(slides[activeDot - 1].image);
		// console.log(slides[activeDot - 1].tagLine);
		// console.log(activeDot - 1);
		activeDot--
	} else {
		allDots[allDots.length - 1].classList.add("dot_selected");
		allDots[activeDot].classList.remove("dot_selected");

		let activeSlide = document.querySelector(".banner-img");
		activeSlide.src = `${slides[allDots.length - 1].image}`;

		let activeTagline = document.querySelector("#banner p");
		activeTagline.innerHTML = slides[allDots.length - 1].tagLine;
		// console.log(activeDot);
		activeDot = allDots.length - 1;
	}
})

newRightArrow.addEventListener("click", () => {
	// console.log("Vous avez cliqué sur la flèche de droite");
	if (activeDot < allDots.length -1) {
		allDots[activeDot + 1].classList.add("dot_selected");
		allDots[activeDot].classList.remove("dot_selected");
		
		let activeSlide = document.querySelector(".banner-img");
		activeSlide.src = `${slides[activeDot + 1].image}`;

		let activeTagline = document.querySelector("#banner p");
		activeTagline.innerHTML = slides[activeDot + 1].tagLine;
		
		// console.log(slides[activeDot + 1].image);
		// console.log(slides[activeDot + 1].tagLine);
		// console.log(activeDot + 1);
		activeDot++
	} else {
		allDots[0].classList.add("dot_selected");
		allDots[activeDot].classList.remove("dot_selected");

		let activeSlide = document.querySelector(".banner-img");
		activeSlide.src = `${slides[0].image}`;
		let activeTagline = document.querySelector("#banner p");
		activeTagline.innerHTML = slides[0].tagLine;
		activeDot = 0;
		// console.log(activeDot);
	}
	
	
})

/* dots */
let baliseDots = document.querySelector(".dots");
// console.log(baliseDots)

for (let i = 0; i < slides.length; i++) {
	let newDot = document.createElement("span");
	newDot.className += "dot";
	baliseDots.appendChild(newDot);
}

let allDots = baliseDots.querySelectorAll(".dot");
let activeDot = 0;
allDots[activeDot].classList.add("dot_selected");
// console.log(allDots);



