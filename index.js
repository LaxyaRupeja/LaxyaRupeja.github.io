AOS.init();
var typing = new Typed(".text", {
    strings: ["I'm a Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
})
let mobNav = document.querySelector(".mobile-nav")
let ham = document.getElementById("nav-icon1");
ham.addEventListener("click", () => {
    // if (ham.classList.contains("open")) {
    //     ham.classList.remove("open")
    // }
    // else {
    //     ham.classList.add("open")
    // }
    ham.classList.toggle("open")
    mobNav.classList.toggle("is-active")
})
let mobNavLink = document.querySelectorAll(".mobile-nav > a");
for (let i = 0; i < mobNavLink.length; i++) {
    mobNavLink[i].addEventListener("click", () => {
        ham.classList.toggle("open")
        mobNav.classList.toggle("is-active")
    })
}

document.getElementById("resume-button-2").addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1nUd09vYcRT0cpGvW3r0YPhmqyqyomGAz/view?usp=sharing", "__blank")
})
document.getElementById("resume-button-1").addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1nUd09vYcRT0cpGvW3r0YPhmqyqyomGAz/view?usp=sharing", "__blank")
})
