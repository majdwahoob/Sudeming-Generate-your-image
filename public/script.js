let dynamicText;
if(window.innerWidth < 500) {
    dynamicText = document.querySelector(".website__title .title .title-500");
} else {
    dynamicText = document.querySelector(".website__title .title p span");
}
const words = ["Generate your image", "Free webiste", "uwu"];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
    let currentWord = words[wordIndex];
    let currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if(!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if(isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
};

document.querySelector(".hamburger").onclick = function() {
    document.querySelector(".nav-bar").classList.toggle("active");
    document.querySelector("main").classList.toggle("active");
}

typeEffect();