// Typing Effect
const text = "V.GOPALAN";
const name = document.getElementById("name");

let i = 0;

function typing() {
    if (i < text.length) {
        name.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 120);
    }
}

name.innerHTML = "";
typing();

const resume = document.getElementById("resume");
const resumeBtn = document.getElementById("resumeBtn");
const closeBtn = document.getElementById("close");

// Open Resume
resumeBtn.addEventListener("click", () => {
    resume.style.display = "block";
});

// Open Resume by Clicking Name
name.addEventListener("click", () => {
    resume.style.display = "block";
});

// Close Resume
closeBtn.addEventListener("click", () => {
    resume.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === resume) {
        resume.style.display = "none";
    }
});

// Glow Animation
setInterval(() => {
    name.style.textShadow = "0 0 35px #00BFFF";
    setTimeout(() => {
        name.style.textShadow = "0 0 15px #00BFFF";
    }, 500);
}, 1000);
const video = document.getElementById("bg-video");

document.addEventListener("click", () => {
    video.muted = false;
    video.play();
}, { once: true });