  const intro = document.getElementById("intro");
const proposal = document.getElementById("proposal");
const finalScreen = document.getElementById("final");

const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const loveBtn = document.getElementById("loveBtn");

const music = document.getElementById("bgMusic");
const hearts = document.getElementById("hearts");

// Start button
startBtn.addEventListener("click", () => {

    music.play().catch(() => {});

    intro.classList.add("hidden");
    proposal.classList.remove("hidden");

    createHearts();

});

// YES button
yesBtn.addEventListener("click", () => {

    proposal.classList.add("hidden");
    finalScreen.classList.remove("hidden");

    createConfetti();

});

// FOREVER button
loveBtn.addEventListener("click", () => {

    alert("❤️ I Love You Forever Maryam ❤️");

});

// Floating Hearts
function createHearts(){

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = (20 + Math.random() * 40) + "px";

        heart.style.animationDuration = (4 + Math.random() * 4) + "s";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);

    }, 300);

}

// Confetti Effect
function createConfetti(){

    for(let i = 0; i < 150; i++){

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = ["❤️","💖","💘","💝","💕"][Math.floor(Math.random()*5)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = (18 + Math.random() * 30) + "px";

        heart.style.animationDuration = (2 + Math.random() * 2) + "s";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}