const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const buttons = document.querySelector(".buttons");
const result = document.getElementById("result");
const heartsBox = document.querySelector(".hearts");
const music = document.getElementById("music");

let yesScale = 1;

// YES clicked 💖
yesBtn.addEventListener("click", () => {
    question.textContent = "She said YES 💘🥹";
    buttons.style.display = "none";
    result.classList.remove("hidden");

    music.currentTime = 0;
    music.play();

    startHearts();
});

// NO clicked 😈
noBtn.addEventListener("click", () => {
    yesScale += 0.25;
    yesBtn.style.transform = `scale(${yesScale})`;

    moveNo();
});

// NO hover escape
noBtn.addEventListener("mouseover", moveNo);

function moveNo() {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Hearts animation
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (18 + Math.random() * 14) + "px";
        heartsBox.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }, 250);
}
