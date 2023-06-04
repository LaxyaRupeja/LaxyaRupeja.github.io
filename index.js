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