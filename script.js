const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const question = document.getElementById("question");

// YES button click
yesBtn.addEventListener("click", () => {
    question.style.display = "none";
    document.querySelector(".buttons").style.display = "none";
    result.classList.remove("hidden");
});

// NO button runs away 😈
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
