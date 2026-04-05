// Typing Animation
const text = ["Flutter Developer", "AI Enthusiast", "Problem Solver"];
let i = 0, j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = text[i];

    if (!isDeleting) {
        document.getElementById("typing").innerHTML = currentText.substring(0, j++);
        if (j > currentText.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.getElementById("typing").innerHTML = currentText.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}

type();


// Dark Mode Toggle
const toggle = document.getElementById("toggle");

toggle.onclick = () => {
    document.body.classList.toggle("light");
};