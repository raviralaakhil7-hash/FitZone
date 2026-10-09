// ===============================
// BMI CALCULATOR
// ===============================

function calculateBMI() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = document.getElementById("result");

    if (height === "" || weight === "") {
        result.innerHTML = "Please enter height and weight.";
        result.style.color = "yellow";
        return;
    }

    let bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(1);

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi < 25) {
        status = "Healthy";
    } else if (bmi < 30) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    result.innerHTML = `BMI : ${bmi} (${status})`;
    result.style.color = "#00ff99";
}


// ===============================
// STICKY NAVBAR EFFECT
// ===============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#000";
        navbar.style.boxShadow = "0 0 15px rgba(255,59,59,.4)";
    } else {
        navbar.style.background = "rgba(0,0,0,.8)";
        navbar.style.boxShadow = "none";
    }

});


// ===============================
// SCROLL ANIMATION
// ===============================

const cards = document.querySelectorAll(".card, .price-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons = document.querySelectorAll("button,.hero-btn,.btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ff3b3b";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "20px";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// HERO IMAGE ROTATION
// ===============================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    heroImage.addEventListener("mousemove", () => {

        heroImage.style.transform = "rotate(2deg) scale(1.03)";

    });

    heroImage.addEventListener("mouseleave", () => {

        heroImage.style.transform = "rotate(0deg) scale(1)";

    });

}


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("🏋️ Welcome to FitZone Gym Website!");