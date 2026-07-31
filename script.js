const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");

const welcomePage = document.getElementById("welcomePage");
const letterPage = document.getElementById("letterPage");

const hearts = document.getElementById("hearts");
const stars = document.getElementById("stars");

// ==========================================
// CREATE STARS
// ==========================================

function createStars() {

    for (let i = 0; i < 180; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        star.style.animationDuration =
            (1 + Math.random() * 3) + "s";

        star.style.opacity = Math.random();

        stars.appendChild(star);

    }

}

createStars();

// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (20 + Math.random() * 30) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 350);

// ==========================================
// LOVE COUNTER
// ==========================================

const startDate = new Date("2026-01-01T00:00:00");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days =
        Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(diff / (1000 * 60 * 60)) % 24;

    const minutes =
        Math.floor(diff / (1000 * 60)) % 60;

    const seconds =
        Math.floor(diff / 1000) % 60;

    document.getElementById("time").innerHTML =

        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}

setInterval(updateCounter, 1000);

updateCounter();

// ==========================================
// START BUTTON
// ==========================================

startBtn.addEventListener("click", () => {

    bgMusic.play().catch(() => {});

    welcomePage.classList.add("hidden");

    letterPage.classList.remove("hidden");

    // Part 2 မှာ ဒီ Function ကို ရေးမယ်
    startLetter();

});

const letter = [

"❤️ Happy Monthsary ❤️",

"My Dearest Ivy,",

"From the very first day",

"you came into my life,",

"everything became brighter",

"and more meaningful.",

"Your smile",

"is my happiness.",

"Your love",

"is my greatest strength.",

"Every memory",

"we've created together",

"is a treasure",

"that I will always keep",

"in my heart.",

"No matter",

"where life takes us...",

"I will",

"always choose you.",

"Today...",

"Tomorrow...",

"And every day",

"after that...",

"I will always love you.",

"Forever and Always ❤️"

];

const typing = document.getElementById("typing");

let lineIndex = 0;

function startLetter(){

    showNextLine();

}

function showNextLine(){

    if(lineIndex >= letter.length){

        setTimeout(showGallery,2000);

        return;

    }

    typing.innerHTML="";

    typing.style.opacity=1;

    const words = letter[lineIndex].split(" ");

    let wordIndex = 0;

    const timer = setInterval(()=>{

        typing.innerHTML += words[wordIndex] + " ";

        wordIndex++;

        if(wordIndex >= words.length){

            clearInterval(timer);

            setTimeout(()=>{

                typing.style.opacity=0;

                setTimeout(()=>{

                    lineIndex++;

                    showNextLine();

                },800);

            },1800);

        }

    },250);

}
const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg"
];

const galleryPage = document.getElementById("galleryPage");
const endingPage = document.getElementById("endingPage");
const galleryImage = document.getElementById("galleryImage");

// Gallery Function
function showGallery() {

    // Hide Letter
    letterPage.classList.add("hidden");

    // Show Gallery
    galleryPage.classList.remove("hidden");

    let index = 0;

    galleryImage.src = photos[index];

    const slide = setInterval(() => {

        galleryImage.style.opacity = 0;

        setTimeout(() => {

            index++;

            if (index >= photos.length) {
                index = 0;
            }

            galleryImage.src = photos[index];

            galleryImage.style.opacity = 1;

        }, 500);

    }, 3000);

    // Show Ending after 15 sec
    setTimeout(() => {

        clearInterval(slide);

        galleryPage.classList.add("hidden");

        endingPage.classList.remove("hidden");

    }, 15000);

}
