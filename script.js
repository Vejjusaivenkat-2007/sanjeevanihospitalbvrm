// ===============================
// Sticky Header
// ===============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";

    } else {

        header.style.background = "rgba(255,255,255,0.9)";
        header.style.boxShadow = "none";

    }

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===============================
// Fade Animation on Scroll
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".stat-card h2");

const speed = 100;

counters.forEach(counter => {

    const animate = () => {

        const value = +counter.innerText.replace(/\D/g, "");

        const data = +counter.getAttribute("data-count") || value;

        const time = data / speed;

        if (value < data) {

            counter.innerText = Math.ceil(value + time);

            setTimeout(animate, 30);

        } else {

            counter.innerText = data + "+";

        }

    };

});


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

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
// Loading Screen
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ===============================
// Current Year
// ===============================

const year = new Date().getFullYear();

const copy = document.querySelector(".copyright p");

if (copy) {

    copy.innerHTML = `© ${year} Sanjeevani Hospitals. All Rights Reserved.`;

}