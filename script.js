// ==========================
// Typing Animation
// ==========================

const roles = [
    "Web Developer",
    "Frontend Developer",
    "CSE Student",
    "Problem Solver",
    "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {

    currentRole = roles[roleIndex];

    const typingElement =
        document.getElementById("typing");

    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (
            charIndex ===
            currentRole.length
        ) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (
                roleIndex ===
                roles.length
            ) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 60 : 120
    );
}

typeEffect();


// ==========================
// Scroll Reveal
// ==========================

const revealElements =
document.querySelectorAll(
".glass-card, .skill-card"
);

function reveal() {

    revealElements.forEach(
    element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element
            .getBoundingClientRect()
            .top;

        const revealPoint = 120;

        if (
            revealTop <
            windowHeight - revealPoint
        ) {

            element.classList.add(
                "active"
            );
        }
    });
}

window.addEventListener(
    "scroll",
    reveal
);

reveal();


// ==========================
// Active Navigation
// ==========================

const sections =
document.querySelectorAll(
"section"
);

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
() => {

    let current = "";

    sections.forEach(
    section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >=
            sectionTop
        ) {
            current =
            section.getAttribute(
                "id"
            );
        }

    });

    navLinks.forEach(
    link => {

        link.classList.remove(
            "active-link"
        );

        if (
            link.getAttribute(
                "href"
            ) === "#" + current
        ) {

            link.classList.add(
                "active-link"
            );
        }
    });

});


// ==========================
// Navbar Scroll Effect
// ==========================

window.addEventListener(
"scroll",
() => {

    const nav =
    document.querySelector(
        "nav"
    );

    if (
        window.scrollY > 50
    ) {

        nav.style.background =
        "rgba(5,8,22,0.95)";

        nav.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.3)";

    } else {

        nav.style.background =
        "rgba(255,255,255,.05)";

        nav.style.boxShadow =
        "none";
    }

});


// ==========================
// Skill Card Hover Effect
// ==========================

const cards =
document.querySelectorAll(
".skill-card"
);

cards.forEach(card => {

    card.addEventListener(
    "mousemove",
    e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateX =
        ((y - centerY) /
        centerY) * -8;

        const rotateY =
        ((x - centerX) /
        centerX) * 8;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        `;
    });

    card.addEventListener(
    "mouseleave",
    () => {

        card.style.transform =
        `
        perspective(1000px)
        rotateX(0)
        rotateY(0)
        `;
    });

});


// ==========================
// Smooth Scroll
// ==========================

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor => {

    anchor.addEventListener(
    "click",
    function(e){

        e.preventDefault();

        document
        .querySelector(
            this.getAttribute(
                "href"
            )
        )
        .scrollIntoView({

            behavior:
            "smooth"

        });

    });

});


// ==========================
// Console Message
// ==========================

console.log(
"%cPortfolio Designed By Kolluri Sidhartha",
"color:#38bdf8;font-size:16px;font-weight:bold;"
);